import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithEmailAndPassword, updateProfile, signOut
} from 'firebase/auth'
import './firebaseConfig'

const auth = getAuth()

export const signupUserApi = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth, email, password)
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

export const signinUserApi = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password)
export const currentUserApi = () => auth.currentUser
export const signoutUserApi = () => signOut(auth)


import { getDatabase, ref, child, get } from 'firebase/database'

export const getRecommendedApi = async () => {
  const dbRef = ref(getDatabase())
  return get(child(dbRef, 'recommended')).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
      // console.log(snapshot.val())
    } else {
      return 'No data available'
      // console.log('No data available')
    }
  }).catch((error) => {
    console.error(error)
  })
}
