import { useState, useMemo } from 'react'

export default function Inputs() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)

  const input1Change = e => {
    setInput1(e.target.value)
  }
  const input2Change = e => {
    setInput2(e.target.value)
  }
  const input3Change = e => {
    setInput3(e.target.value)
  }

  const sumarInputs = useMemo(() => {
    console.log('sumarInputs')
    return parseInt(input1) + parseInt(input2)
  }, [input1, input2])

  return (
    <section>
      <h1>Apartado 2</h1>
      <p>
        En este apartado se muestra el uso de useMemo en donde se recalcula si
        los dos primeros inputs cambian.
      </p>
      <input type='number' placeholder='Input 1' onChange={input1Change} />
      <input type='number' placeholder='Input 2' onChange={input2Change} />
      <input type='number' placeholder='Input 3' onChange={input3Change} />
      {sumarInputs === NaN ? (
        <p> Suma numeritos macho</p>
      ) : (
        <p>La suma es: {sumarInputs}</p>
      )}
    </section>
  )
}
