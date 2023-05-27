import { useState } from 'react'
let autoId = 0

export function FormularioNumFavorito() {
  const [numero, setNumero] = useState(0)
  const [usuario, setUsuario] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [valores, setValores] = useState([])

  const validateNumber = numero => {
    return numero > 0 ? true : false
  }

  const validateUser = usuario => {
    return usuario.length > 0 ? true : false
  }

  const handeSubbmit = e => {
    e.preventDefault()
    if (!validateUser(usuario)) {
      setMensajeError('ERROR, el nombre de usuario no puede estar vacio')
    } else if (!validateNumber(numero)) {
      setMensajeError('ERROR, el numero ingresado debe ser mayor a 0')
    } else {
      setValores([...valores, { usuario, numero, id: autoId++ }])
      setUsuario('')
      setNumero(0)
      setMensajeError('')
    }
  }

  return (
    <>
      <section>
        <h1>Ingresa tu numero favorito 🔢</h1>
        <form onSubmit={handeSubbmit}>
          <label htmlFor='usuario'>Ingrese su nombre de usuario: </label>
          <input
            type='text'
            id='usuario'
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
          />

          <label htmlFor='numero'>Ingrese su numero favorito: </label>
          <input
            type='number'
            id='numero'
            value={numero}
            onChange={e => setNumero(e.target.value)}
          />
          <button type='submit'>Enviar</button>
        </form>
        {mensajeError ? <p className='error'>{mensajeError}</p> : undefined}
        {valores.length === 0 ? undefined : (
          <>
            <h3>Valores ingresados:</h3>
            <ul className='card'>
              {valores.map(valor => (
                <li className='card' key={valor.id}>
                  <p>Nombre: {valor.usuario}</p>
                  <p>Número favorito: {valor.numero}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}
