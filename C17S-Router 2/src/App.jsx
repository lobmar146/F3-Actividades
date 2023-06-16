import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Posteos from './routes/Posteos'
import Ejercicio2 from './routes/Ejercicio2'
import PostEspecifico from './components/ejercicio1/PostEspecifico'
import ListarPosts from './components/ejercicio1/ListarPosts'
import FormularioGames from './components/ejercicio2/FormularioGames'

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
        <Route path='/ejercicio2' element={<Ejercicio2 />}>
          <Route index element={<FormularioGames />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
