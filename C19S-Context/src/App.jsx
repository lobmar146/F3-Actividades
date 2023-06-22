import { useState } from 'react'
import FormularioTareas from './components/FormularioTareas'
import ListaGlobalProvider from './contexts/ListaGlobal'
import ListadoTareas from './components/ListadoTareas'

import './App.css'

function App() {
  return (
    <>
      <ListaGlobalProvider>
        <FormularioTareas />
        <ListadoTareas />
      </ListaGlobalProvider>
    </>
  )
}

export default App
