import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addBookApi, getRecommendedApi, removeBookApi } from '@/services/api'

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
