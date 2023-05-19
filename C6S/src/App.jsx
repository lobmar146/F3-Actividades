import { useState } from 'react'
import './App.css'
import { CardsProductos } from './components/CardsProductos'
import { CardsAccounts } from './components/CardsAccounts'
import { CardsUsers } from './components/CardsUsers'
import users from './assets/users.json'
function App() {
    return (
        <>
            <CardsProductos></CardsProductos>
            <CardsAccounts></CardsAccounts>
            <CardsUsers></CardsUsers>
        </>
    )
}

export default App
