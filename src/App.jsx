// // import React, { useEffect, useState } from 'react'
// // import './App.css'
// // import {motion} from 'framer-motion';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import './index.css'
// // import Home from './components/Home'
// // import Navbar from './components/Navbar'
// // import About from './components/About'
// // import './fonts.css';
// // import Whatwedo from './components/Whatwedo';
// // import Ourteam from './components/Ourteam';
// // import Contactus from './components/Contactus';

// // function App() {
// //   const [mousePosition, setMousePosition] = useState({
// //     x: 0,
// //     y: 0
// //   })
  
// //   const [cursorVariant, setCursorVariant] = useState("default");

// //   // console.log(mousePosition);

// //   useEffect(() => {
// //    const mouseMove = e => {
// //     setMousePosition({
// //       x: e.clientX,
// //       y: e.clientY
// //     })
// //    }

// //     window.addEventListener("mousemove", mouseMove);

// //     return () => {
// //       window.removeEventListener("mousemove", mouseMove)
// //     }
// //   }, []);


// //   const variants = {
// //     default: {
// //       x: mousePosition.x - 16,
// //       y: mousePosition.y - 16,
// //       transition: {
// //         type: "smooth",
// //         duration: 0,
// //       },
// //       backgroundColor: "#f3994c",
// //       mixBlendMode: "difference",
// //       text:{
// //        x: mousePosition.x - 75,
// //        y: mousePosition.y - 75,
// //        height: 150,
// //        width: 150,
// //        backgroundColor: "yellow",
// //        mixBlendMode: "difference"
        
// //       }
// //     }
// //   }

// //   // const textEnter = () => setCursorVariant("text");
// //   // const textLeave = () => setCursorVariant("default");

// //   return (
// //     <>
// //       <div>
// //         <motion.div
// //         className= ' cursor '
// //         variants={variants}
// //         animate = {cursorVariant}
// //         />
// //         <Navbar />
// //         {/* <Routes>
// //          <Route path="/" element={<Home/>} />
// //          <Route path="/" element={<About/>} />
// //         </Routes> */}
// //         <Home />
// //         <About />
// //         <Whatwedo/>
// //         <Ourteam/>
// //         <Contactus/>
// //       </div>
// //     </>
// //   )
// // }

// // export default App


import React, { useEffect, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import './fonts.css';
import Whatwedo from './components/Whatwedo';
import Ourteam from './components/Ourteam';
import Contactus from './components/Contactus';
import HomeIntegrate from './components/HomeIntegrate';
import AboutIntegrate from './components/AboutIntegrate';
import WhatwedoIntegrate from './components/WhatwedoIntegrate';
import OurteamIntegrate from './components/OurteamIntegrate';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
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
      text: {
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        height: 150,
        width: 150,
        backgroundColor: "yellow",
        mixBlendMode: "difference"
      }
    }
  };

  return (
    <Router>
      <div>
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeIntegrate />} />
          <Route path="/about" element={<AboutIntegrate />} />
          <Route path="/whatwedo" element={<WhatwedoIntegrate />} />
          <Route path="/ourteam" element={<OurteamIntegrate />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { motion } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// import FullPage from '@fullpage/react-fullpage';
// import './index.css';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import './fonts.css';
// import Whatwedo from './components/Whatwedo';
// import Ourteam from './components/Ourteam';
// import Contactus from './components/Contactus';

// function App() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0
//   });

//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = e => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//       transition: {
//         type: "smooth",
//         duration: 0,
//       },
//       backgroundColor: "#f3994c",
//       mixBlendMode: "difference",
//       text: {
//         x: mousePosition.x - 75,
//         y: mousePosition.y - 75,
//         height: 150,
//         width: 150,
//         backgroundColor: "yellow",
//         mixBlendMode: "difference"
//       }
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className='cursor'
//         variants={variants}
//         animate={cursorVariant}
//       />
//       <Navbar />
//       <FullPage
//         scrollingSpeed={1000}
//         render={() => {
//           return (
//             <FullPage.Wrapper>
//               <div className="section">
//                 <Home />
//               </div>
//               <div className="section">
//                 <About />
//               </div>
//               <div className="section">
//                 <Whatwedo />
//               </div>
//               <div className="section">
//                 <Ourteam />
//               </div>
//               <div className="section">
//                 <Contactus />
//               </div>
//             </FullPage.Wrapper>
//           );
//         }}
//         verticalCentered={false}
//         controlArrows={true}
//         sectionsColor={['#f1f1ea', '#fff', '#f1f1ea', '#fff', '#f1f1ea']}
//         scrollHorizontally={true} // Enable horizontal scrolling
//       />
//     </>
//   );
// }

// export default App;

