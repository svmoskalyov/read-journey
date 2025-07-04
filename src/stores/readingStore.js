import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  addProgressItemApi, readingFinishApi, removeProgressItemApi,
  statusBookApi
} from '@/services/api'

const initialState = {
  book: {},
  readingBook: {},
  isReading: false,
  isReaded: false,
  isLoading: false,
  error: null
}

export const useReadingStore = create()(
  persist(
    (set, get) =>
      ({
        ...initialState,
        setBook: (book) => {
          set({ book })
        },
        setReadingStart: ({ page }) => {
          const readBook = {
            startPage: page,
            startReading: new Date().toJSON(),
            status: 'active'
          }
          set({ readingBook: readBook, isReading: true })
        },
        setReadingStop: async ({ page }) => {
          const book = get().book
          const readingBook = get().readingBook
          const dateStart = new Date(readingBook.startReading)
          const dateEnd = Date.now()
          const timeDifferenceMS = dateEnd - dateStart
          const timeDifferenceMins = Math.floor(timeDifferenceMS / 60000) % 60
          const readingSpeed = Math.floor((page * 60) / timeDifferenceMins)
          const readBook = {
            ...readingBook,
            finishPage: page,
            finishReading: new Date().toJSON(),
            speed: readingSpeed,
            status: 'inactive'
          }
          set({ isLoading: true })
          try {
            if (readingBook.startPage === 0) {
              statusBookApi(book.id, 'in-progress')
            }
            addProgressItemApi(book.id, readBook)
            set({ readingBook: {}, isReading: false })
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        removeProgressItem: (idBook, idItem) => {
          const book = get().book
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
        readingFinish: (book) => {
          const dateStart = book.progress[0].startReading
          const dateEnd = book.progress[book.progress.length - 1].finishReading
          const total = Date.parse(dateEnd) - Date.parse(dateStart)
          // const seconds = Math.floor( (total/1000) % 60 )
          const minutes = Math.floor((total / 1000 / 60) % 60)
          const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
          const days = Math.floor(total / (1000 * 60 * 60 * 24))
          const timeLeftToRead = { days, hours, minutes }
          set({ isLoading: true })
          try {
            readingFinishApi(book.id, timeLeftToRead, 'done')
            set({ isReaded: true })
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        setIsReaded: (value) => set({ isReaded: value }),
        resetDefault: () => set(initialState)
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
