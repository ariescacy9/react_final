import React from 'react'
import cripto from '../../recursos/img/cripto.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Cripto() {
  return (
    <div>
      <div>
        <img src={cripto} alt="cripto"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Clima</h1>
      <p>descripcion web clima</p>
      </div>
      <Link to='./cripto'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Cripto