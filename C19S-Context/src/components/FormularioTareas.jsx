import { useContext, useState } from 'react'
import { ListaGlobal } from '../contexts/ListaGlobal'

export default function FormularioTareas() {
  const { agregarTarea } = useContext(ListaGlobal)

  const [tarea, setTarea] = useState('')
  const [error, setError] = useState('')
  const tareaOnChange = e => {
    setTarea(e.target.value)
  }

  const validador = () => {
    if (tarea === '') {
      setError('No puede estar vacio  UwU')
    } else {
      setError('')
      agregarTarea(tarea)
      setTarea('')
    }
  }

  const handleSubmmit = e => {
    e.preventDefault()
    validador()
  }
  return (
    <>
      <section className='seccion-formulario'>
        <h1>Agrega tus tareas globales guachin</h1>

        <form onSubmit={handleSubmmit}>
          <label htmlFor='tarea'>Nombre de la Tarea</label>
          <input
            type='text'
            placeholder='Ingrese una tarea'
            value={tarea}
            onChange={tareaOnChange}
          />
          <button type='submit'>Agregar</button>
          {error && <p className='error'>{error}</p>}
        </form>
      </section>
    </>
  )
}
