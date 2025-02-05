import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getRecommendedApi } from '@/services/api'

const initialState = {
  books: [],
  title: '',
  author: '',
  isLoading: false,
  error: null
}

export const useRecommendedStore = create()(
  persist(
    (set, get) =>
      ({
        ...initialState,
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
        resetDefault: () => set(initialState)
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
