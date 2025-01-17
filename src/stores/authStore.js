import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {
  signupUserApi,
  signinUserApi,
  currentUserApi,
  signoutUserApi
} from '@/services/api'
import toast from '@/utils/toast'
import { useRecommendedStore } from '@/stores/booksStore'

const initialState = {
  name: null,
  email: null,
  uid: null,
  sent: false,
  isAuth: false,
  isLoading: false,
  error: null
}

export const useAuthStore = create()(
  devtools(
    persist(
      set => ({
        ...initialState,
        signupUser: async ({ name, email, password }) => {
          set({ isLoading: true })
          try {
            const { user } = await signupUserApi({
              name,
              email,
              password
            })
            if (user !== null) {
              toast('info', 'Email verification sent!')
              set({ sent: true })
            }
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        signinUser: async ({ email, password }) => {
          set({ isLoading: true })
          try {
            const { user } = await signinUserApi({
              email,
              password
            })
            if (user.emailVerified) {
              set({
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                isAuth: true,
                error: null
              })
            } else {
              toast('warning', 'Please verify your email.')
            }
          } catch (error) {
            set({ error: error.code })
          } finally {
            set({ isLoading: false })
          }
        },
        currentUser: () => {
          try {
            const user = currentUserApi()
            if (user !== null) {
              set({
                name: user.displayName,
                email: user.email,
                uid: user.uid
              })
            } else {
              toast('warning', 'User is signed out')
            }
          } catch (error) {
            set({ error: error.code })
            toast('error', 'Current user. An error happened.')
            console.log(error)
          }
        },
        signoutUser: async () => {
          try {
            await signoutUserApi()
            set(initialState)
            // useRecommendedStore.setState(initialState)
            useRecommendedStore.getState().resetBooks()
            toast('success', 'Sign-out successful')
          } catch (error) {
            set({ error: error.code })
            toast('error', 'Logout user. An error happened.')
            console.log(error)
          }
        }
      }),
      {
        name: 'auth-storage',
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                !['isLoading'].includes(key) &&
                !['error'].includes(key) &&
                !['sent'].includes(key)
            )
          )
      }
    )
  )
)
