import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Index</Link>
      <Link to='/shorts'>Shorts</Link>
      <Link to='/subscripciones'>Subscripciones</Link>
      <Link to='/explorar'>Explorar</Link>
    </nav>
  )
}
