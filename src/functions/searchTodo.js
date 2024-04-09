import { db } from '../firebase/credentials'
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore'

export const searchTodo = async (search) => {
  const collectionRef = collection(db,'todos')
  const queryDescription = query(collectionRef, where("description","==",search))  
  const docsCollection = await getDocs(queryDescription)
  const docs = docsCollection.docs.map(d => {
    return { 
      id: d.id, 
      ...d.data()    
    }
  })
  console.log("searchTodo", docs)
  return docs 
}