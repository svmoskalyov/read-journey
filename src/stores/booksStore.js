import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addBookApi, getRecommendedApi } from '@/services/api'

export const useRecommendedStore = create()(
  persist(
    set =>
      ({
        books: [],
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
        setBooks: () => {
          set({ books: [] })
        }
      }),
    {
      name: 'books-recommended'
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
        getBooks: async () => {
          set({ isLoading: true })
          try {
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        updateBook: async ({ id }) => {
          set({ isLoading: true })
          try {
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        setIsAdded: value => set({ isAdded: value }),
        setIsRead: value => set({ isRead: value })
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
