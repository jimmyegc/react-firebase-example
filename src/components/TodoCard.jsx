export const TodoCard = ({ todo }) => {
  return (<>
    <div className="flex flex-row justify-around border-2 border-slate-500 p-10 my-4 shadow-md">
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
    </div>
  </>)
}