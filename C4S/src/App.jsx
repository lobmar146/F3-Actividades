import './App.css'
import { Card } from './assets/components/card.jsx'

function App() {
  return (
    <>
      <Card>Card Children 1 </Card>
      <Card title='Card Title 2'>Card Children 2</Card>
      <Card footer='Card Footer 3'>Card Children 3</Card>
      <Card title='Card Title 4' footer='Card Footer 4'>
        Card Children 4
      </Card>
    </>
  )
}

export default App
