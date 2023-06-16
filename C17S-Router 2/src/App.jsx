import { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Ejercicio1 from './routes/Ejercicio1'
import Ejercicio2 from './routes/Ejercicio2'
import PostEspecifico from './components/PostEspecifico'
import ListarPosts from './components/ListarPosts'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Pagina index, igual que ejercicio 1 */}
        <Route path='/' element={<Ejercicio1 />}>
          <Route index element={<ListarPosts />} />
          <Route path=':id' element={<PostEspecifico />} />
        </Route>
        {/* Pagina Ejercicio 1 */}
        <Route path='/ejercicio1' element={<Ejercicio1 />}>
          <Route index element={<ListarPosts />} />
          <Route path=':id' element={<PostEspecifico />} />
        </Route>
        {/* Ejercicio 2 */}
        <Route path='/ejercicio2' element={<Ejercicio2 />} />
      </Routes>
    </>
  )
}

export default App
