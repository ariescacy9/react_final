import React from 'react'
import contador from '../../recursos/img/contadorClick.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function List() {
  return (
    <div div style={{
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      borderRadius:'10px',
      width: '350px',
      boxShadow: '0 0 .5rem #39e206',
      margin:'20px'
    }}>
      <div>
        <img src={contador} alt="contador"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Cajas</h1>
      <p>Muestra 3 cajas que se se suman y mantienen la cuenta de clicks con respecto a las demas, tambien muestra el total realizados</p>
      </div>
      <Link to='./box'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default List