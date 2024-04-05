import { useEffect, useState } from 'react'
import { updateTodo } from '../functions/updateTodo'

export const TodoEditModal = ({ todo, refreshAllTodos }) => {

  const [todoEdit, setTodoEdit] = useState({ ...todo })

  useEffect(() => {
    setTodoEdit(todo)
    console.log(todo)
  }, [todo])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTodo(todo.id, todoEdit).then(confirm => {
      document.getElementById('modal-edit').close()
      refreshAllTodos()
    })
  }

  return (<>
    <dialog id="modal-edit">
      <form onSubmit={handleSubmit}
        className='flex flex-row justify-around my-5 min-w-full'
      >
        <label className='flex flex-col'>Descripción
          <input type="text"
            id="description"
            value={todoEdit?.description}
            onChange={e => setTodoEdit({ ...todoEdit, description: e.target.value })}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
          py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-purple-500'
          />
        </label>

        <label>Prioridad
          <select
            id="priority"
            value={todoEdit?.priority}
            onChange={e => setTodoEdit({ ...todoEdit, priority: e.target.value })}
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
          <input type="email"
            id="email"
            value={todoEdit?.contact}
            onChange={e => setTodoEdit({ ...todoEdit, contact: e.target.value })}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
          py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-purple-500'/>
        </label>

        <button
          type="submit"
          className='bg-red-300 hover:bg-red-500 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >Update</button>
      </form>
    </dialog>
  </>)
}