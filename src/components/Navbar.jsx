import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/GREDX.png";
import { IoCall } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
    setScrolled(currentScrollPos > 10);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <style>
        {`
          .nav-link {
            position: relative;
            display: inline-block;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            margin-top: 5px;
            right: 0;
            background: #8c4ee2;
            transition: width 0.5s ease, right 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
            right: 0;
          }
        `}
      </style>
      <header
        className={`fixed w-full top-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } flex justify-between items-center md:px-1 lg:px-2 font-Sora transition-colors duration-300 ${
          scrolled ? "bg-gray-100 shadow-lg border-gray-100" : "bg-white"
        }`}
      >
        <div className="w-[45%] md:w-[25%]">
          <img src={logo} alt="Logo" className="h-32 md:h-40" />
        </div>

        <nav className="space-x-6 hidden md:flex">
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
            Home
          </a>
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
            Services
          </a>
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
           Work
          </a>
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
            Tech
          </a>
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4 text-white hover:text-black">
          <div className="lg:text-lg text-sm mr-2  rounded-full flex items-center transition ease-in-out delay-100 md:px-8 md:py-4 px-4 py-4 bg-gradient-to-r from-[#8c5be6] to-[#2a1454]">
            <IoCall className="visible" />
            <NavLink to={"/contact"} className="ml-3 font-semibold">
              Get In touch
            </NavLink>
          </div>
        </div>
        {showToggle &&
          (showSidebar ? (
            <HiX
              className="text-2xl  text-purple-400 cursor-pointer md:hidden"
              onClick={toggleSidebar}
              size={40}
            />
          ) : (
            <HiMenuAlt3
              className="text-2xl  text-purple-400 cursor-pointer md:hidden"
              onClick={toggleSidebar}
              size={40}
            />
          ))}
      </header>
      {showSidebar && (
        <div className="fixed top-[128px] inset-x-0 md:inset-auto h-full bg-[#2a1454]  z-50">
          <div className="flex justify-start p-4">
            <nav className="flex flex-col space-y-6 uppercase p-4 font-Sora">
              <NavLink
                to="/"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Services
              </NavLink>
              <NavLink
                to="/works"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Works
              </NavLink>
              <NavLink
                to="/technolgy"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Tech
              </NavLink>
              <NavLink
                to="/testimonials"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white hover:text-purple-400 text-xl"
                onClick={toggleSidebar}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
