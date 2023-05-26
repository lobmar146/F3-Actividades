export function ListaUsuarios(props) {
  const { usuarios, dejarDeSeguir, children } = props

  return (
    <>
      <h1>{children}</h1>
      <section className='section-usuarios'>
        {usuarios.map(usuario => {
          return (
            <div className='usuario' key={usuario.id}>
              <h2>{usuario.nombre}</h2>
              <p>Edad: {usuario.edad}</p>
              <p>Mail: {usuario.email}</p>
              <button onClick={() => dejarDeSeguir(usuario)}>
                {children === 'Lista Usuarios Seguidos'
                  ? 'Dejar de Seguir'
                  : 'Seguir'}
              </button>
            </div>
          )
        })}
        {console.log(usuarios)}
      </section>
    </>
  )
}
