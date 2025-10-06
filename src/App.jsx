import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/ConatctUs'
import Blog from './pages/Blog'


const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/ourpresence" element={<Blog/>}/>
          <Route path="*" element={<Home/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App