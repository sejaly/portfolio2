import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Porfolio'
import Project from './components/Project'
import Contact from './components/Contact'

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Project/>
      <Contact/>
     
      </div>
      <Toaster/>

       </>
       
  )
}

export default App
