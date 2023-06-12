import { useState, useEffect } from 'react'

export default function Eje1() {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true)
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
    ).json()
    setTitle(response.title)
    console.log(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Ejercicio 1</h1>
      {loading ? <p>loading...</p> : <p>{title}</p>}
    </>
  )
}
