import { useState } from 'react'
export default function FormularioPedidos(props) {
  const [plato, setPlato] = useState('')
  const { agregarPedido } = props

  const onPlato = e => setPlato(e.target.value)

  const onSubmitForm = e => {
    e.preventDefault()
    agregarPedido(plato)
  }
  return (
    <section>
      <h2>Formulario de Pedidos</h2>
      <form className='form' onSubmit={onSubmitForm}>
        <label htmlFor='plato'>Ingrese su plato</label>
        <input
          type='text'
          id='plato'
          name='nombre'
          placeholder='Ingrese el plato que va mordar'
          value={plato}
          onChange={onPlato}
        />
        <button>Cargar Plato 🍽️</button>
      </form>
    </section>
  )
}
