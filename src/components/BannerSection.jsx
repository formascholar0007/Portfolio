import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import MetricsSection from "./MetricsSection";
import "animate.css";

const BannerSection = () => {
  const textOptions = ["App Development", "Logo Design", "UI/UX Design"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [textOptions.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r text-black font-Sora px-4 sm:px-6 lg:px-8 md:py-20 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around gap-10 lg:gap-20 items-center lg:items-start">
        <div className="lg:w-[42%] mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end order-1 lg:order-2 animate__animated animate__bounceIn animate__slow animate__delay-1s">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-web-developers_23-2148817995.jpg?t=st=1722435420~exp=1722439020~hmac=ed983b4ea9e2b191711f1ac012e5fcf0b172f1286f359f39dc8c519b28f88080&w=740"
            className=" rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 border-2 border-white hover:border-purple-800 transition ease-in-out delay-100 hover:shadow-purple-600 "
            alt="Profile Picture"
          />
        </div>
        <div className="lg:w-[55%] text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 sm:mt-6 lg:mt-8 font-bold text-zinc-800 animate__animated animate__slideInLeft animate__slow animate__delay-1s">
            GREDX
          </h1>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-wrap font-bold mt-2 sm:mt-4 lg:mt-6 leading-tight lg:leading-[4.6rem] animate__animated animate__fadeIn animate__slow "
            style={{
              background: "linear-gradient(to right, #8c4ee2, #2d0082)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web development + <span>{textOptions[currentTextIndex]}</span>
          </h2>
          <p className="mt-4 sm:mt-6 lg:mt-8 lg:w-[85%] text-zinc-600 text-lg sm:text-xl leading-relaxed sm:leading-normal my-4 sm:my-6 animate__animated animate__bounceIn animate__slow">
            At GREDX, we transform ideas into exceptional digital experiences.
            Whether you're looking to develop a cutting-edge web application, an
            innovative mobile app, or a captivating logo, we provide end-to-end
            solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center md:justify-center lg:justify-start gap-4 sm:gap-8">
            <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition ease-in delay-100 animate__animated animate__bounceIn animate__slow  animate__delay-1s">
              Get Started
              <HiOutlineArrowNarrowRight className="inline-block ml-2" />
            </button>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4 sm:mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=61561366654389"
                target={"_blank"}
                className="text-purple-600 hover:text-white border hover:bg-purple-600 transition ease-in delay-100 border-purple-600 rounded-full p-2  animate__animated animate__bounceIn animate__slow  animate__delay-1s"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2  animate__animated animate__bounceIn animate__slow  animate__delay-1s"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/gred__x?utm_source=qr&igsh=MW9nZHAyY3ZqcDB4ZA==" 
                target={"_blank"}
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2  animate__animated animate__bounceIn animate__slow  animate__delay-2s"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 transition ease-in delay-100 rounded-full p-2  animate__animated animate__bounceIn animate__slow  animate__delay-2s"
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
