import { useState } from 'react'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { auth } from './firebase/credentials'
import { onAuthStateChanged } from 'firebase/auth'


function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, userFirebase => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })

  return (
    <>
      {user ? <Home user={user} /> : <Login setUser={setUser} />}
    </>
  )
}

export default App
