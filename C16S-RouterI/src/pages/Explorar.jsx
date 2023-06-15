import { Link } from 'react-router-dom'

export default function Explorar() {
  return (
    <section>
      <h1>Apartado Explorar</h1>
      <p>Explora las siguientes secciones</p>
      <Link to='./tendencias'>Tendencias</Link>
    </section>
  )
}
