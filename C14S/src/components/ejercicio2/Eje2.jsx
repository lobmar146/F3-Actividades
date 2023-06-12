import { useState } from 'react'
import ListadoFacts from './ListadoFacts'
export default function Eje2() {
  const [loading, setLoading] = useState(false)

  const [facts, setFacts] = useState([])

  async function callCallFacts() {
    setLoading(true)
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const data = await response.json()
    console.log(data)

    setFacts(data.map(fact => ({ id: fact._id, text: fact.text })))
    setLoading(false)
  }

  return (
    <>
      <h1>Ejercicio2</h1>
      <button disabled={loading} onClick={callCallFacts}>
        Llamar funcion async
      </button>
      {loading ? <p>loading cards...</p> : undefined}

      {facts.length === 0 ? undefined : <ListadoFacts facts={facts} />}
    </>
  )
}
