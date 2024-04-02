import { auth } from '../firebase/credentials'
import { signOut } from 'firebase/auth'

export const logOut = async () => {
  try {
    await signOut(auth)      
  } catch(error) {
    console.log(error)    
  }
}


