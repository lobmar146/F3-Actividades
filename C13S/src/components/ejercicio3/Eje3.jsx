import { useState } from 'react'
import ComponenteEje3 from './ComponenteEje3'

export default function Eje2() {
  const [nombre, setNombre] = useState('')
  const [submitedValue, setSubmitedValue] = useState('')

  const nombreOnChange = e => {
    setNombre(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setSubmitedValue(nombre)
  }

  return (
    <>
      <h1>Ejercicio 3</h1>
      <form>
        <label htmlFor='nombre'>Ingrese su nombre</label>
        <input
          type='text'
          id='nombre'
          value={nombre}
          onChange={nombreOnChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      <ComponenteEje3 submitedValue={submitedValue} />
    </>
  )
}
