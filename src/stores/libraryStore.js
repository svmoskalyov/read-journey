import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addBookApi, removeBookApi } from '@/services/api'
import { useRecommendedStore } from '@/stores/recommendedStore.js'

const initialState = {
  books: [],
  isAdded: false,
  isLoading: false,
  error: null
}

export const useLibraryStore = create()(
  persist(
    set =>
      ({
        ...initialState,
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
        resetDefault: () => set(initialState)
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
