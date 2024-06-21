import React from 'react'
import { Link } from 'react-router-dom'

const Contactus = () => {
  return (

    <div className="relative h-screen bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
      <div className="relative h-[95vh] w-[100vw] py-5 px-7">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <img src='/18.jpg' className='h-full w-full object-cover ' alt='Contact Background' />
          
          <div className="absolute top-2 left-8 w-full h-[200px] flex flex-col justify-center">
        <h1 className="text-[120px] font-regular text-[#f1f1ea] leading-none">CONTACT US</h1>
      </div>
         
         
      <div className="absolute top-[30%] left-[8%] w-[84%] p-8 flex flex-wrap space-y-8">
            <div className="w-full md:w-1/2 lg:w-1/3 -ml-32 -mt-10 p-4">
              <h2 className="text-[18px] font-light mb-4 text-[#f1f1ea] ">Want to discuss your project?</h2>
            <form className="space-y-4">
                <div>
                    <input
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 text-[#f1f1ea] text-[14px] bg-transparent border-b border-[#4f4f4f] placeholder-[#939393] focus:outline-none"
                    />
                </div>
                <div>
                    <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 text-[#f1f1ea] text-[14px] bg-transparent border-b border-[#4f4f4f] placeholder-[#939393] focus:outline-none"
                    />
                </div>
                <div>
                    <select
                    id="inquiry"
                    className="w-full p-3 text-[#f1f1ea] text-[14px] bg-transparent border-b border-[#4f4f4f] focus:outline-none"
                    >
                    <option className="bg-black text-[#f1f1ea]">UI/UX</option>
                    <option className="bg-black text-[#f1f1ea]">Web Development</option>
                    <option className="bg-black text-[#f1f1ea]">App Dev</option>
                    </select>
                </div>
                
                <div className="relative ml-40">
                <svg width="220" height="120">
                  <ellipse className='wobble1' cx="110" cy="60" rx="70" ry="50" stroke="#f1f1ea" fill="none" strokeWidth="1" />
                  <ellipse className='wobble2' cx="110" cy="60" rx="80" ry="40" stroke="#f1f1ea" fill="none" transform="rotate(150, 110, 60)" />
                </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button className="pointer-events-auto text-[#F1F1EA] text-[14px] ml-4 px-4 py-2 rounded">
                      SEND<br/> MESSAGE
                    </button>
                  </div>
              </div>

            </form>
            </div>
            
            <div className="ml-72 p-4">
              <div className="-mt-16">
                <h2 className="text-[18px] mb-2 font-light text-[#f1f1ea]">LOCATION</h2>
                <p className="text-[16px] text-[#f1f1ea]">123 Main Street, City, Country</p>
              </div>
              <div className="mt-8">
                <h2 className="text-[18px] font-light mb-2 text-[#f1f1ea]">PHONE</h2>
                <p className="text-[16px] text-[#f1f1ea]">+123 456 7890</p>
              </div>
            </div>
            
            <div className="ml-10 p-4 mt-16">
              <div className="-mt-16">
                <h2 className="text-[18px] font-light mb-2 text-[#f1f1ea]">EMAIL</h2>
                <p className="text-[16px] text-[#f1f1ea]">contact@company.com</p>
              </div>
              <div>
                <h2 className="text-[18px] font-light mb-2 mt-8 text-[#f1f1ea]">SOCIAL</h2>
                <div className="flex space-x-4 ">
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393]">facebook</a>
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393]">twitter</a>
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393] ">instagram</a>
                </div>
              </div>
            </div>
              

<div className="absolute -bottom-20 left-0 w-full p-8 flex justify-between items-end">
            <div className="flex flex-col items-start -ml-32 space-y-8">
              <Link to="/ourteam" className="bg-none text-[#f1f1ea] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
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
                <span>OUR TEAM</span>
              </Link>
            </div>

            <div className="flex flex-col items-end space-y-8 text-right">
              <span className="bg-none text-[#f1f1ea] text-[14px] -mr-32 px-6 py-6 rounded-full whitespace-nowrap">@VIRAL PARIKH 2024</span>
            </div>
          </div>
              
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Contactus