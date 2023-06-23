import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'
import Ejercicio1 from './routes/ejercicio1'
import Ejercicio2 from './routes/ejercicio2'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/ejercicio1' />} />
        <Route path='/ejercicio1' element={<Ejercicio1 />} />
        <Route path='/ejercicio2' element={<Ejercicio2 />} />
      </Routes>
    </>
  )
}

export default App
