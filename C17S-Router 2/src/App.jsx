import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Posteos from './routes/Posteos'
import Juegos from './routes/Juegos'
import PostEspecifico from './components/ejercicio1/PostEspecifico'
import ListarPosts from './components/ejercicio1/ListarPosts'
import JuegoEspecifico from './components/ejercicio2/JuegoEspecifico'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* El index redirecciona a ejercicio 1*/}
        <Route path='/' element={<Navigate to='/posteos' />} />

        {/* Pagina Ejercicio 1 */}
        <Route path='/posteos' element={<Posteos />}>
          <Route index element={<ListarPosts />} />
          <Route path=':id' element={<PostEspecifico />} />
        </Route>
        {/* Ejercicio 2 */}
        <Route path='/juegos' element={<Juegos />} />
        <Route path='/juegos/:id' element={<JuegoEspecifico />} />
      </Routes>
    </>
  )
}
export default App
