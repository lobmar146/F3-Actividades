import productos from './products.json'
import { useMemo, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState(productos)

  console.log('recalculating expensiveProducts...')

  const agregarProducto = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        nombre: 'Producto nuevo',
        precio: 100,
        descripcion: 'Producto nuevo'
      }
    ])
  }
  const productosMayores50 = useMemo(() => {
    // console.log('recalculating ...')
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
        <button onClick={agregarProducto}>Agregar producto</button>
      </section>
    </>
  )
}
