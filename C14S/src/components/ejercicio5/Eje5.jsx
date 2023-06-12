import { useState, useEffect } from 'react'
import ListadoPosts from './ListadoPosts'

export default function Eje5() {
  const [titulo, setTitulo] = useState('')
  const [body, setBody] = useState('')
  const [posts, setPosts] = useState([])
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    const endpoint = 'https://jsonblob.com/api/1117859330765635584'
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        title: titulo.title,
        body: body.body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }

    //post to https://jsonplaceholder.typicode.com/posts
    try {
      const response = await fetch(endpoint, settings)
      getPosts()
    } catch (error) {
      setErrors(error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleFetch()
  }

  async function getPosts() {
    setLoading(true)
    try {
      const response = await (
        await fetch('https://jsonblob.com/api/1117859330765635584')
      ).json()
      console.log(response)
      setPosts(
        response.map(post => {
          return { id: post.id, body: post.body, title: post.title }
        })
      )
      setErrors(null)
    } catch (error) {
      setErrors(error)
    }
    setLoading(false)
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1>Ejercicio 5</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='titulo'>Titulo</label>
        <input
          type='text'
          id='titulo'
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <label htmlFor='body'>Body</label>
        <textarea
          id='body'
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>

      {loading ? <p>loading...</p> : <ListadoPosts posts={posts} />}
    </>
  )
}
