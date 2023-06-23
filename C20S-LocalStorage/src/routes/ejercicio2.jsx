import libros from '../mocks/books.json'
import ListadoLibros from '../components/ejercicio2/ListadoLibros'
import { useState } from 'react'
export default function Ejercicio1() {
  const [librosFavoritos, setLibrosFavoritos] = useState(
    JSON.parse(localStorage.getItem('librosFavoritos') || '[]')
  )

  function agregarLibrtoFavorito(libroAgregar) {
    if (
      !librosFavoritos.some(
        libroFavorito => libroFavorito.id === libroAgregar.id
      )
    ) {
      setLibrosFavoritos([...librosFavoritos, libroAgregar])
    }
    console.log(libroAgregar)
    localStorage.setItem('librosFavoritos', JSON.stringify(librosFavoritos))
  }
  function eliminarLibroFavorito(libroAEliminar) {
    setLibrosFavoritos(
      librosFavoritos.filter(libro => libro.id !== libroAEliminar.id)
    )
    localStorage.setItem('librosFavoritos', JSON.stringify(librosFavoritos))
  }

  return (
    <>
      <ListadoLibros libros={libros} funcionalidadBoton={agregarLibrtoFavorito}>
        Total de libros
      </ListadoLibros>
      <ListadoLibros
        libros={librosFavoritos}
        funcionalidadBoton={eliminarLibroFavorito}
      >
        Tus libros favoritos
      </ListadoLibros>
    </>
  )
}
