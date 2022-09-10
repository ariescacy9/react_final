import React from 'react'
import webP from '../../recursos/img/webP.JPG'

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
      <button>PROBAR</button>
    </div>
  )
}

export default Web