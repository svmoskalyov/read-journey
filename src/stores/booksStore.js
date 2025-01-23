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
        readingBook: {},
        isReading: false,
        setBook: (book) => {
          set({ book })
        },
        setReadingStart: ({ page }) => {
          const readBook = {
            startPage: page,
            startReading: new Date().toJSON(),
            status: 'active'
          }
          set({ readingBook: readBook })
          set({ isReading: true })
        },
        setReadingStop: ({ page }) => {
          const book = get().book
          const readingBook = get().readingBook
          // const dateStart = new Date(readingBook.startReading)
          // const dateEnd = Date.now()
          // const timeDifferenceMS = dateEnd - dateStart
          // const timeDifferenceMins = Math.floor(timeDifferenceMS / 60000) % 60
          // const readingSpeed = Math.floor((page * 60) / timeDifferenceMins)
          const readBook = {
            ...readingBook,
            finishPage: page,
            finishReading: new Date().toJSON(),
            // speed: readingSpeed,
            speed: 44,
            status: 'inactive'
          }
          const progressBook = book.progress ? book.progress : []
          progressBook.push(readBook)
          const newBook = {
            ...book,
            status: 'in-progress',
            progress: progressBook
          }
          useLibraryStore.getState().updateBook(newBook)
          set({ book: newBook, readingBook: {}, isReading: false })
        },
        readingFinish: () => {
          console.log('readingFinish -- ')
          // const readingBook = get().readingBook
          // const readBook = {
          //   ...readingBook,
          // }
          // console.log('readingStop -- ', readBook)
          // set({ readingBook: readBook })
          // set({ isReading: false })
        },
        setIsReading: (value) => set({ isReading: value }),
        deleteBook: () => set({ book: {} })
      }),
    {
      name: 'book-reading'
    }
  )
)
