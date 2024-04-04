
import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { TodoForm } from '../components/TodoForm'
import { TodoCard } from '../components/TodoCard'
import { getAllTodos } from '../functions/getAllTodos'

export const Home = ({ user }) => {
  const [allTodos, setAllTodos] = useState([])

  const refreshAllTodos = () => {
    getAllTodos()
      .then(todos => setAllTodos(todos))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    refreshAllTodos()
  }, [])

  return (<>
    <div className='w-screen h-screen flex flex-col'>
      <Navbar user={user} />
      <TodoForm refreshAllTodos={refreshAllTodos} />
      {allTodos?.map(todo => (
        <TodoCard todo={todo} />
      ))}
    </div>
  </>)
}