import { useEffect } from 'react'
export default function ComponenteEje3(props) {
  const { submitedValue } = props
  useEffect(() => {
    if (submitedValue) {
      console.log(`buscando datos en api.github.com/users/${submitedValue}`)
    } else {
      console.log('Props vacia chamaco')
    }
  }, [submitedValue])
  return (
    <section>
      <p> {submitedValue}</p>
    </section>
  )
}
