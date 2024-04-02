import { useState } from "react"

import { loginWithEmailPassword } from '../functions/loginWithEmailPassword'
import { registerUser } from '../functions/registerUser'
import { loginWithGoogle } from '../functions/loginWithGoogle'

export const Login = () => {
  const [isLogginIn, setIsLogginIn] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    console.log("form", username, password)
    if (isLogginIn) {
      await loginWithEmailPassword(username, password)
    } else {
      await registerUser(username, password)
    }
    setIsLogginIn(false)
  }

  return (<>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{isLogginIn ? 'Iniciar sesión' : 'Regístrate'}</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text"
            id="username"
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
          />

          <label htmlFor="password">Password</label>
          <input type="password"
            id="password"
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline"
          />
          <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold
          py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >{isLogginIn ? 'Ingresar' : 'Regístrate'}</button>
        </form>
        <button
          className="bg-green-500 hover:bg-green-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={loginWithGoogle}
        >Acceder con Google</button>
        <button
          className="underline mt-4"
          onClick={() => setIsLogginIn(!isLogginIn)}>
          {isLogginIn ? '¿No tienes cuenta? Crea una' : '¿Ya tienes cuenta? Ingresa'}
        </button>
      </div>

    </div>
  </>)
}