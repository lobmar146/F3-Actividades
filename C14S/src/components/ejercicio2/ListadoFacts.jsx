export default function ListadoFacts(props) {
  const { facts } = props
  return (
    <>
      {facts.map(fact => (
        <div className='card' key={fact.id}>
          <p>{fact.text}</p>
        </div>
      ))}
    </>
  )
}
