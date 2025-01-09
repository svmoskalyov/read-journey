import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {
  signupUserApi,
  signinUserApi,
  currentUserApi,
  signoutUserApi
} from '@/api/authApi'

const initialState = {
  name: null,
  email: null,
  uid: null,
  verify: 'login',
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
              console.log('Email verification sent!')
              set({ verify: 'login' })
            }
          } catch (error) {
            set({ error: error.message })
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
              console.log('Please verify your email.')
            }
          } catch (error) {
            set({ error: error.message })
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
              console.log('User is signed out')
            }
          } catch (error) {
            set({ error: error.message })
            console.log('Current user. An error happened.')
            console.log(error)
          }
        },
        signoutUser: async () => {
          try {
            await signoutUserApi()
            set(initialState)
            console.log('Sign-out successful')
          } catch (error) {
            set({ error: error.message })
            console.log('Logout user. An error happened.')
            console.log(error)
          }
        },
        setVerify: value => set({ verify: value })
      }),
      {
        name: 'auth-storage',
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                !['isLoading'].includes(key) &&
                !['error'].includes(key) &&
                !['verify'].includes(key)
            )
          )
      }
    )
  )
)
