import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../components/main/Main'
import Proyects from '../pages/proyects/Proyects'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/proyectos' element={<Proyects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter