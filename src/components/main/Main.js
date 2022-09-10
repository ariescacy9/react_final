import React from 'react'
import './Main.css'
//import videoBG1 from '../../recursos/videos/videobg1.mp4'



function Main() {
  return (
    <div className='main'>
      <div className='main_img'>
        <div className='video'>
          <h3>alguito</h3>
        </div>
        <h1>SOY INICIO</h1>
        <div className='datePersnal'>
          <h2>DATOS PERSONALES</h2>
          <p>NOMBRES: Cristian Alexander</p>
          <p>APELLIDOS: Carhuas Yuyale</p>
          <p>EDAD: 28</p>
        </div>
        <div className='tecnology'>
          <h3>tecnologias</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </div>
    </div>
  )
}

export default Main