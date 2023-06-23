import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to='/ejercicio1'>Ejercicio 1 (Pelis)</Link>
      <Link to='/ejercicio2'>Ejercicio 2 (Libros favoritos)</Link>
    </nav>
  )
}
