import React, { useState } from 'react'
import {inintialNewsData,additionalNewsData} from '../assets/assets.js'
import { FaExchangeAlt, FaExternalLinkAlt, FaEye, FaFire, FaHeart, FaStar } from 'react-icons/fa'
import FloatingParticle from './FloatingParticle.jsx'



const NewsHome = () => {
    const [showAll,setShowAll]=useState(false)
    const newsData=[...inintialNewsData,...additionalNewsData]
  return (
    <section id="news" >
        <div className="  bg-gradient-to-b from-[#303481]  to-[#D6E6F2] text-white py-32 px-4 font-[Poppins]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold  mb-4 transform transition-all bg-gradient-to-r from-[#D6E6F2]  bg-clip-text text-transparent font-[Playfair_Display] italic ">
                    Today's <span className="text-[#FFF200]">News</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed">
                    Stay updated with the latest traffic news.
                </p>
            </div>

            {/* News Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {(showAll ? newsData:newsData.slice(0,4)).map((item,index)=>{
                    return(
                        <div className="relative group bg-[#F5F5F5] rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500
                        hover:shadow-[#FFF200] border-2 border-transparent hover:border-[#303481]  before:absolute before:inset-0 hover:before:opacity-20"
                        key={`${item.id}-${index}`}>
                            <div className="relative h-72 overflow-hidden">
                                
                                <h2 className=" m-2 text-xl font-semibold text-[#303481]">{item.title}</h2>
                                <p className="text-gray-400 m-2  line-clamp-3">{item.description}</p>
                                <a href={item.link} target='_blank' className="group  inline-flex m-2 px-3 py-1 items-center justify-center border-2 border-[#FFF200] hover:border-[#303481]  rounded-4xl  hover:bg-[#D6E6F2] shadow-lg shadow-[#303481]">
                                    <FaExternalLinkAlt className="mr-2 text-[#303481] group-hover:text-[#FFF200]" /> <span className="text-[#303481]">Read More</span>
                                </a>

                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 "/>

                                <div className="absolute  bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full ">

                                <span className="flex items-center gap-2 text-[#F5F5F5]">
                                        <FaEye className=" text-[#F5F5F5]" />
                                        <span className="font-bold">{item.views}</span>
                                </span>

                                    <span className="flex items-center gap-2 text-red-400">
                                        <FaHeart className='text-xl animate-heartbeat'/>
                                        <span className="font-bold">{item.hearts}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-[#303481] transition-all duration-500 ">
                                <div className="opacity-0 group-hover:opacity-100">
                                    <FloatingParticle/>
                                </div>
                            </div>


                        </div>
                    )
                    
                })}
            </div>

            <div className="mt-12 flex justify-center">
                <button onClick={()=>setShowAll(!showAll)} 
                className="flex items-center gap-3 bg-gradient-to-r from-[#303481] to-[#FFF200]
                text-white px-8  py-4 rounded-2xl font-bold text-lg uppercase tracking-wider hover:gap-4 hover:scale-105
                hover:shadow-xl hover:shadow-[#303481] transition-all duration-300 group border-2 border-[#FFF200]  relative overflow-hidden ">
                    <div className="absolute inset-0 bg-gradient-to-r  via-transparent to-[#D6E6F2]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        <FaFire className='text-xl animate-pulse'/>
                        <span className="">{showAll ? 'Show Mess':'Show More'}</span>
                        <div className="h-full w-1 bg-[#303481] absolute right-0 top-0 group-hover:animate-border-pulse "></div>
                    
                </button>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default NewsHome