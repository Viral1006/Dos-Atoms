import React, { useState, useRef } from 'react';
import PolaroidCard from './PolaroidCard';
import './Whatwedo.css';
import { Link } from 'react-router-dom';

const cardsData = [
  { image: '/7.jpeg', caption: 'Project 1' },
  { image: '/8.jpeg', caption: 'Project 2' },
  { image: '/9.jpeg', caption: 'Project 3' },
  { image: '/10.jpeg', caption: 'Project 4' },
  { image: '/11.jpeg', caption: 'Project 5' },
  // { image: '/6.jpg', caption: 'Caption 6' },
  // { image: '/LATrees.jpg', caption: 'Caption 7' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 8' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 9' },
  // { image: 'src/assets/LATrees.jpg', caption: 'Caption 10' },
];

const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];

const WhatwedoMobile = () => {
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
      <div className="relative">
        <div className='absolute top-36 right-[2rem] md:right-[16rem] sm:right-[8rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute top-28 right-[6rem] md:right-[8rem] sm:right-[4rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl opacity-80 animate-blob'></div>
        <div className='absolute top-48 right-[10rem] md:right-[12rem] sm:right-[6rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
      </div>
      <div className="absolute top-8 left-8 w-full flex flex-col justify-center">
        <h1 className="text-[60px] font-regular text-[#101110] leading-none">WHAT WE DO.</h1>
      </div>
      
      <div className="flex justify-center items-center mt-56 relative overflow-hidden">
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

      <div className="relative flex justify-between items-center p-4 md:p-8 h-full">
  <div className="flex items-center mb-[30rem] -ml-10">
    <Link to="/about" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
      <svg
        width="80"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-right transform rotate-180"
        viewBox="0 0 80 24"
      >
        <line x1="1" y1="12" x2="70" y2="12"></line>
        <polyline points="60 6 70 12 60 18"></polyline>
      </svg>
      <span>WHO WE ARE</span>
    </Link>
  </div>
  <div className="flex items-center mb-[30rem] -mr-10">
    <Link to="/ourteam" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
      <span>OUR TEAM</span>
      <svg
        width="80"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-right"
        viewBox="0 0 80 24"
      >
        <line x1="1" y1="12" x2="70" y2="12"></line>
        <polyline points="60 6 70 12 60 18"></polyline>
      </svg>
    </Link>
  </div>
</div>
      {/* <div className="who-we-are-shadow absolute inset-0"></div> */}
    </div>
  );
}

export default WhatwedoMobile;