import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/GREDX.png";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
    setScrolled(currentScrollPos > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
        } flex justify-around items-center px-8 py-3 font-Sora transition-colors duration-300 ${
          scrolled ? "bg-gray-100 shadow-lg border-gray-100" : "bg-white"
        }`}
      >
        <div>
          <img src={logo} alt="Logo" className="h-28" />
        </div>
        <nav className="space-x-6">
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            Home
          </a>
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            About
          </a>
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            Services
          </a>
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            Pages
          </a>
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            Projects
          </a>
          <a href="#" className="nav-link text-black text-xl hover:text-purple-600">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4 text-white hover:text-black">
          <div className="md:text-md mr-12 rounded-full flex items-center transition ease-in-out delay-100 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-900">
            <IoCall />
            <NavLink to={"/contact"} className="ml-3 font-semibold">
              Get In touch
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
