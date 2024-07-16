import React from 'react';
import { Link } from 'react-router-dom';

const AboutMobile = () => {
  return (
    <div className="relative min-h-screen bg-[#f1f1ea] grainy overflow-x-hidden p-4 md:p-8">
      <div className="relative">
        <div className='absolute top-20 md:mt-80 right-[4rem] md:right-[70rem] w-32 md:w-64 h-32 md:h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-xl md:blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute top-60 md:mt-72 right-[8rem] md:right-[74rem] w-32 md:w-64 h-32 md:h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-xl md:blur-2xl opacity-80 animate-blob'></div>
        <div className='absolute top-96 md:mt-64 right-[12rem] md:right-[78rem] w-32 md:w-64 h-32 md:h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-xl md:blur-2xl opacity-70 animate-blob'></div>
      </div>

      <div className="relative mt-5 md:absolute md:top-6 left-4 w-full flex flex-col justify-center items-start">
        <h1 className="text-[65px] md:text-[150px] font-regular text-[#101110] leading-none">WHO WE ARE</h1>
      </div>

<div className="relative w-full mt-12 md:mt-56 px-4 md:px-8">
  <div className="flex flex-col md:flex-row justify-between items-start">
    <div className="w-full md:w-[55%] md:pr-8">
      <p className="text-[14px] md:text-[16px] font-normal text-[#101110] leading-normal text-left">
        We are a creative agency<br />
        designs your best products.<br />
        We help companies create<br />
        or launch a refreshed brand,<br />
        website design,<br />
        and a modern visual<br />
        communications.
      </p>
    </div>
    <div className="w-full md:w-[55%] -mt-16 md:mt-0 md:pl-8">
      <p className="text-[14px] md:text-[16px] font-normal text-[#101110] leading-normal text-right">
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
  </div>
</div>
      <div className="relative mt-12 md:absolute md:mt-48 right-0 w-full md:w-[40%] h-40">
        <img src='/lofi.gif' alt="Team Meeting" className="w-full h-auto md:h-[45vh]" />
      </div>

      <div className="relative flex justify-between items-center p-4 md:p-8 h-full">
  <div className="flex items-center mt-16 -ml-8">
    <Link to="/" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
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
      <span>MAIN</span>
    </Link>
  </div>
  <div className="flex items-center mt-16 -mr-10">
    <Link to="/whatwedo" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2">
      <span>WHAT WE DO</span>
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
    </div>
  );
}

export default AboutMobile;

