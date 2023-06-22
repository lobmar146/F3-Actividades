import { createContext, useState } from 'react'
import generateAutoId from '../components/autoID'

// creo un contexto global para que todos los componentes puedan acceder a el
export const ListaGlobal = createContext({})

export default function ListaGlobalProvider(props) {
  const { children } = props
  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    setTareas([...tareas, { tarea: tarea, id: generateAutoId() }])
  }

  const eliminarTarea = tareaEliminar => {
    setTareas(tareas.filter(tarea => tarea !== tareaEliminar))
  }

  // Defino para mayor comodidad que datos van a ser globales
  const valoresGlobales = {
    tareas,
    agregarTarea,
    eliminarTarea
  }
  //  Les proveo a todos los elementos hijos de ListaGlobal.Provider los valoresGlobales
  return (
    <ListaGlobal.Provider value={valoresGlobales}>
      {children}
    </ListaGlobal.Provider>
  )
}
