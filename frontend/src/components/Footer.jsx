import React, { useState } from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import {socialIcons} from '../assets/assets.js'


const Footer = () => {
  const navItems=[
    {name:'Home',link:'#home'},
    {name:'News',link:'#news'},
    {name:'About us',link:'#about'},
    {name:'Contact',link:'#contact'},
  ]
  const [email,setEmail]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Thanks for subscribing! We will send updaes to ${email}`);
    setEmail('');

  }
  return (
    <footer className='bg-[#303481] text-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12  ">
          {/* LEFT COLUM */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-[#FFF200]">SOG-HANI</h2>
            <p className="text-[#D6E6F2] text-sm italic">
              When driving meets protecting your rights and knowing your duties. <br  />
              Driving with peace of mind.
            </p>
            <form onSubmit={handleSubmit} action="" className="relative mt-4  group">
              <div className="flex items-center gap-2 mb-2">
                <FaRegEnvelope className='text-[#F5F5F5] animate-pulse'/>
                <span className="font-bold text-[#F5F5F5]">Get Exclusive Uses</span>
              </div>
              <div className="relative ">
                <input type="email"  placeholder="Enter your email" value={email}
                onChange={e=>setEmail(e.target.value)} 
                className="w-full border-2 border-[#D6E6F2] rounded-lg px-4 py-2.5 bg-[#F5F5F5] text-[#303481] focus-outline-none
                focus:border-[#FFF200] focus:ring-4 focus:ring-[#D6E6F2] tranxition-all duration-300  placeholder-[#303481] pr-24"
                required />
                <button type='submit' className="absolute right-1 top-1 bg-gradient-to-tl from-[#303481] via-[#D6E6F2] to-[#FFF200] text-white px-4 py-2  rounded-full
                flex items-center gap-1.5 shadow-lg hover:shadow-[#303481] overflow-hidden transition-all duration-500">
                  <span className="font-bold text-sm tracking-wide transition-transform duration-300  text-[#303481] group-hover:-translate-x-1">Join Now</span>
                  <BiChevronRight className="text-xl transition-transform duration-300 group-hover:animate-spin
                  flex-shrink-0"/>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent
                  via-[#D6E6F2] to-transparent group-hover:translate-x-full transition-transform duration-700"></span>
                </button>
              </div>
            </form>
          </div>
          {/* MIDDLE COLUMN */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#FFF200] pl-3 italic text-[#FFF200]">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navItems.map(item=>(
                  <li key={item.name} className="">
                    <a href={item.link} className="flex items-center hover:text-[#FFF200] transition-all group  hover:pl-2">
                      <BiChevronRight className='mr-2 text-[#FFF200] group-hover:animate-bounce'/>
                      <span className="hover:italic">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* RIGHT CLOUMN*/}
          <div className="flex justify-center md:justify-end">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#FFF200] pl-3 italic text-[#FFF200]">Social Contact</h3>
              <div className="flex space-x-4">
                {socialIcons.map(({icon:Icon,link,color,label},idx)=>(
                  <a  target='_blank' href={link} key={idx}
                   className="text-2xl  text-[#303481] bg-[#F5F5F5] p-3 rounded-full hover:bg-[#FFF200] hover:scale-110
                   transition-all duration-300 relative group" style={{color}}>
                    <Icon className='hover:scale-125 transition-transform'/>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#303481]
                    text-black px-2 py-1  rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {label}
                    </span>
                   </a>
                ))
                }
              </div>
            </div>
          </div>
        </div>

         {/* BOTTOM SECTION */}
          <div className="border-t  border-[#F5F5F5] pt-8 mt-8 text-center">
            <p className="text-[#FFF200] text-lg mb-2 ">
              |
              &copy; {new Date().getFullYear()} SOG-HANI. All rights reserved.
            </p>
            <div className="group inline-block">
              <a href="https://elansariservives.vercel.app" 
              target='_blanck'
              
              className="text-lg bg-gradient-to-r from-[#FFF200] via-[#F5F5F5] to-[#FFF200] bg-clip-text text-transparent hover:text-purple-300 transition-all duration-500">
                Designed by Elansariservices
              </a>
              
              <p  className="text-lg bg-gradient-to-r from-[#FFF200] via-[#F5F5F5] to-[#FFF200] bg-clip-text text-transparent hover:text-purple-300 transition-all duration-500">
               & EL MLIJI Fatima Ezzahra
            </p>
              
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer