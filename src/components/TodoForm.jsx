
import { createTodo } from '../functions/createTodo'

export const TodoForm = ({ refreshAllTodos }) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const description = e.target.description.value
    const priority = e.target.priority.value
    const contact = e.target.email.value
    const newTodo = { description, priority, contact }
    await createTodo(newTodo)
    console.log(description, priority, contact)
    //e.target.description.value = e.target.priority.value = e.target.contact.value = ''
    alert('saved!')
    refreshAllTodos()
  }

  return (<>
    <form onSubmit={handleSubmit}
      className='flex flex-row justify-around my-5 min-w-full'
    >
      <label className='flex flex-col'>Descripción
        <input type="text" id="description"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
          py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-purple-500'
        />
      </label>

      <label>Prioridad
        <select id="priority"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
          py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-purple-500'
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>

      <label className='flex flex-col'>Contacto
        <input type="email" id="email"

          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
          py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-purple-500'/>
      </label>

      <button
        type="submit"
        className='bg-red-300 hover:bg-red-500 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >Add</button>
    </form>
  </>)
}