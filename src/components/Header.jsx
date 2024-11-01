import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"; // Import the up arrow icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutUsDropdown = () => {
    setAboutUsOpen(!aboutUsOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white bg-opacity-5 z-50 py-4 px-8 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-filter backdrop-blur-lg" : ""
      }`}
    >
      <div className="flex px-5 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-2">
          <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-700">
            WHISPER
          </h1>
          <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-cyan-500">
            TECHNOLOGY
          </h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-textColor2 text-2xl">
            {isOpen ? <AiOutlineClose className="text-white ml-6" /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Navigation in the center for desktop */}
        <div className="hidden md:flex flex-col gap-12 md:flex-row md:flex-1 md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <nav className="flex flex-col gap-10 md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-lg">
            <div className="relative">
              <button
                onClick={toggleAboutUsDropdown}
                className=" flex items-center gap-2 focus:outline-none hover:text-gray-500"
              >
                Company
                {aboutUsOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {/* Toggle arrow direction */}
              </button>
              {aboutUsOpen && (
                <div className="absolute bg-white text-black shadow-lg mt-2 rounded-md w-80">
                  <Link to="/history" className="block px-4 py-2 hover:bg-gray-200">
                    History
                  </Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-200">
                    Team
                  </Link>
                  <Link to="/corevalues" className="block px-4 py-2 hover:bg-gray-200">
                    Core Values
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className=" flex items-center gap-2 focus:outline-none hover:text-gray-500"
              >
                Services
                {servicesOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {/* Toggle arrow direction */}
              </button>
              {servicesOpen && (
                <div className="absolute bg-white text-black shadow-lg mt-2 rounded-md w-80">
                  <Link to="/whatwedo" className="block px-4 py-2 hover:bg-gray-200">
                    What we do
                  </Link>
                  <Link to="/portfolio" className="block px-4 py-2 hover:bg-gray-200">
                    Products
                  </Link>
                </div>
              )}
            </div>
            <Link to="/clients" className=" hover:text-gray-500">
              Clients
            </Link>
            <Link to="/blog" className=" hover:text-gray-500">
              Blog
            </Link>
            <Link to="/contact" className=" hover:text-gray-500">
              Contact
            </Link>
          </nav>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="text-2xl p-4">
            <AiOutlineClose />
          </button>
          <nav className="flex flex-col p-4 space-y-6 text-lg">
            <div className="relative">
              <button
                onClick={toggleAboutUsDropdown}
                className="text-white  flex items-center gap-2 focus:outline-none hover:text-gray-500"
              >
                About Us
                {aboutUsOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {/* Toggle arrow direction */}
              </button>
              {aboutUsOpen && (
                <div className="bg-gray-800 mt-2 rounded-md">
                  <Link to="/history" className="block px-4 py-2 hover:bg-gray-600">
                    History
                  </Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-600">
                    Team
                  </Link>
                  <Link to="/corevalues" className="block px-4 py-2 hover:bg-gray-600">
                    Core Values
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-500"
              >
                Services
                {servicesOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {/* Toggle arrow direction */}
              </button>
              {servicesOpen && (
                <div className="bg-gray-800 mt-2 rounded-md">
                  <Link to="/whatwedo" className="block px-4 py-2 hover:bg-gray-600">
                    What we do
                  </Link>
                  <Link to="/portfolio" className="block px-4 py-2 hover:bg-gray-600">
                    Portfolio
                  </Link>
                </div>
              )}
            </div>
            <Link to="/clients" className="text-white hover:text-gray-500">
              Clients
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-500">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
