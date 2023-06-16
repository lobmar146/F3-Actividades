import { useParams, useNavigate } from 'react-router-dom'
export default function JuegoEspecifico(props) {
  const navigate = useNavigate()
  const params = useParams()
  const volverALosPosts = () => {
    navigate(-1)
  }

  return (
    <>
      <h1>Juego con id {params.id}</h1>
      <button onClick={volverALosPosts}>Volver al listado de post</button>
    </>
  )
}
