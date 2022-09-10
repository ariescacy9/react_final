import React from 'react'
import contador from '../../recursos/img/contadorClick.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function List() {
  return (
    <div>
      <div>
        <img src={contador} alt="contador"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Lista</h1>
      <p>descripcion web Lista</p>
      </div>
      <Link to='./box'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default List