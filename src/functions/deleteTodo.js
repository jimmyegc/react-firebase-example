import { db } from '../firebase/credentials'

import { deleteDoc, collection, doc } from 'firebase/firestore'

export const deleteTodo = async (id) => {
  try {
    const collectionRef = collection(db, 'todos')
    const docRef = doc(collectionRef, id)
    const result = await deleteDoc(docRef)
    console.log(result)
    return result 
  } catch(error) {
    console.log(error)
  }

}