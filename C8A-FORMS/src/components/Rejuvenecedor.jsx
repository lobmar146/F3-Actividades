import React, { useState } from 'react'

export function Rejuvenecedor(props) {
  const [userName, setUserName] = useState('')
  const [edad, setEdad] = useState(0)

  const onChangeUserName = e => setUserName(e.target.value)
  const onChangeEdad = e => setEdad(e.target.value)

  const rejuvencer = edad => {
    let nuevaEdad = edad - 10
    setEdad(nuevaEdad)
    alert(`Hola ${userName} tu edad es ${nuevaEdad}`)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    rejuvencer(edad)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Nombre de usuario'
        value={userName}
        onChange={onChangeUserName}
      />

      <input
        type='number'
        placeholder='Edad'
        value={edad}
        onChange={onChangeEdad}
      />

      <button type='submit'>Enviar</button>
    </form>
  )
}
