import { logOut } from '../functions/logOut'

export const Navbar = ({ user }) => {
  return (<>
    <div className='w-full flex flex-row justify-between px-10 my-5'>
      <p>{user.email}</p>
      <button
        className='bg-red-300 hover:bg-red-500 text-white 
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={logOut}>Cerrar sesión</button>
    </div>
  </>)
}