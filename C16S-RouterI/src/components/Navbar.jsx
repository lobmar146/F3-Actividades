import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <div>
        <nav className='navbar'>
          <Link to='/inicio'>Inicio</Link>

          <Link to='/shorts'>Shorts</Link>
          <Link to='/subscripciones'>Subscripciones</Link>
          <Link to='/explorar'>Explorar</Link>
        </nav>
      </div>
    </>
  )
}
