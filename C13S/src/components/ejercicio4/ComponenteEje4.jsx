import { useState, useEffect } from 'react'
export default function ComponenteEje4(props) {
  const { setProgressFalse } = props
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setConfirmed(true)
      console.log('pedido Confirmado')
    }, 2000)

    return () => {
      console.log('pedido cancelado')
      setConfirmed(false)
      clearTimeout(timeOut)
    }
  }, [])
  return (
    <>
      <div className='card'>
        {confirmed ? <p> Pedido confirmado</p> : <p>Procesando pedido</p>}
        <button onClick={setProgressFalse}>Cancelar Pedido</button>
      </div>
    </>
  )
}
