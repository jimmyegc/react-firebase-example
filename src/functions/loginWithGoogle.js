import { auth } from '../firebase/credentials'
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect 
} from 'firebase/auth'

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    //const result = await signInWithPopup(auth, provider)
    // console.log(result)
    signInWithRedirect(auth, provider)    
  } catch(error) {
    console.log(error)    
  }
}


