
import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { TodoForm } from '../components/TodoForm'
import { TodoCard } from '../components/TodoCard'
import { getAllTodos } from '../functions/getAllTodos'
import { TodoEditModal } from '../components/TodoEditModal'

export const Home = ({ user }) => {
  const [allTodos, setAllTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)

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
      <TodoEditModal
        todo={selectedTodo}
        refreshAllTodos={refreshAllTodos}
      />
      {allTodos?.map(todo => (
        <TodoCard
          todo={todo}
          setSelectedTodo={setSelectedTodo}
          refreshAllTodos={refreshAllTodos}
        />
      ))}
    </div>
  </>)
}