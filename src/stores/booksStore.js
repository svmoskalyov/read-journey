import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  addBookApi,
  addProgressItemApi,
  getRecommendedApi,
  removeBookApi,
  removeProgressItemApi,
  statusBookApi
} from '@/services/api'

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
        isLoading: false,
        error: null,
        addBook: async (book) => {
          set({ isLoading: true })
          const newBook = {
            ...book,
            status: 'unread'
          }
          try {
            await addBookApi(newBook)
            if (!book.recommended) {
              set({ isAdded: true })
            }
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        changeStatus: (id, status) => {
          statusBookApi(id, status)
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
        setIsAdded: (value) => set({ isAdded: value })
      }),
    {
      name: 'books-library',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !['isLoading'].includes(key) &&
              !['error'].includes(key) &&
              !['isAdded'].includes(key)
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
        isReaded: false,
        isLoading: false,
        error: null,
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
        setReadingStop: async ({ page }) => {
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
          // addProgressItemApi(book.id, readBook)
          // useLibraryStore.getState().changeStatus(book.id, 'in-progress')
          // set({ readingBook: {}, isReading: false })

          set({ isLoading: true })
          try {
            addProgressItemApi(book.id, readBook)
            useLibraryStore.getState().changeStatus(book.id, 'in-progress')
            set({ readingBook: {}, isReading: false })
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        removeProgressItem: (idBook, idItem) => {
          const book = get().book
          // if (book.progress?.length === 1) {
          //   removeProgressItemApi(idBook, idItem)
          //   set({ readingBook: {}, isReading: false })
          // }
          // removeProgressItemApi(idBook, idItem)

          set({ isLoading: true })
          try {
            if (book.progress?.length === 1) {
              removeProgressItemApi(idBook, idItem)
              set({ readingBook: {}, isReading: false })
            }
            removeProgressItemApi(idBook, idItem)
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        readingFinish: () => {
          console.log('readingFinish -- ')
          // const book = get().book
          // useLibraryStore.getState().changeStatus(book.id, 'done')
          // set({ isReaded: true })
        },
        setIsReading: (value) => set({ isReading: value }),
        setIsReaded: (value) => set({ isReaded: value }),
        deleteBook: () => set({ book: {} })
      }),
    {
      name: 'book-reading',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !['isLoading'].includes(key) &&
              !['error'].includes(key) &&
              !['isReading'].includes(key) &&
              !['isReaded'].includes(key)
          )
        )
    }
  )
)
