// import React from 'react'

// const About = () => {
//   return (
//     <div className="relative h-screen bg-[#f1f1ea] grainy overflow-x-hidden p-8">

//       <div className="relative"> 
//         <div className='absolute mt-80 right-[70rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
//         <div className='absolute mt-72 right-[74rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl  opacity-80 animate-blob'></div>
//         <div className='absolute mt-64 right-[78rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob' ></div>
//       </div>

//       <div className="absolute top-6 left-8 w-full h-[200px] flex flex-col justify-center">
//         <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHO WE ARE</h1>
//       </div>
//       <div className="absolute mt-56 ml-4 w-[40%]">
//         <p className="text-[16px] font-normal text-[#101110] leading-normal">
//           We are a creative agency<br />
//           designs your best products.<br />
//           We help companies create<br />
//           or launch a refreshed brand,<br />
//           website design,<br />
//           and a modern visual<br />
//           communications.
//         </p>
//       </div>
//       <div className="absolute mt-56 ml-80 w-[40%]">
//         <p className="text-[16px] font-normal text-[#101110] leading-normal">
//           The company is based<br />
//           out of London. Our agency<br />
//           specializes in human-centric<br />
//           digital experiences<br />
//           and improves the products<br />
//           every single day. Together<br />
//           with a team of professionals<br />
//           we come up with cool<br />
//           and important concepts, we<br />
//           will help your business reach<br />
//           a new level.
//         </p>
//       </div>
//       <div className="absolute mt-48 right-0 w-[40%] h-40">
//         <img src='/lofi.gif' alt="Team Meeting" className="w-full h-[45vh]" />
//       </div>

// <div className="relative flex justify-between p-8 -bottom-3 h-full">
//   <div className="relative flex flex-col justify-end items-start ml-10 space-y-8 flex-grow">
//     <div className="relative">
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <button className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2 ">
//         <svg
//             width="120"
//             height="48"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-arrow-right transform rotate-180"
//             viewBox="0 0 120 48"
//             >
//             <line x1="1" y1="24" x2="100" y2="24"></line>
//             <polyline points="90 18 100 24 90 30"></polyline>
//         </svg>
//           <span>MAIN</span>
//         </button>
//       </div>
//     </div>
//   </div>
//   <div className="relative flex flex-col justify-end items-end space-y-8 -mr-14 -mb-9 flex-grow">
//     <button className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
//       <span>WHAT WE DO</span>
//       <svg
//             width="120"
//             height="48"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-arrow-right"
//             viewBox="0 0 120 48"
//             >
//             <line x1="1" y1="24" x2="100" y2="24"></line>
//             <polyline points="90 18 100 24 90 30"></polyline>
//         </svg>
//     </button>
//   </div>
// </div>
// <div className="who-we-are-shadow absolute inset-0"></div>
//     </div>
//   )
// }

// export default About

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative h-screen bg-[#f1f1ea] grainy overflow-x-hidden p-8">
      <div className="relative">
        <div className='absolute mt-80 right-[70rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute mt-72 right-[74rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl opacity-80 animate-blob'></div>
        <div className='absolute mt-64 right-[78rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
      </div>

      <div className="absolute top-6 left-8 w-full h-[200px] flex flex-col justify-center">
        <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHO WE ARE</h1>
      </div>
      <div className="absolute mt-56 ml-4 w-[40%]">
        <p className="text-[16px] font-normal text-[#101110] leading-normal">
          We are a creative agency<br />
          designs your best products.<br />
          We help companies create<br />
          or launch a refreshed brand,<br />
          website design,<br />
          and a modern visual<br />
          communications.
        </p>
      </div>
      <div className="absolute mt-56 ml-80 w-[40%]">
        <p className="text-[16px] font-normal text-[#101110] leading-normal">
          The company is based<br />
          out of London. Our agency<br />
          specializes in human-centric<br />
          digital experiences<br />
          and improves the products<br />
          every single day. Together<br />
          with a team of professionals<br />
          we come up with cool<br />
          and important concepts, we<br />
          will help your business reach<br />
          a new level.
        </p>
      </div>
      <div className="absolute mt-48 right-0 w-[40%] h-40">
        <img src='/lofi.gif' alt="Team Meeting" className="w-full h-[45vh]" />
      </div>

      <div className="relative flex justify-between p-8 -bottom-3 h-full">
        <div className="relative flex flex-col justify-end items-start ml-10 space-y-8 flex-grow">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Link to="/" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
                <svg
                  width="120"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right transform rotate-180"
                  viewBox="0 0 120 48"
                >
                  <line x1="1" y1="24" x2="100" y2="24"></line>
                  <polyline points="90 18 100 24 90 30"></polyline>
                </svg>
                <span>MAIN</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-end items-end space-y-8 -mr-14 -mb-9 flex-grow">
          <Link to="/whatwedo" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
            <span>WHAT WE DO</span>
            <svg
              width="120"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
              viewBox="0 0 120 48"
            >
              <line x1="1" y1="24" x2="100" y2="24"></line>
              <polyline points="90 18 100 24 90 30"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
