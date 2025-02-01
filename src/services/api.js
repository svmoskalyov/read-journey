import { nanoid } from 'nanoid'
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithEmailAndPassword, updateProfile, signOut
} from 'firebase/auth'
import { getDatabase, ref, child, get, set, remove, update } from 'firebase/database'
import './firebaseConfig'

const auth = getAuth()
const db = getDatabase()

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

export const getRecommendedApi = async () => {
  const dbRef = ref(getDatabase())
  return get(child(dbRef, 'recommended')).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return 'No data available'
    }
  }).catch((error) => {
    console.error(error)
  })
}

export const addBookApi = async (book) => {
  const uid = auth.currentUser.uid
  const id = book.id
  const bookRef = ref(db, `users/${uid}/${id}`)
  await set(bookRef, book)
}

export const statusBookApi = (idBook, status) => {
  const uid = auth.currentUser.uid
  update(ref(db, `users/${uid}/${idBook}`), { status })
}

export const addProgressItemApi = (idBook, progressItem) => {
  const uid = auth.currentUser.uid
  const idItem = nanoid()
  const bookRef = ref(db, `users/${uid}/${idBook}/progress/${idItem}`)
  set(bookRef, progressItem)
}

export const removeProgressItemApi = (idBook, idItem) => {
  const uid = auth.currentUser.uid
  remove(ref(db, `users/${uid}/${idBook}/progress/${idItem}`))
}

export const removeBookApi = (id) => {
  const uid = auth.currentUser.uid
  remove(ref(db, `users/${uid}/${id}`))
}
