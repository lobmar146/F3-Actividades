
import './App.css'
import { Card } from './components/Card.jsx'

function App() {


  return (
    <>
      <Card title="card title"> 
        card body
      </Card>

      <Card> 
        card body
      </Card>

      <Card title="card title" footer="card footer">
      </Card>

      <Card  footer="card footer">
        card children
      </Card>

    </>
  )
}

export default App
