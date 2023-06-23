export default function ListadoLibros(props) {
  const { libros, funcionalidadBoton, children } = props
  return (
    <>
      <section>
        <h1>{children}</h1>
        {libros.map(libro => (
          <article key={libro.id}>
            <h2>{libro.nombre}</h2>
            <p>{libro.saga}</p>
            <p>{libro.año}</p>
            <button onClick={() => funcionalidadBoton(libro)}>
              {children === 'Total de libros'
                ? 'Agregar a favoritos'
                : 'Eliminar'}
            </button>
          </article>
        ))}
      </section>
    </>
  )
}
