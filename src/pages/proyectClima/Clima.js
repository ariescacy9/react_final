import React from 'react'
import clima from '../../recursos/img/clima.JPG'

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
      <button>PROBAR</button>
    </div>
  )
}

export default Clima