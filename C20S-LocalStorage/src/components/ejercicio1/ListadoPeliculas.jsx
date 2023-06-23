import peliculas from '../../mocks/movies.json'

export default function ListadoPeliculas() {
  const verificarEdad = edad_minima => {
    const anioNacimiento = parseInt(localStorage.getItem('anioNacimiento'))
    const anioActual = new Date().getFullYear()
    const edadUsuario = anioActual - anioNacimiento
    console.log(edadUsuario)
    if (edadUsuario >= edad_minima) {
      console.log('Puede ver la pelicula')
    } else {
      console.log('No puede ver la pelicula')
    }
  }

  return (
    <>
      {peliculas.map(pelicula => (
        <article className='pelicula' key={pelicula.id}>
          <h2>{pelicula.nombre}</h2>
          <p>{pelicula.genero}</p>
          <p>{pelicula.edad_minima}</p>
          <button onClick={() => verificarEdad(pelicula.edad_minima)}>
            Puedo ver?
          </button>
        </article>
      ))}
    </>
  )
}
