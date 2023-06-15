import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Shorts from './pages/Shorts.jsx'
import Subscripciones from './pages/Subscripciones.jsx'
import Explorar from './pages/Explorar.jsx'
import Tendencias from './pages/Tendencias.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/subscripciones' element={<Subscripciones />} />
        <Route path='/explorar' element={<Explorar />}>
          <Route path='tendencias' element={<Tendencias />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
