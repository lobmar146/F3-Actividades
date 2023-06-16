import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import gamesData from '../mocks/games.json'

import { Outlet } from 'react-router-dom'
import FormularioGames from '../components/ejercicio2/FormularioGames'
import ListarJuegos from '../components/ejercicio2/ListarJuegos'
export default function Juegos() {
  const [games, setGames] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  async function fetchData(filters) {
    let filteredGames = [...gamesData]
    console.log(filters)

    if (filters.genero) {
      filteredGames = filteredGames.filter(game =>
        game.tags.includes(filters.genero)
      )
    }

    setGames(filteredGames)
    console.log(filteredGames)
  }

  useEffect(() => {
    const params = {}
    searchParams.forEach((value, key) => {
      console.log(key, value)
      params[key] = value
    })

    fetchData(params)
  }, [searchParams])

  function setearFiltros(filters) {
    setSearchParams(filters)
  }

  return (
    <section>
      <h1>Ejercicio2</h1>
      <h2>Selecciona el genero de los juegos que vas a listar</h2>
      <FormularioGames setearFiltros={setearFiltros} />
      <ListarJuegos games={games} />

      <Outlet />
    </section>
  )
}
