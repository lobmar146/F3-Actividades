import { useState } from 'react'
import ComponenteEje4 from './ComponenteEje4'
export default function Eje4() {
  const [inProgress, setInProgress] = useState(false)
  const setProgressTrue = () => setInProgress(true)
  const setProgressFalse = () => setInProgress(false)

  return (
    <>
      <h1>Ejercicio 4</h1>
      <button onClick={setProgressTrue}> Hacer pedido</button>
      {inProgress ? (
        <ComponenteEje4 setProgressFalse={setProgressFalse} />
      ) : undefined}
    </>
  )
}
