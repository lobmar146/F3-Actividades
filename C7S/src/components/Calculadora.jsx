import { useState } from 'react'

export function Calculadora(props) {
  const { amount } = props
  const [resultado, setResultado] = useState(0)

  const sumar = () => {
    setResultado(resultado + amount)
  }

  const restar = () => {
    setResultado(resultado - amount)
  }
  const reset = () => {
    setResultado(0)
  }
  const mostrarLog = () => {
    console.log(resultado)
  }

  return (
    <section className='calculadora'>
      <h1>Calculadora que suma de a {amount} </h1>
      <p>{resultado}</p>

      <div className='botones'>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <button onClick={reset}> Reset </button>
        <button onClick={mostrarLog}> = </button>
      </div>
    </section>
  )
}
