import React, { useState } from "react";
import { FaPlay, FaSearch, FaTimes } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { assets, bannerAssets } from "../assets/assets.js";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for :", searchQuery);
  };

  return (
    <div  id="home"className="relative">
      {/* BACKGROUND */}
      <div className="bg-gradient-to-br from-[#303481] via-[#F5F5F5] to-[#FFF200] text-white py-48 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[##303481] to-[#FFF200] opacity-70" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-8 relative md:pr-8 lg:pr-[76px] text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md">
              We're Here
              <br />
              <span className="text-[#FFF200] bg-gradient-to-r from-[#303481] to-[#FFF200] bg-clip-text">
                SOG Hani
              </span>
            </h1>

            <p className="text-[#303481] text-lg sm:text-xl lg:text-xl font-playfair italic max-w-xl opacity-90 mx-auto md:mx-0">
              Learn to drive safely, master road rules, and become a confident driver with SOG Hani.
            </p>

            {/* SEARCH BAR */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto md:mx-0 group">
              <div className="relative flex items-center shadow-2xl bg-[#F5F5F5] hover:bg-[#D6E6F2] px-3 py-0.5 rounded-xl transition-all duration-300 border-2 border-[#303481] hover:border-[#FFF200] backdrop-blur-sm">
                <div className="pl-6 pr-3 py-4">
                  <FaSearch className="text-[#303481] " />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Discover the news..."
                  className="w-full py-4 pr-6 bg-transparent outline-none placeholder-[#303481] text-lg font-medium tracking-wide"
                />
                <button
                  type="submit"
                  className="mr-4 px-6 py-3 bg-gradient-to-r from-[#303481] to-[#FFF200] rounded-xl font-semibold text-[#F5F5F5] hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-sm hover:shadow-amber-300/20"
                >
                  Search
                </button>
              </div>
            </form>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              <button className="group flex items-center gap-3 bg-[#D6E6F2] hover:bg-[#FFF200] px-6 py-3 rounded-xl transition-all duration-300 border-2 border-[#303481] backdrop-blur-sm">
                <FaDownload className="text-xl group-hover:animate-bounce text-[#303481] " />
                <span className="text-lg text-[#303481]">Download App</span>
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center gap-3 bg-gradient-to-r from-[#303481] to-[#FFF200] hover:from-[#FFF200] hover:to-[#303481] px-6 py-3 rounded-xl transition-all duration-300 border-2 border-[#303481] backdrop-blur-sm"
              >
                <FaPlay className="text-xl group-hover:animate-bounce text-[#FFF200]" />
                <span className="text-lg">Watch Video</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES CONTAINER */}
          <div className="flex-1 relative group mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px]">
            {/* MAIN IMG */}
            <div className="relative rounded-full p-1 bg-gradient-to-br from-[#5c5ee0] via-[#F5F5F5] to-[#FFF200] shadow-2xl z-20 w-[150px] xs:w-[200px] sm:w-[250px] h-[150px] xs:h-[200px] sm:h-[250px] mx-auto ">
              <img
                src={assets.image1}
                alt="Main person"
                className="rounded-full border-4 xs:border-8 border-[#FFF200] w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to--[#FFF200] mix-blend-normal"></div>
              
            {/* ORBITAL IMAGES */}
            {bannerAssets.orbitImages.map((img, index) => {
              const angle = (360 / bannerAssets.orbitImages.length) * index;
              return (
                <div
                  key={index}
                  style={{
                    transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 orbit orbit-delay-${index * 5}
                    w-[80px] xs:w-[100px] sm:w-[150px] h-[80px] xs:h-[100px] sm:h-[150px]`}
                >
                  <img
                    src={img}
                    alt={`Orbiting ${index + 1}`}
                    className="w-full h-full rounded-full border border-[#D6E6F2] shadow-lg bg-transparent p-1 object-cover"
                  />
                </div>
              );
            })}
            </div>

          </div>
        </div>
      </div>

      {/* VIDEO MODAL*/}
      {showVideo &&(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#303481] backdrop-blur-lg p-4">
            <button onClick={()=>setShowVideo(false)} 
            className="absolute top-6 right-6 text-[#FFF200] hover:text-amber-300 text-3xl z-10 transition-all">
                <FaTimes/>
            </button>
            <div className="w-full max-w-4xl mx-auto">
                <video 
                controls autoPlay 
                className="w-full aspect-video object-contain rounded-lg shadow-2xl">
                    <source src={video}  type='video/mp4' className="" />
                </video>
            </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
