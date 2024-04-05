import { db } from '../firebase/credentials'
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'

export const updateTodo = async (id, data) => {
  try {
    const collectionRef = collection(db, 'todos')
    const docRef = doc(collectionRef, id)
    const result = await setDoc(docRef, data, { merge: true }) // Crear & Editar
    // const result = await updateDoc(docRef, { priority: 4 })
    console.log(result)
    return result
  } catch(error) {
    console.log(error)
  }  
}