import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListarPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <section>
      <h2>Listar Posts</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ol>
          {posts.map(post => (
            <Link key={post.id} to={`${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ol>
      )}
    </section>
  )
}
