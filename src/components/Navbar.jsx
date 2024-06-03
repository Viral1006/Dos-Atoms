import React from 'react'
import ArrowRight from 'D:/corporate-web/src/assets/ArrowRight.svg';

const Navbar = () => {
  return (
    <div className="relative h-[33px] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
        <div className="relative"> 
        <div className='absolute top-2 left-[64px] w-4 h-4 bg-[#515151] rounded-full'></div>
        <div className='absolute top-2 left-[40px] w-4 h-4 bg-[#101110] rounded-full'></div>
      </div>
      <div className="absolute top-1 right-0 flex items-center pr-4">

    <button className="bg-none text-base text-[#101110] px-2 py-1 mr-[100px]">EN</button>

    <button className="bg-none text-base text-[#101110] mr-[100px] flex items-center">
      CONTACT US
      {/* <svg width="40" height="24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right" viewBox="0 0 24 24" transform="rotate(0 12 12)">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
    </svg> */}
    <img src={ArrowRight} alt="Arrow Right" width="20" height="16" className="ml-2 mb-1" />
    </button>

    <div className="ml-4">
      <div className="w-8 h-0.5 bg-[#101110] mb-1"></div>
      <div className="w-8 h-0.5 bg-[#101110] mb-1"></div>
    </div>
  </div>
    </div>
  )
}

export default Navbar