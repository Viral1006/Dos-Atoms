import React from 'react'
import { Link } from 'react-router-dom'

const ContactusMobile = () => {
  return (
    <div className="relative h-[120vh] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden">
      <div className="relative h-full w-full py-5 px-4 md:px-7">
        <div className="relative h-[110vh] w-full rounded-2xl overflow-hidden">
          <img src='/18.jpg' className='h-[110vh] w-full object-cover ' alt='Contact Background' />
          
          <div className="absolute top-8 left-4 md:left-8 w-full h-[120px] md:h-[200px] flex flex-col justify-center">
            <h1 className="text-[60px] md:text-[120px] font-regular text-[#f1f1ea] leading-none">CONTACT US.</h1>
          </div>
         
          <div className="absolute top-[20%] left-4 md:left-[8%] w-[92%] md:w-[84%] p-4 md:p-8 flex flex-col space-y-8">
            <div className="w-full p-2">
              <h2 className="text-lg md:text-[18px] font-light mb-4 text-[#f1f1ea]">Want to discuss your project?</h2>
              <form className="space-y-4">
                <div>
                  <input
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 text-[#f1f1ea] text-sm md:text-[14px] bg-transparent border-b border-[#4f4f4f] placeholder-[#939393] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 text-[#f1f1ea] text-sm md:text-[14px] bg-transparent border-b border-[#4f4f4f] placeholder-[#939393] focus:outline-none"
                  />
                </div>
                <div>
                  <select
                    id="inquiry"
                    className="w-full p-3 text-[#f1f1ea] text-sm md:text-[14px] bg-transparent border-b border-[#4f4f4f] focus:outline-none"
                  >
                    <option className="bg-black text-[#f1f1ea]">UI/UX</option>
                    <option className="bg-black text-[#f1f1ea]">Web Development</option>
                    <option className="bg-black text-[#f1f1ea]">App Dev</option>
                  </select>
                </div>
                <div className="relative">
                  <svg width="150" height="100" className="absolute left-16 top-0">
                    <ellipse className='' cx="60" cy="30" rx="35" ry="25" stroke="#f1f1ea" fill="none" strokeWidth="1" />
                    <ellipse className='' cx="60" cy="30" rx="40" ry="20" stroke="#f1f1ea" fill="none" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button className="pointer-events-auto text-[#F1F1EA] text-sm md:text-[14px] mt-16 px-4 py-2 rounded">
                      SEND<br/> MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="w-full p-2">
              <div className="mb-8 mt-16">
                <h2 className="text-lg md:text-[18px] mb-2 font-light text-[#f1f1ea]">LOCATION</h2>
                <p className="text-base md:text-[16px] text-[#f1f1ea]">123 Main Street, City, Country</p>
              </div>
              <div className="mb-8">
                <h2 className="text-lg md:text-[18px] font-light mb-2 text-[#f1f1ea]">PHONE</h2>
                <p className="text-base md:text-[16px] text-[#f1f1ea]">+123 456 7890</p>
              </div>
              <div>
                <h2 className="text-lg md:text-[18px] font-light mb-2 text-[#f1f1ea]">EMAIL</h2>
                <p className="text-base md:text-[16px] text-[#f1f1ea]">contact@company.com</p>
              </div>
              <div className="mt-8">
                <h2 className="text-lg md:text-[18px] font-light mb-2 text-[#f1f1ea]">SOCIAL</h2>
                <div className="flex space-x-4 ">
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393]">facebook</a>
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393]">twitter</a>
                  <a href="#" className="text-[#f1f1EA] underline decoration-[#939393]">instagram</a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <div className="absolute -bottom-4 left-4 md:left-0 w-full p-2 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-start space-y-4 mr-40 md:space-y-8">
              <Link to="/ourteam" className="bg-none text-[#101110] text-sm md:text-[14px] px-4 py-2 rounded-full flex items-center space-x-2">
                <svg
                  width="60"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right transform rotate-180"
                  viewBox="0 0 60 24"
                >
                  <line x1="1" y1="12" x2="45" y2="12"></line>
                  <polyline points="38 5 45 12 38 19"></polyline>
                </svg>
                <span>OUR TEAM</span>
              </Link>
            </div>
            <div className="flex flex-col items-end space-y-4 md:space-y-8 text-right">
              <span className="bg-none text-[#101110] text-sm md:text-[14px] ml-20 px-4 py-2 rounded-full">@VIRAL PARIKH 2024</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactusMobile
