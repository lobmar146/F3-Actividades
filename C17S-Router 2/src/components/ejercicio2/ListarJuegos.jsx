import { Link } from 'react-router-dom'
export default function ListarJuegos(props) {
  const games = props.games

  return (
    <section>
      <h3>Lista de juegos</h3>
      {games.length !== 0 ? (
        <ol>
          {games.map(game => (
            <Link key={game.id} to={`./${game.id}`}>
              <li>{game.name}</li>
            </Link>
          ))}
        </ol>
      ) : (
        <p>No hay juegos</p>
      )}
    </section>
  )
}
