export default function Pedido(props) {
  const { pedidos, deletePedido } = props
  return (
    <>
      {pedidos.length === 0 ? undefined : <h2>Listado de Pedidos</h2>}
      <section className='section-pedidos'>
        {pedidos.map(pedido => (
          <div className='pedidos' key={pedido.id}>
            <p>N° de Pedido: {pedido.id}</p>
            <h3>Plato pedido </h3>
            <p>{pedido.plato}</p>
            <button
              onClick={() => {
                deletePedido(pedido.id)
              }}
            >
              Eliminar pedido ❌
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
