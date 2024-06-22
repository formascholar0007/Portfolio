import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {   FaInstagram ,FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn,FaXTwitter } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r f text-black mt-4 font-Sora">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around gap-20 items-center lg:items-start">
        <div className="lg:w-[55%] text-center lg:text-left ">
          <h1 className="text-5xl font-bold text-zinc-800">GREDX</h1>
          <h2
            className="text-7xl text-wrap font-bold mt-4 leading-[5rem]"
            style={{
              background: "linear-gradient(to right, #8c4ee2, #2d0082)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web Developer + UX Designer
          </h2>

          <p className="mt-6  lg:w-[85%] text-zinc-600 text-xl leading-normal my-6">
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people
          </p>
          <div className="flex items-center gap-8">
            <button className="mt-6 px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition ease-in delay-100">
              Get Started
              <HiOutlineArrowNarrowRight className="inline-block ml-2" />
            </button>
            <div className="flex justify-center lg:justify-start space-x-4 mt-5">
              <a href="#" className="text-purple-600 hover:text-white border hover:bg-purple-600 transition ease-in delay-100 border-purple-600 rounded-full p-2">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-white  hover:bg-purple-600  border border-purple-600 transition ease-in delay-100 rounded-full p-2">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-white  hover:bg-purple-600  border border-purple-600 transition ease-in delay-100 rounded-full p-2">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-white  hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[42%] mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/952/349/non_2x/web-development-programmer-and-code-testing-in-augmented-reality-illustration-vector.jpg"
            className="rounded-lg shadow-lg transform rotate-3 hover:rotate-0 border-2 border-white hover:border-purple-800 transition ease-in-out delay-100"
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className="mt-16 flex justify-around w-full max-w-4xl text-center">
        <div>
          <p className="text-3xl font-bold text-purple-600">14</p>
          <p className="text-zinc-600 300">Years of Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">50+</p>
          <p className="text-zinc-600 300">Projects Completed</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">1.5K</p>
          <p className="text-zinc-600 300">Happy Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">14</p>
          <p className="text-zinc-600 300">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
