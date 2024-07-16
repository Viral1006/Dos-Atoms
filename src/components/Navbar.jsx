// import React from 'react'
// import ArrowRight from '/ArrowRight.svg';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="relative h-[32px] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
//         <Link to="/" className="relative"> 
//         <div className='absolute top-2 left-[64px] w-4 h-4 bg-[#515151] rounded-full'></div>
//         <div className='absolute top-2 left-[40px] w-4 h-4 bg-[#101110] rounded-full'></div>
//       </Link>
//       <div className="absolute top-1 right-0 flex items-center pr-4">

//     <button className="bg-none text-base text-[#101110] px-2 py-1 mr-[100px]">EN</button>

//     <button className="bg-none text-base text-[#101110] mr-[100px] flex items-center">
//       CONTACT US
//       {/* <svg width="40" height="24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right" viewBox="0 0 24 24" transform="rotate(0 12 12)">
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//     <polyline points="12 5 19 12 12 19"></polyline>
//     </svg> */}
//     <img src={ArrowRight} alt="Arrow Right" width="20" height="16" className="ml-2 mb-1" />
//     </button>

//     <div className="ml-4">
//       <div className="w-8 h-0.5 bg-[#101110] mb-1"></div>
//       <div className="w-8 h-0.5 bg-[#101110] mb-1"></div>
//     </div>
//   </div>
//     </div>
//   )
// }

// export default Navbar

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ArrowRight from '/ArrowRight.svg';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="relative h-[48px] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
//       <Link to="/" className="relative">
//         <div className='absolute top-2 left-[64px] w-4 h-4 bg-[#515151] rounded-full'></div>
//         <div className='absolute top-2 left-[40px] w-4 h-4 bg-[#101110] rounded-full'></div>
//       </Link>
//       <div className="absolute top-1 right-0 flex items-center pr-4">
//         <button className="hidden md:block bg-none text-base text-[#101110] px-2 py-1 mr-[100px]">EN</button>
//         <button className="hidden md:flex bg-none text-base text-[#101110] mr-[100px] items-center">
//           CONTACT US
//           <img src={ArrowRight} alt="Arrow Right" width="20" height="16" className="ml-2 mb-1" />
//         </button>
//         <div className="ml-4 cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
//           <div className="w-8 h-0.5 bg-[#101110] mb-1 transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
//           <div className="w-8 h-0.5 bg-[#101110] mb-1 transition-opacity duration-300 ease-in-out" style={{ opacity: menuOpen ? 0 : 1 }}></div>
//           <div className="w-8 h-0.5 bg-[#101110] transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
//         </div>
//       </div>
//       <div
//         className={`fixed top-0 right-0 h-full w-full bg-[#f1f1ea] z-40 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:w-auto md:h-auto md:top-12 md:right-0 md:translate-x-0 md:flex md:items-center md:space-x-8 md:p-0`}
//       >
//         <div className="flex flex-col items-center justify-center h-full md:h-auto md:flex-row md:space-x-8 md:p-4">
//           <Link to="/about" className="text-[#101110] text-base mb-4 md:mb-0" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link to="/who-we-are" className="text-[#101110] text-base mb-4 md:mb-0" onClick={() => setMenuOpen(false)}>Who We Are</Link>
//           <Link to="/what-we-do" className="text-[#101110] text-base mb-4 md:mb-0" onClick={() => setMenuOpen(false)}>What We Do</Link>
//           <Link to="/our-team" className="text-[#101110] text-base mb-4 md:mb-0" onClick={() => setMenuOpen(false)}>Our Team</Link>
//           <Link to="/contact-us" className="text-[#101110] text-base" onClick={() => setMenuOpen(false)}>Contact Us</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '/ArrowRight.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[36px] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
      <Link to="/" className="relative">
        <div className='absolute top-2 left-[64px] w-4 h-4 bg-[#515151] rounded-full'></div>
        <div className='absolute top-2 left-[40px] w-4 h-4 bg-[#101110] rounded-full'></div>
      </Link>
      <div className="absolute top-1 right-0 flex items-center pr-4">
        <button className="hidden md:block bg-none text-base text-[#101110] px-2 py-1 mr-[100px]">EN</button>
        <button className="hidden md:flex bg-none text-base text-[#101110] mr-[100px] items-center">
          CONTACT US
          <img src={ArrowRight} alt="Arrow Right" width="20" height="16" className="ml-2 mb-1" />
        </button>
        <div className="ml-4 cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-8 h-0.5 bg-[#101110] mb-1 transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className="w-8 h-0.5 bg-[#101110] mb-1 transition-opacity duration-300 ease-in-out" style={{ opacity: menuOpen ? 0 : 1 }}></div>
          <div className="w-8 h-0.5 bg-[#101110] transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#f1f1ea] grainy z-40 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* <Link to="/about" className="text-[#101110]  text-lg" onClick={() => setMenuOpen(false)}>About</Link> */}
          <Link to="/about" className="text-[#101110] font-medium hover:scale-150 hover:font-semibold transition ease-in-out text-3xl" onClick={() => setMenuOpen(false)}>Who We Are</Link>
          <Link to="/whatwedo" className="text-[#101110] font-medium hover:scale-150 hover:font-semibold transition ease-in-out  text-3xl" onClick={() => setMenuOpen(false)}>What We Do</Link>
          <Link to="/ourteam" className="text-[#101110] font-medium hover:scale-150 hover:font-semibold transition ease-in-out  text-3xl" onClick={() => setMenuOpen(false)}>Our Team</Link>
          <Link to="/contactus" className="text-[#101110] font-medium hover:scale-150 hover:font-semibold transition ease-in-out  text-3xl" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
