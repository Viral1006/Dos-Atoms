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
      
      <div className="absolute -bottom-4 left-0 w-full p-8 flex justify-between">
        <div className="flex flex-col items-start space-y-8">
          <Link to="/about" className="glow-button1 bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
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
          </Link>
        </div>
  
        <div className="flex flex-col items-end space-y-8">
          <Link to="/ourteam" className="glow-button1 bg-none text-[#101110] text-[14px] px-6 py-3  rounded-full flex items-center space-x-2">
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
          </Link>
        </div>
      </div>
      {/* <div className="who-we-are-shadow absolute inset-0"></div> */}
    </div>
  );
}

export default Whatwedo;