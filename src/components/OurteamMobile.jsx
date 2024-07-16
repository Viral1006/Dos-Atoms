import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const translations = ['ml-4', '-ml-14', '-ml-1', '-ml-14', 'translate-x-4', '-translate-x-4'];

const OurteamMobile = () => {
    const teamMembers = [
            {
              name: "JOSEPH RAY",
              designation: "Software Engineer",
              details: "Joseph is a highly skilled software engineer with 5 years of experience in full-stack development.",
              image: "/12.jpeg"
            },
            {
              name: "MICHAEL WALKER",
              designation: "Project Manager",
              details: "Michael has been managing projects efficiently for over 10 years, ensuring timely delivery and client satisfaction.",
              image: "/16.jpeg"
            },
            {
              name: "DIANA CAMPBELL",
              designation: "UX Designer",
              details: "Diana is a creative UX designer with a knack for creating user-friendly interfaces.",
              image: "/14.jpeg"
            },
            {
              name: "LORI HOUSTEN",
              designation: "Data Scientist",
              details: "Lori specializes in data analysis and machine learning, providing valuable insights from complex data.",
              image: "/15.jpeg"
            },
            {
              name: "TERESA FULLER",
              designation: "Marketing Specialist",
              details: "Teresa is a marketing guru with innovative strategies that drive brand success.",
              image: "/13.jpeg"
            }

    ];

    const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="relative h-[115vh] bg-[#f1f1ea] grainy overflow-x-hidden overflow-y-hidden p-8">

      <div className="relative"> 
        <div className='absolute top-[32rem] right-[10rem] w-64 h-64 bg-[#e42f2f] mix-blend-multiply rounded-full filter blur-2xl opacity-60 animate-blob'></div>
        <div className='absolute top-[32rem] right-[6rem] w-64 h-64 bg-[#f3994c] mix-blend-multiply rounded-full filter blur-2xl  opacity-70 animate-blob'></div>
        <div className='absolute top-[34rem] right-[2rem] w-64 h-64 bg-[#939393] mix-blend-multiply rounded-full filter blur-2xl opacity-80 animate-blob' ></div>
      </div>

      <div className="absolute mt-5 left-8 w-full h-[200px] flex flex-col justify-center">
        <h1 className="text-[100px] font-regular text-[#101110] leading-none">OUR TEAM</h1>
      </div>
    
      <div className="absolute mt-60 my-8 w-96 left-20 grid grid-cols-1 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`text-[#70716D] -my-2 text-[35px] hover:text-[#101110] hover:scale-110 font-regular ${translations[index % translations.length]}`}
            onMouseEnter = {() => setHoveredMember(member) }
            onMouseLeave = {() => setHoveredMember(null)}
          >
            {member.name}
          </div>
        ))}
      </div>

      {hoveredMember && (
        <div className="absolute mt-[30rem] my-4 mr-32 flex items-start space-x-8 p-4 w-[40%]">
          <img src={hoveredMember.image} alt={hoveredMember.name} className='w-60 h-72 object-cover mb-4'/>
          <div className="flex flex-col">
            {/* <div className="text-[#101110] text-[30px] font-normal">{hoveredMember.name}</div> */}
            <div className="text-[#939393] text-[20px] font-normal mb-2">{hoveredMember.designation}</div>
            <p className="text-[#101110] text-[16px] font-normal w-40 leading-tight">{hoveredMember.details}</p>
          </div>
        </div>
      )}

    <div className="absolute -bottom-4 left-0 w-full p-8 flex justify-between">
        <div className="flex flex-col items-start mt-96 -ml-12 space-y-8">
          <Link to="/whatwedo" className="bg-none text-[#101110] text-[14px] px-6 py-3 rounded-full flex items-center space-x-2 whitespace-nowrap">
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
            <span>WHAT WE DO</span>
          </Link>
        </div>
  
        <div className="flex flex-col items-end mt-96 space-y-8">
          <Link to="/contactus" className="bg-none text-[#101110] text-[14px] px-6 py-3  rounded-full flex items-center space-x-2">
            <span>CONTACT US</span>
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
  )
}

export default OurteamMobile