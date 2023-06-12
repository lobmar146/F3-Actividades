import { useState } from 'react'
export default function Eje4() {
  const [titulo, setTitulo] = useState('')
  const [body, setBody] = useState('')
  async function handleFetch() {
    //post to https://jsonplaceholder.typicode.com/posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    const dataSended = await response.json()
    console.log(response)
    console.log(dataSended)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleFetch()
  }

  return (
    <>
      <h1>Ejercicio 4</h1>
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
    </>
  )
}
