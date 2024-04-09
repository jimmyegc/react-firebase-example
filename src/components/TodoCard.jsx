import { deleteTodo } from "../functions/deleteTodo"
export const TodoCard = ({ todo, setSelectedTodo, refreshAllTodos }) => {

  const mostrarModal = () => {
    setSelectedTodo(todo)
    const modal = document.getElementById('modal-edit')
    modal.showModal()
  }

  const handleDelete = (id) => {
    deleteTodo(id)
    refreshAllTodos()
  }

  return (<>
    <div className="flex flex-row justify-around border-2 border-slate-500 p-10 my-4 shadow-md"
      key={todo.id}
    >
      <h3>Priority</h3>
      <p>{todo.priority}</p>
      <div>
        <h3>Description</h3>
        <p>{todo.description}</p>
      </div>

      <div>
        <h3>Contact</h3>
        <p>{todo.contact}</p>
      </div>
      <button
        className="bg-blue-300 text-white"
        onClick={mostrarModal}
      >Editar</button>

      <button
        className="bg-red-300 text-white"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  </>)
}