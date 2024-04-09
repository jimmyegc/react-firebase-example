import { useState } from 'react'
import { searchTodo } from '../functions/searchTodo'

export const SearchModal = () => {

  const [lista, setLista] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const busqueda = e.target.searchInput.value
    searchTodo(busqueda).then(res => setLista(res))
    e.target.searchInput.value = ""
  }

  return (<>
    <dialog id="search-modal">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Búsqueda" id="searchInput" />
        <button type="submit">Buscar</button>
      </form>
      {lista?.map(res => (
        <div key={res.id}>
          <h4>{res.description}</h4>
          <p>{res.priority}</p>
          <p>{res.email}</p>
        </div>
      ))}
    </dialog>
  </>)
}