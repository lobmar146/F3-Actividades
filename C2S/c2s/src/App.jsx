import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Subtitulo } from './Subtitulo.jsx'
import { ComponenteLista } from './ComponenteLista.jsx'

function App() {
    return (
        <>
            <h1>THE BATMAN</h1>
            <p>La mejor pelicula de Batman perro</p>
            <button onClick={() => console.log('Im Vengance')}>Like</button>
            <Subtitulo title='Generos' />
            <ComponenteLista>
                <li>Acción</li>
                <li>Romance</li>
                <li>Drama</li>
            </ComponenteLista>
            <Subtitulo title='Actores' />
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
