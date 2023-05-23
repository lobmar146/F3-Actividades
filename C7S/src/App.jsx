import { useState } from 'react'
import { Calculadora } from './components/Calculadora'
import './App.css'

const App = () => {
  return (
    <div>
      <Calculadora amount={1}></Calculadora>
      <Calculadora amount={5}></Calculadora>
      <Calculadora amount={13}></Calculadora>
    </div>
  )
}

export default App
