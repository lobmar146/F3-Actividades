import products from './products.json'
import { useMemo } from 'react'

export default function Products() {
  console.log('recalculating expensiveProducts...')
  const productosMayores50 = useMemo(() => {
    return products.filter(product => product.precio > 50)
  }, [])

  return (
    <>
      <section>
        <h1>Productos</h1>
        {productosMayores50.map(product => (
          <div key={product.id}>
            <h3> {product.nombre} </h3>
            <p> {product.precio} </p>
          </div>
        ))}
      </section>
    </>
  )
}
