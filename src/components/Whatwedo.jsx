// import React from 'react'
// import PolaroidCard from './/PolaroidCard';


// const cardsData = [
//     { image: 'path-to-your-image1.jpg', caption: 'Caption 1' },
//     { image: 'path-to-your-image2.jpg', caption: 'Caption 2' },
//     { image: 'path-to-your-image3.jpg', caption: 'Caption 3' },
//     // Add more objects as needed
//   ];

// const Whatwedo = () => {
//   return (
//     <div className="relative h-screen bg-[#f1f1ea] grainy overflow-x-hidden p-8">

//       {/* <div className="relative"> 
//         <div className='absolute mt-80 right-[70rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
//         <div className='absolute mt-72 right-[74rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl  opacity-80 animate-blob'></div>
//         <div className='absolute mt-64 right-[78rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob' ></div>
//       </div> */}

//       <div className="absolute top-6 left-8 w-full h-[200px] flex flex-col justify-center">
//         <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHAT WE DO</h1>
//       </div>
      
//      <div className=' flex flex-wrap items-center justify-center mt-40 '>
//         {/* <div className='w-48 h-60 bg-slate-400 '> PROJECTS </div> */}
//         {cardsData.map((item, index) => (
//         <PolaroidCard
//           key={index}
//           image={item.image}
//           caption={item.caption}
//         //   rotation={rotations[index % rotations.length]}
//         />
//       ))}
//     </div> 
     


// <div className="relative flex justify-between p-8 h-full">
//   <div className="relative flex flex-col justify-end items-start ml-20 space-y-8 flex-grow">
//   <div className="relative">
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//       <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
//         <svg
//           width="120"
//           height="48"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-arrow-right transform rotate-180"
//           viewBox="0 0 120 48"
//         >
//           <line x1="1" y1="24" x2="100" y2="24"></line>
//           <polyline points="90 18 100 24 90 30"></polyline>
//         </svg>
//         <span>WHO WE ARE</span>
//       </button>
//     </div>
//   </div>
// </div>

//   <div className="relative flex flex-col justify-end items-end space-y-8 -mr-14 -mb-9 flex-grow">
//     <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2">
//       <span>OUR TEAM</span>
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

// export default Whatwedo

// import React from 'react';
// import PolaroidCard from './PolaroidCard';

// const cardsData = [
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 1' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 2' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 3' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 4' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 5' },
// //   { image: 'src/assets/LATrees.jpg', caption: 'Caption 6' },
//   // Add more objects as needed
// ];

// const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1']; // Define rotations for a more natural look

// const Whatwedo = () => {
//   return (
//     <div className="relative h-screen bg-[#f1f1ea] grainy overflow-hidden p-8">
//       <div className="absolute top-6 left-8 w-full flex flex-col justify-center">
//         <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHAT WE DO</h1>
//       </div>
      
//       <div className="flex flex-wrap items-center justify-center mt-40">
//         {cardsData.map((item, index) => (
//           <PolaroidCard
//             key={index}
//             image={item.image}
//             caption={item.caption}
//             rotation={rotations[index % rotations.length]}
//           />
//         ))}
//       </div> 
      
//       <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between">
//         <div className="flex flex-col items-start space-y-8">
//           <div className="relative">
//             <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
//               <svg
//                 width="120"
//                 height="48"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-arrow-right transform rotate-180"
//                 viewBox="0 0 120 48"
//               >
//                 <line x1="1" y1="24" x2="100" y2="24"></line>
//                 <polyline points="90 18 100 24 90 30"></polyline>
//               </svg>
//               <span>WHO WE ARE</span>
//             </button>
//           </div>
//         </div>
  
//         <div className="flex flex-col items-end space-y-8">
//           <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2">
//             <span>OUR TEAM</span>
//             <svg
//                   width="120"
//                   height="48"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-arrow-right"
//                   viewBox="0 0 120 48"
//                 >
//                 <line x1="1" y1="24" x2="100" y2="24"></line>
//                 <polyline points="90 18 100 24 90 30"></polyline>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="who-we-are-shadow absolute inset-0"></div>
//     </div>
//   );
// }

// export default Whatwedo;

// import React, { useState, useEffect } from 'react';
// import PolaroidCard from './PolaroidCard';
// import ArrowRight from 'D:/corporate-web/src/assets/ArrowRight.svg';

// const cardsData = [
//   { image: 'src/assets/1.jpg', caption: 'Caption 1' },
//   { image: 'src/assets/2.jpg', caption: 'Caption 2' },
//   { image: 'src/assets/3.jpg', caption: 'Caption 3' },
//   { image: 'src/assets/4.jpg', caption: 'Caption 4' },
//   { image: 'src/assets/5.jpg', caption: 'Caption 5' },
//   { image: 'src/assets/6.jpg', caption: 'Caption 6' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 7' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
//   // Add more objects as needed
// ];

// const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];

// const Whatwedo = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen bg-[#f1f1ea] grainy overflow-hidden p-8">
//       <div className="absolute top-6 left-8 w-full flex flex-col justify-center">
//         <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHAT WE DO</h1>
//       </div>
      
//       <div className="flex justify-center items-center mt-40 relative">
//         <div className="relative flex items-center">
//           {cardsData.map((item, index) => (
//             <PolaroidCard
//               key={index}
//               image={item.image}
//               caption={item.caption}
//               rotation={rotations[index % rotations.length]}
//               active={index === currentIndex}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between">
//         <div className="flex flex-col items-start space-y-8">
//           <div className="relative">
//             <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
//               <svg
//                 width="120"
//                 height="48"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-arrow-right transform rotate-180"
//                 viewBox="0 0 120 48"
//               >
//                 <line x1="1" y1="24" x2="100" y2="24"></line>
//                 <polyline points="90 18 100 24 90 30"></polyline>
//               </svg>
//               <span>WHO WE ARE</span>
//             </button>
//           </div>
//         </div>
  
