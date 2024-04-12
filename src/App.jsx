import { useState } from 'react'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { auth } from './firebase/credentials'
import { onAuthStateChanged } from 'firebase/auth'
import { UploadFile } from './views/UploadFile'


function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, userFirebase => {
    if (userFirebase) {
      // console.log(userFirebase)
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })

  return (
    <>
      <UploadFile />
      {/*  {user ? <Home user={user} /> : <Login setUser={setUser} />}
 */}
    </>
  )
}

export default App
