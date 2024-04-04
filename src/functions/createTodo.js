import { db } from '../firebase/credentials'
import { collection, addDoc } from 'firebase/firestore'

export const createTodo = async (data) => {
  try {
    const collectionRef = collection(db, 'todos')
    const todoId = await addDoc(collectionRef, data)
    return todoId
  } catch(error) {
    console.log(error)
  }
}