//         <div className="flex flex-col items-end space-y-8">
//           <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2">
//             <span>OUR TEAM</span>
//             <svg
//                   width="120"
//                   height="48"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-arrow-right"
//                   viewBox="0 0 120 48"
//                 >
//                 <line x1="1" y1="24" x2="100" y2="24"></line>
//                 <polyline points="90 18 100 24 90 30"></polyline>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="who-we-are-shadow absolute inset-0"></div>
//     </div>
//   );
// }

// export default Whatwedo;


// File path: src/components/Whatwedo.js

// import React from 'react';
// import PolaroidCard from './PolaroidCard';

// const cardsData = [
//   { image: 'src/assets/1.jpg', caption: 'Caption 1' },
//   { image: 'src/assets/2.jpg', caption: 'Caption 2' },
//   { image: 'src/assets/3.jpg', caption: 'Caption 3' },
//   { image: 'src/assets/4.jpg', caption: 'Caption 4' },
//   { image: 'src/assets/5.jpg', caption: 'Caption 5' },
//   { image: 'src/assets/6.jpg', caption: 'Caption 6' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 7' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 9' },
//   { image: 'src/assets/LATrees.jpg', caption: 'Caption 10' },
// ];

// const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];

// const Whatwedo = () => {
//   return (
//     <div className="relative h-screen bg-[#f1f1ea] grainy overflow-hidden p-8">
//       <div className="absolute top-6 left-8 w-full flex flex-col justify-center">
//         <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHAT WE DO</h1>
//       </div>
      
//       <div className="flex justify-center items-center mt-40 relative overflow-hidden">
//         <div className="carousel-container">
//           {cardsData.map((item, index) => (
//             <PolaroidCard
//               key={index}
//               image={item.image}
//               caption={item.caption}
//               rotation={rotations[index % rotations.length]}
//             />
//           ))}
//           {cardsData.map((item, index) => (
//             <PolaroidCard
//               key={`duplicate-${index}`}
//               image={item.image}
//               caption={item.caption}
//               rotation={rotations[index % rotations.length]}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between">
//         <div className="flex flex-col items-start space-y-8">
//           <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
//             <svg
//               width="120"
//               height="48"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-arrow-right transform rotate-180"
//               viewBox="0 0 120 48"
//             >
//               <line x1="1" y1="24" x2="100" y2="24"></line>
//               <polyline points="90 18 100 24 90 30"></polyline>
//             </svg>
//             <span>WHO WE ARE</span>
//           </button>
//         </div>
  
//         <div className="flex flex-col items-end space-y-8">
//           <button className="bg-none text-[#101110] px-6 py-3 rounded-full flex items-center space-x-2">
//             <span>OUR TEAM</span>
//             <svg
//               width="120"
//               height="48"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-arrow-right"
//               viewBox="0 0 120 48"
//             >
//               <line x1="1" y1="24" x2="100" y2="24"></line>
//               <polyline points="90 18 100 24 90 30"></polyline>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="who-we-are-shadow absolute inset-0"></div>
//     </div>
//   );
// }

// export default Whatwedo;

import React, { useState, useRef } from 'react';
import PolaroidCard from './PolaroidCard';
import './Whatwedo.css'; // Import the CSS file for the animation styles

const cardsData = [
  { image: 'src/assets/1.jpg', caption: 'Caption 1' },
  { image: 'src/assets/2.jpg', caption: 'Caption 2' },
  { image: 'src/assets/3.jpg', caption: 'Caption 3' },
  { image: 'src/assets/4.jpg', caption: 'Caption 4' },
  { image: 'src/assets/5.jpg', caption: 'Caption 5' },
  { image: 'src/assets/6.jpg', caption: 'Caption 6' },
  { image: 'src/assets/LATrees.jpg', caption: 'Caption 7' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 9' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 10' },
];

const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];

const Whatwedo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    carouselRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    carouselRef.current.style.animationPlayState = 'running';
  };

  return (
    <div className="relative h-screen bg-[#f1f1ea] grainy overflow-hidden p-8">
      <div className="absolute top-6 left-8 w-full flex flex-col justify-center">
        <h1 className="text-[130px] font-regular text-[#101110] leading-none">WHAT WE DO</h1>
      </div>
      
      <div className="flex justify-center items-center mt-40 relative overflow-hidden">
        <div 
          className="carousel-container" 
          ref={carouselRef} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {cardsData.map((item, index) => (
            <PolaroidCard
              key={index}
              image={item.image}
              caption={item.caption}
              rotation={rotations[index % rotations.length]}
            />
          ))}
          {cardsData.map((item, index) => (
            <PolaroidCard
              key={`duplicate-${index}`}
              image={item.image}
              caption={item.caption}
              rotation={rotations[index % rotations.length]}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-0 w-full p-8 flex justify-between">
        <div className="flex flex-col items-start space-y-8">
          <button className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
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
            <span>WHO WE ARE</span>
          </button>
        </div>
  
        <div className="flex flex-col items-end space-y-8">
          <button className="bg-none text-[#101110] text-[14px] px-6 py-3  rounded-full flex items-center space-x-2">
            <span>OUR TEAM</span>
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
          </button>
        </div>
      </div>
      {/* <div className="who-we-are-shadow absolute inset-0"></div> */}
    </div>
  );
}

export default Whatwedo;