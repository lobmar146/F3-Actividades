import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { H3Dinamico } from './components/H3Dinamico.jsx'
import { ComponenteLista } from './components/ComponenteLista.jsx'

function App() {
    function mostrarLike() {
        console.log('Like')
    }
    return (
        <>
            {/* //Eje 1 */}
            <h1>THE BATMAN</h1>
            <p>La mejor pelicula de Batman perro</p>
            <button onClick={mostrarLike}>Like</button>

            {/* //Eje 2 */}
            <H3Dinamico title='Generos' />

            {/* //Eje 3 */}
            <ComponenteLista>
                <li>Acción</li>
                <li>Romance</li>
                <li>Drama</li>
            </ComponenteLista>

            <H3Dinamico title='Actores' />

            <ComponenteLista>
                <li>Leonardo DiCaprio</li>
                <li>Brad Pitt</li>
                <li>Tom Cruise</li>
                <li>Will Smith</li>
                <li>Julia Roberts</li>
                <li>Angelina Jolie</li>
                <li>Meryl Streep</li>
                <li>Scarlett Johansson</li>
            </ComponenteLista>
        </>
    )
}

export default App
