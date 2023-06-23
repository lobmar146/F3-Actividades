import React, { useState } from 'react'
export default function FormEdad() {
  const [anioNacimiento, setanioNacimiento] = useState(
    localStorage.getItem('anioNacimiento') || ''
  )

  const [error, setError] = useState('')
  const anioNacimientoOnChange = e => {
    setanioNacimiento(e.target.value)
  }
  const esInputCorrecto = () => {
    if (anioNacimiento === '') {
      setError('No puede estar vacio  UwU')
      return false
    }
    setError('')
    return true
  }
  const handleSubmmit = e => {
    e.preventDefault()
    if (esInputCorrecto()) {
      localStorage.setItem('anioNacimiento', anioNacimiento)
    }
  }
  return (
    <>
      <section className='seccion-formulario'>
        <h1>Ingresa tu edad</h1>
        <form onSubmit={handleSubmmit}>
          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            placeholder='Ingrese su edad'
            value={anioNacimiento}
            onChange={anioNacimientoOnChange}
          />
          <button type='submit'>Agregar</button>
          {error && <p className='error'>{error}</p>}
        </form>
      </section>
    </>
  )
}
