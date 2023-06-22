import { useContext, useState } from 'react'
import { ListaGlobal } from '../contexts/ListaGlobal'

export default function ListadoTareas() {
  const { eliminarTarea, tareas } = useContext(ListaGlobal)

  return (
    <>
      {tareas.length === 0 ? (
        <h2>No hay tareas</h2>
      ) : (
        <>
          <h2>Listado de tareas</h2>
          <section className='listado-tareas'>
            {tareas.map(tarea => (
              <article key={tarea.id}>
                <h3>Tarea numero: {tarea.id}</h3>
                <p>{tarea.tarea}</p>
                <button onClick={() => eliminarTarea(tarea)}>Eliminar</button>
              </article>
            ))}
          </section>
        </>
      )}
    </>
  )
}
