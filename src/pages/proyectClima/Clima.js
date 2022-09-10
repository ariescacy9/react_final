import React from 'react'
import clima from '../../recursos/img/clima.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Clima() {
  return (
    <div>
      <div>
        <img src={clima} alt="clima" style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Clima</h1>
      <p>descripcion web clima</p>
      </div>
      <Link to='./clima'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Clima