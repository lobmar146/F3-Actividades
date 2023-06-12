import { useState } from 'react'
import ComponenteEje2 from './ComponenteEje2'

export default function Eje2() {
  const [isActive, setIsActive] = useState(false)
  const toggle = () => setIsActive(!isActive)

  return (
    <>
      <h1>Ejercicio2</h1>
      {isActive ? <ComponenteEje2 /> : undefined}
      <button onClick={toggle}>Toggle</button>
    </>
  )
}
