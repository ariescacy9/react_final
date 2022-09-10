import React from 'react'
import cripto from '../../recursos/img/cripto.JPG'

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
      <button>PROBAR</button>
    </div>
  )
}

export default Cripto