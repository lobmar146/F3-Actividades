import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Ejercicio1 from './routes/Ejercicio1'
import Ejercicio2 from './routes/Ejercicio2'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Ejercicio1 />}>
          <Route path='ejercicio1' element={<Ejercicio1 />} />
          <Route path='ejercicio2' element={<Ejercicio2 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
