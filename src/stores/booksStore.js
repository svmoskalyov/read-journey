import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addBookApi, getRecommendedApi, removeBookApi, updateBookApi } from '@/services/api'

export const useRecommendedStore = create()(
  persist(
    (set, get) =>
      ({
        books: [],
        title: '',
        author: '',
        isLoading: false,
        error: null,
        getBooks: async () => {
          set({ isLoading: true })
          try {
            const data = await getRecommendedApi()
            set({ books: data })
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        changeStatus: (id) => {
          const books = get().books
          const updatedBooks = books?.map((book) => {
            if (book.id === id) {
              return {
                ...book,
                recommended: !book.recommended
              }
            } else {
              return book
            }
          })
          set({ books: updatedBooks })
        },
        setTitle: (value) => set({ title: value }),
        setAuthor: (value) => set({ author: value }),
        resetBooks: () => set({ books: [] })
      }),
    {
      name: 'books-recommended',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !['isLoading'].includes(key) &&
              !['error'].includes(key) &&
              !['title'].includes(key) &&
              !['author'].includes(key)
          )
        )
    }
  ))

export const useLibraryStore = create()(
  persist(
    set =>
      ({
        books: [],
        isAdded: false,
        isRead: false,
        isLoading: false,
        error: null,
        addBook: (book) => {
          set({ isLoading: true })
          try {
            const newBook = {
              ...book,
              status: 'unread'
            }
            addBookApi(newBook)
            set({ isAdded: true })
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        updateBook: (book) => {
          console.log('update book -- ', book)
          updateBookApi(book)
        },
        removeBook: (book) => {
          set({ isLoading: true })
          try {
            removeBookApi(book.id)
            if (book.recommended) {
              useRecommendedStore.getState().changeStatus(book.id)
            }
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        setBooks: (value) => set({ books: value }),
        setIsAdded: (value) => set({ isAdded: value }),
        setIsRead: (value) => set({ isRead: value })
      }),
    {
      name: 'books-library',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !['isLoading'].includes(key) &&
              !['error'].includes(key) &&
              !['isAdded'].includes(key) &&
              !['isRead'].includes(key)
          )
        )
    }
  )
)

export const useReadingStore = create()(
  persist(
    (set, get) =>
      ({
        book: {},
        readingStart: {},
        readingStop: {},
        // isReading: false,
        setBook: (book) => {
          console.log('set book -- ', book)
          set({ book })
        },
        // updateBook: (book) => {
        //   console.log('update book -- ', book)
        //   updateBookApi(book)
        // },
        setReadingStart: (startPage) => {
          console.log('readingStart -- ', startPage)
          const readBook = {
            startPage,
            startReading: '',
            status: 'active'
          }
          console.log('readingStart -- ', readBook)
          set({ readingStart: readBook })
        },
        setReadingStop: () => {
          // const book = get().book
          console.log('readingStop -- ')
          // if (book.progress) {}
          // if (!book.progress) {}
          // const changedBook = {
          //   ...book,
          //   newProgress
          // }
          // set({ book: changedBook })
          // set({ readingStatus: false })
        },
        readingFinish: () => {
          console.log('readingFinish -- ')
        },
        // setIsReading: (value) => set({ isReading: value }),
        deleteBook: () => set({ book: {} })
      }),
    {
      name: 'book-reading'
    }
  )
)
