// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)
export default function Status(props) {
  const { cantidadLikes } = props
  return (
    <>
      <h1>CANTIDAD DE POSTEOS </h1>
      <p>
        La cantidad toal de likes es: <span>{cantidadLikes}</span>
      </p>
    </>
  )
}
