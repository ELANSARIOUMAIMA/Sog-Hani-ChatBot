import React, { useState, useRef, useEffect, useContext } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCarRear, FaNewspaper } from "react-icons/fa6";
import { FiHome, FiStar, FiPhone, FiLogOut, FiKey } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/loginPage";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mettre à jour login modal + auth quand le path change
  useEffect(() => {
    setShowLoginModal(location.pathname === "/loginPage");
    setToken(Boolean(localStorage.getItem("token")));
  }, [location]);

  const handleLoginSuccess = () => {
    localStorage.setItem("token", JSON.stringify({ loggedIn: true }));
    setToken(true);
    navigate("/");
  };

  const handleLogout = () => {
    setToken(false)
    localStorage.removeItem("token");
    
  };

  // Bouton Desktop Auth
  const renderDesktopAuthButton = () => {
    return token ? (
      <button
        onClick={handleLogout}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-[#D6E6F2] to-[#FFF200] text-[#303481] rounded-2xl font-bold hover:shadow-lg hover:shadow-[#D6E6F2] transition-all
        transform hover:scale-[1.02] border-2 border-[#303481] flex items-center space-x-2
        shadow-md shadow-[#303481] text-xs md:text-sm lg:text-sm"
      >
        <FiLogOut className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Logout</span>
      </button>
    ) : (
      <button
        onClick={() => navigate("/loginPage")}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-[#D6E6F2] to-[#FFF200] text-[#303481] rounded-2xl font-bold hover:shadow-lg hover:shadow-[#D6E6F2] transition-all
        transform hover:scale-[1.02] border-2 border-[#303481] flex items-center space-x-2
        shadow-md shadow-[#303481] text-xs md:text-sm lg:text-sm"
      >
        <FiKey className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Login</span>
      </button>
    );
  };

  // Bouton Mobile Auth
  const renderMobileAuthButton = () => {
    return token ? (
      
      <>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-gradient-to-br from-[#D6E6F2] to-[#FFF200] 
        text-[#2D1B0E] rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm"
        >
          <FiLogOut className="text-base md:text-lg lg:text-lg" />
          <span className="text-shadow">Logout</span>
        </button>

      </>



    ) : (
      <button
        onClick={() => {
          navigate("/loginPage");
          setIsOpen(false);
        }}
        className="w-full px-4 py-3 bg-gradient-to-br from-[#D6E6F2] to-[#FFF200] 
        text-[#2D1B0E] rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm"
      >
        <FiKey className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Login</span>
      </button>
    );
  };

  const links = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "News", href: "#news", icon: <FaNewspaper /> },
    { name: "About", href: "#about", icon: <FiStar /> },
    { name: "Contact", href: "#contact", icon: <FiPhone /> },
  ];

  const audioRef = useRef(null);

  // Fonction pour jouer le son au hover
  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      audioRef.current.play().catch((e) => console.log(e));
    }
  };



  return (


    <nav

      className={`fixed  bg-[#F5F5F5] w-full z-50 transition-all duration-300 ${isScrolled
          ? "py-2 bg-white/80 backdrop-blur-md shadow-md"
          : "py-1 bg-transparent"
        }`}

      role="navigation"
      aria-label="Main navigation"
    >
      {/* MAIN NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 relative">

        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 relative">
            <div className="absolute -inset-4 bg-[#303481] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaCarRear className="text-6xl md:text-4xl lg:text-5xl text-[#303481] transition-all group-hover:rotate-12 group-hover:text-[#FFF200] hover:drop-shadow-[0_0_15px_rgba(255,191,0,0.8)]" />
            <div className="flex flex-col items-start">
              <a
                href="#home"
                className="flex items-center text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#303481] to-[#FFF200] bg-clip-text text-transparent font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
              >
                <span className="bg-gradient-to-r from-[#303481] to-[#FFF200] bg-clip-text text-6xl">
                  S
                </span>
                <GiSteeringWheel
                  className="mx-1 text-[#FFF200] transition-transform duration-700 hover:rotate-[720deg] cursor-pointer"
                  size={48}
                  onMouseEnter={handleHover}
                />
                <span className="bg-gradient-to-r from-[#303481] to-[#FFF200] bg-clip-text text-6xl">
                  G-HANI
                </span>
              </a>
              <div className="h-[3px] bg-gradient-to-r from-[#303481] via-[#D6E6F2]  to-[#FFF200] w-full mt-1 shadow-[0_2px_5px] shadow-[#303481]">
                <audio
                  ref={audioRef}
                  src="/sounds/carHorn.mp3"
                  preload="auto"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-1 justify-end">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group px-3 lg:px-4 py-2 lg:py-3 text-sm md:text-[15px] 
                          lg:text-base relative transition-all duration-300 flex items-center 
                        hover:bg-[#F5F5F5] rounded-3xl border-2 border-[#303481] 
                        hover:border-[#FFF200] shadow-md shadow-[#303481]"

              >
                <span className="mr-2 text-[#303481] transition-all">
                  {link.icon}
                </span>
                <span className="text-[#303481] hover:text-[#FFF200] relative   ">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-[#303481] transition-all duration-300 w-0  group-hover:w-full "></span>
                </span>
              </a>
            ))}
            {renderDesktopAuthButton()}
          </div>

          {/* MOBILE NAV BUTTON */}
          <div className="md:hidden flex items-center mr-2">
            <button
              aria-label="Toggle menu"
              className="text-[#303481] hover:text-[#FFF200] focus:outline-none transition-all p-2 rounded-xl border-2 border-[#303481] hover:border-[#FFF200] relative shadow-md shadow-[#303481]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="space-y-2 relative">
                <span className={`block w-6 h-[2px] bg-current transition-all ${isOpen ? "rotate-45 translate-y-[12px]" : ""}`} />
                <span className={`block w-6 h-[2px] bg-current ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-[2px] bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t-4 border-[#303481] relative shadow-lg shadow-amber-900/30 w-full">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group px-3 lg:px-4 py-2 lg:py-3 text-sm md:text-[15px] 
                            lg:text-base relative transition-all duration-300 flex items-center 
                          hover:bg-[#F5F5F5] rounded-3xl border-2 border-[#303481] 
                          hover:border-[#FFF200] shadow-md shadow-[#303481]"

              >
                <span className="mr-3  text-[#303481] transition-all">{link.icon}</span>
                <span className="text-[#303481] hover:text-[#FFF200] relative   ">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-[#303481]transition-all duration-300 w-0  group-hover:w-full "></span>
                </span>
              </a>
            ))}
            {renderMobileAuthButton()}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-[#F5F5F5] flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#303481] to-[#FFF200] rounded-xl p-6 w-full max-w-[480px] relative border-4 border-[#303481] shadow-[0_0_30px] shadow-[#FFF200]">
            <button
              onClick={() => navigate("/")}
              className="absolute top-2 right-2 text-[#303481] hover:text-[FFF200] text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold bg-gradient-to-r text-[#FFF200]   mb-4 text-center">
              SOG-HANI
            </h2>
            <Login
              onLoginSuccess={handleLoginSuccess}
              onClose={() => navigate("/")}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
