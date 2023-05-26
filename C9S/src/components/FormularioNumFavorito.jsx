import { useState } from 'react'
export function FormularioNumFavorito() {
  const [numero, setNumero] = useState(0)

  const handeSubbmit = e => {
    e.preventDefault()
    console.log(`Tu numero favorito es ${numero}`)
  }

  return (
    <>
      <section>
        <form onSubmit={handeSubbmit}>
          <label htmlFor='numero'>Numero favorito</label>
          <input
            type='number'
            id='numero'
            value={numero}
            onChange={e => setNumero(e.target.value)}
          />
          <button type='submit'>Enviar</button>
        </form>
      </section>
    </>
  )
}
