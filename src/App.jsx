import React, { useEffect, useState } from 'react'
import './App.css'
import {motion} from 'framer-motion';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import './fonts.css';
import Whatwedo from './components/Whatwedo';
import Ourteam from './components/Ourteam';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  
  const [cursorVariant, setCursorVariant] = useState("default");

  // console.log(mousePosition);

  useEffect(() => {
   const mouseMove = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
   }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);


  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
      backgroundColor: "#f3994c",
      mixBlendMode: "difference",
      text:{
       x: mousePosition.x - 75,
       y: mousePosition.y - 75,
       height: 150,
       width: 150,
       backgroundColor: "yellow",
       mixBlendMode: "difference"
        
      }
    }
  }

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div>
        <motion.div
        className= ' cursor '
        variants={variants}
        animate = {cursorVariant}
        />
        <Navbar />
        {/* <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/" element={<About/>} />
        </Routes> */}
        {/* <Home />
        <About />
        <Whatwedo/> */}
        <Ourteam/>
      </div>
    </>
  )
}

export default App
