import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs'
import Products from './components/Products'
import Books from './components/Books'

function App() {
  return (
    <>
      <Inputs />
      <Products />
      <Books />
    </>
  )
}

export default App
