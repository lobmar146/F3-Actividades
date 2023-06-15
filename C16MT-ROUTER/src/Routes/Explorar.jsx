import { Routes, Route, Link } from 'react-router-dom'
import Musica from './Explorar/Musica'
import Peliculas from './Explorar/Peliculas'
import Tendencias from './Explorar/Tendencias'
export default function Explorar() {
  return (
    <>
      <h1>Explorar</h1>
      <p>Explorar</p>
      <h2>Navegador UwU</h2>

      <section className='navegador-explorar'>
        <Link to='musica'>Musica</Link>
        <Link to='peliculas'>Peliculas</Link>
        <Link to='tendencias'>Tendencias</Link>
      </section>

      <Routes>
        <Route path='musica' element={<Musica />} />
        <Route path='peliculas' element={<Peliculas />} />
        <Route path='tendencias' element={<Tendencias />} />
      </Routes>
    </>
  )
}
