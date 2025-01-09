import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'
import './firebaseConfig'

const auth = getAuth()

export const signupUserApi = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await updateProfile(userCredential.user, {
    displayName: name
  })
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser)
  } else {
    throw new Error('Current user is null')
  }
  return userCredential
}

export const signinUserApi = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential
}

export const currentUserApi = () => auth.currentUser
export const signoutUserApi = () => signOut(auth)
