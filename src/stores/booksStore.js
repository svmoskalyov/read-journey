import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getRecommendedApi } from '@/services/api'

export const useRecommendedStore = create()(
  persist(
    set => ({
      books: [],
      getBooks: async () => {
        try {
          const data = await getRecommendedApi()
          set({ books: data })
        } catch (error) {
          console.error(error)
        }
      }
    }),
    {
      name: 'books-recommended'
    }
  )
)
