import { useState } from 'react'
import FormularioPedidos from './components/FormularioPedidos'
import ListadoPedidos from './components/ListadoPedidos'
import './App.css'

let autoid = 0

function App() {
  const [pedidos, setPedidos] = useState([])

  function agregarPedido(plato) {
    setPedidos([...pedidos, { plato, id: autoid++ }])
  }

  function deletePedido(id) {
    setPedidos(pedidos.filter(pedido => pedido.id !== id))
  }

  return (
    <>
      <FormularioPedidos agregarPedido={agregarPedido} />
      <ListadoPedidos pedidos={pedidos} deletePedido={deletePedido} />
    </>
  )
}

export default App
