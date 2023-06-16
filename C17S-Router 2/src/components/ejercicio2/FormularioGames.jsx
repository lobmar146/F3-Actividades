import { useState } from 'react'
export default function FormularioGames(props) {
  const setearFiltros = props.setearFiltros
  const [genero, setGenero] = useState('Roguelike')

  function handleSubmit(e) {
    e.preventDefault()
    setearFiltros({ genero: genero })
  }

  return (
    <form>
      <select onChange={e => setGenero(e.target.value)} value={genero}>
        <option value='Roguelike'>Roguelike</option>
        <option value='Platformer'>Platformer</option>
        <option value='Action'>Action</option>
        <option value='Adventure'>Adventure</option>
        <option value='Puzzle'>Puzzle</option>
        <option value='Metroidvania'>Metroidvania</option>
        <option value='Simulation'>Simulation</option>
        <option value='Board'>Board</option>
        <option value='Precision'>Precision</option>
      </select>

      <button type='submit' onClick={handleSubmit}>
        Filter
      </button>
    </form>
  )
}
