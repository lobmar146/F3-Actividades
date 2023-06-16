import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function PostEspecifico() {
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  async function getPost() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    const data = await response.json()
    setPost(data)
    setLoading(false)
  }

  useEffect(() => {
    getPost()
  }, [])

  const volverALosPosts = () => {
    navigate(-1)
  }
  return (
    <section>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <article>
          <h1>Mostrando el post {post.id} </h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      )}
      <button onClick={volverALosPosts}>Volver al listado de post</button>
    </section>
  )
}
