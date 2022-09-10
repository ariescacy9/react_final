import React from 'react'
import Clima from '../proyectClima/Clima'
import Cripto from '../proyectCripto/Cripto'
import Curse from '../proyectCurses/Curse'
import List from '../proyectList/List'
import Web from '../proyectWeb/Web'

function Proyects() {
  return (
    <div>
      <h1>PROYECTS</h1>
      <Clima/>
      <Cripto/>
      <Curse/>
      <Web/>
      <List/>
    </div>
  )
}

export default Proyects