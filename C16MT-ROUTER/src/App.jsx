import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Index from './Routes'
import Shorts from './Routes/Shorts'
import Subscripciones from './Routes/Subscripciones'
import Explorar from './Routes/Explorar'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/subscripciones' element={<Subscripciones />} />
        <Route path='/explorar/*' element={<Explorar />} />
      </Routes>
      <footer> poweredBy Trucho House</footer>
    </>
  )
}

export default App
