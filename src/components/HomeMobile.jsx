import React from 'react';
import { Link } from 'react-router-dom';

const HomeMobile = () => {
  return (
    <div className="relative h-screen bg-[#f1f1ea] grainy overflow-x-hidden">
      <div className="relative">
        <div className='absolute top-32 right-[24rem] md:right-[16rem] sm:right-[8rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute top-32 right-[12rem] md:right-[8rem] sm:right-[4rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl opacity-80 animate-blob'></div>
        <div className='absolute top-48 right-[18rem] md:right-[12rem] sm:right-[6rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl opacity-70 animate-blob'></div>
      </div>
      <div className="relative flex flex-col justify-between p-8 mt-5 h-full">
        <div className="relative flex-grow">
          <h1 className="text-[65px] font-regular text-[#101110] leading-none">
            WE CREATE<br />
            <span className="text-[65px]">BEST DIGITAL<br />PRODUCTS.</span>
          </h1>
        </div>
        <div className="relative flex flex-col items-start space-y-8 flex-grow mb-8">
          <div className="relative">
            <svg width="220" height="120">
              <ellipse className='wobble1' cx="110" cy="60" rx="70" ry="50" stroke="black" fill="none" strokeWidth="1" />
              <ellipse className='wobble2' cx="110" cy="60" rx="80" ry="40" stroke="black" fill="none" transform="rotate(150, 110, 60)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button className="pointer-events-auto text-[#101110] text-[14px] px-4 py-2 rounded">
                DISCUSS<br /> THE PROJECT
              </button>
            </div>
          </div>
          <p className="text-[#101110] font-normal">WE ARE THE LEADERS IN WEB & MOBILE<br /> DESIGN AND DEVELOPMENT INDUSTRY.</p>
        </div>
        <div className="relative flex flex-col items-end space-y-4 flex-grow mb-8">
          <Link to="/about" className="bg-none text-[#101110] text-[14px] ml-36 px-3 py-3 rounded-full flex items-center space-x-2">
            <span>WHO WE ARE</span>
            <svg width="60" height="24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right" viewBox="0 0 60 24">
              <line x1="1" y1="12" x2="45" y2="12"></line>
              <polyline points="38 5 45 12 38 19"></polyline>
            </svg>
          </Link>
          <p className="text-[#101110] text-right font-normal">We create quality content and cool ideas. We create websites, applications,<br />3D design, motion design and animation. We bring the most daring ideas to life.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeMobile;
