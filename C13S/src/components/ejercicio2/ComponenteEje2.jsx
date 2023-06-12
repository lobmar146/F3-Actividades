import { useState, useEffect } from 'react'
export default function ComponenteEje2() {
  useEffect(() => {
    console.log('activo')

    return () => {
      console.log('inactivo')
    }
  }, [])
  return (
    <div className='card'>
      <p>Activo</p>
    </div>
  )
}
