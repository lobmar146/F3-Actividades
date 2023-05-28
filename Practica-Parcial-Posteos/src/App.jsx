import { useState } from 'react'
import Status from './components/Status'
import Posteos from './components/Posteos'

import './App.css'

function App() {
  const [numeroTotalLikes, setNumeroTotalLikes] = useState(0)

  const sumarLike = () => {
    setNumeroTotalLikes(numeroTotalLikes + 1)
  }

  return (
    <>
      <Status cantidadLikes={numeroTotalLikes}></Status>
      <Posteos sumarLike={sumarLike}></Posteos>
    </>
  )
}

export default App
