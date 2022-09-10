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
        <div>
          <h3>dominio</h3>
          <div className='tecnologyIcon'>
            <p>
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react'/>
            <p>React</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='js'/>
              <p>Javascript</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html'/>
              <p>HTML</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css'/>
              <p>CSS</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git'/>
              <p>Git</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github'/>
              <p>GitHub</p>
            </p>
            <p>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass'/>
              <p>Saas</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main