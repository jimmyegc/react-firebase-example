import { storage } from '../firebase/credentials'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadFile = async (file) => {
  try{
    const fileRef = ref(storage, `archivos/${file.name}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    return url
  } catch(error) {
    console.log(error )
  }
}