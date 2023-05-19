import products from '../assets/products.json'
export function CardsProductos() {
    return (
        <>
            <section>
                <h1>Productos Disponibles</h1>
                {products.map(producto => (
                    <div className='card' key={producto.id}>
                        <h2>{producto.nombre}</h2>
                        <p>ID: {producto.id}</p>
                        <p>Precio: {producto.precio}</p>
                        <p>Descripción: {producto.descripcion}</p>
                    </div>
                ))}
                <hr />
            </section>
        </>
    )
}
