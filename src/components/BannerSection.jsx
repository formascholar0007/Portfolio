import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import MetricsSection from "./MetricsSection";

const BannerSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r text-black font-Sora px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around gap-10 lg:gap-20 items-center lg:items-start">
        <div className="lg:w-[42%] mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/952/349/non_2x/web-development-programmer-and-code-testing-in-augmented-reality-illustration-vector.jpg"
            className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 border-2 border-white hover:border-purple-800 transition ease-in-out delay-100 hover:shadow-purple-600"
            alt="Profile Picture"
          />
        </div>
        <div className="lg:w-[55%] text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 sm:mt-6 lg:mt-8 font-bold text-zinc-800">
            GREDX
          </h1>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-wrap font-bold mt-2 sm:mt-4 lg:mt-6 leading-tight lg:leading-[4.6rem]"
            style={{
              background: "linear-gradient(to right, #8c4ee2, #2d0082)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web Development + Logo Design
          </h2>
          <p className="mt-4 sm:mt-6 lg:mt-8 lg:w-[85%] text-zinc-600 text-lg sm:text-xl leading-relaxed sm:leading-normal my-4 sm:my-6">
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people.
          </p>
          <div className="flex flex-col sm:flex-row items-center md:justify-center lg:justify-start gap-4 sm:gap-8">
            <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition ease-in delay-100">
              Get Started
              <HiOutlineArrowNarrowRight className="inline-block ml-2" />
            </button>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4 sm:mt-5">
              <a
                href="#"
                className="text-purple-600 hover:text-white border hover:bg-purple-600 transition ease-in delay-100 border-purple-600 rounded-full p-2"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MetricsSection />
    </div>
  );
};

export default BannerSection;
