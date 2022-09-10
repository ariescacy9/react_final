import React from 'react'
import curses from '../../recursos/img/curses.JPG'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Curse() {
  return (
    <div>
      <div>
        <img src={curses} alt="curses"
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
      <Link to='./curso'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Curse