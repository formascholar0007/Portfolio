import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/GREDX.png";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex justify-around items-center  px-8 py-6 border-gray-200  font-Sora">
      <div>
        <img src={logo} alt="Logo" className="h-28" />
      </div>
      <nav className="space-x-6">
        <a
          href="#"
          className="text-black  text-xl hover:text-[#68b347]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-black text-xl hover:text-[#68b347]"
        >
          About
        </a>
        <a
          href="#"
          className="text-black text-xl hover:text-[#68b347]"
        >
          Services
        </a>
        <a
          href="#"
          className="text-black text-xl hover:text-[#68b347]"
        >
          Pages
        </a>
        <a
          href="#"
          className="text-black text-xl hover:text-[#68b347]"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-black text-xl hover:text-[#68b347]"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-4 text-white hover:text-black">
        <div className="md:text-md mr-12 rounded-full flex items-center  transition ease-in-out delay-100 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-900">
          <IoCall />
          <NavLink to={"/contact"} className="ml-3 font-semibold">Get In touch</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
