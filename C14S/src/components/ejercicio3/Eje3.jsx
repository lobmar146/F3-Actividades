import { useEffect, useState } from 'react'
export default function Eje3() {
  const [loading, setLoading] = useState(false)
  const [randomFact, setRandomFact] = useState('')
  async function handleFetch() {
    setLoading(true)
    const respose = await fetch('https://cat-fact.herokuapp.com/facts/random')
    const data = await respose.json()
    setRandomFact(data.text)
    setLoading(false)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      <h1>Ejercicio3</h1>
      <h2>Tu dato random de gaticos 👇🏻</h2>
      {loading ? <p>loading...</p> : <p>{randomFact}</p>}

      <button disabled={loading} onClick={handleFetch}>
        Siguiente fact
      </button>
    </>
  )
}
