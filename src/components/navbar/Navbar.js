
import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="logo"><h3>CACY</h3></div>
      <nav className="navegacion">
        <Link to='./'><p className='p'>Sobre Mi</p></Link>
        <Link to='./about'><p className='p'>Formación</p></Link>
        <Link to='./contacto'><p className='p'>Contacto</p></Link>
        <Link to='./proyectos'><p className='p'>Proyectos</p></Link>
      </nav>
    </header>
  )
}

export default Navbar
