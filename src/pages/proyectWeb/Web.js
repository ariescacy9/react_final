import React from 'react'
import webP from '../../recursos/img/webP1.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Web() {
  return (
    <div>
      <div>
        <img src={webP} alt="webP"
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
      <Link to='./web'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Web