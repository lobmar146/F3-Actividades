import books from './books.json'
import { useMemo, useState } from 'react'

export default function Books() {
  const [planeta, setPlaneta] = useState('Roshar')
  const librosSegunPlaneta = useMemo(() => {
    return books.filter(book => book.planeta === planeta)
  }, [planeta])

  return (
    <>
      <section>
        <h1>Libros segun el planeta elegido</h1>
        {/* planetas de select ["Roshar", "Skadrial", "Nalthis", "Threnody"] */}
        <select onChange={e => setPlaneta(e.target.value)}>
          <option value='Roshar'>Roshar</option>
          <option value='Skadrial'>Skadrial</option>
          <option value='Nalthis'>Nalthis</option>
          <option value='Threnody'>Threnody</option>
        </select>

        {librosSegunPlaneta.map(book => (
          <div key={book.id}>
            <h3> {book.nombre} </h3>
            <p> {book.planeta} </p>
          </div>
        ))}
      </section>
    </>
  )
}
