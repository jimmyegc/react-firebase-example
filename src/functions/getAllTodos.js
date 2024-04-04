import { db } from '../firebase/credentials'
import { collection, getDocs } from 'firebase/firestore'

export const getAllTodos = async () => {
  try { 
    const collectionRef = collection(db, 'todos')
    const docsCollection = await getDocs(collectionRef)
    const docs = docsCollection.docs.map(d => {
      return { 
        id: d.id, 
        ...d.data()    
      }
    })
    console.log("getAllTodos", docs)
    return docs 
  } catch(error) {
    console.log(error)
  }

}