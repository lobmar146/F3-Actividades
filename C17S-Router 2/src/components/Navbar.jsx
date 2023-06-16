import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to='posteos'>Ejercicio 1 (Posteos)</Link>
      <Link to='juegos'>Ejercicio 2 (Jueguitos)</Link>
    </nav>
  )
}
