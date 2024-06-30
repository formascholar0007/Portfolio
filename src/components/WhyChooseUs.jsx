import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { PiDotsNineThin } from "react-icons/pi";
import "animate.css"; // Import animate.css for animations

const WhyChooseUs = () => {
  const [isInView, setIsInView] = useState(false);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Function to check if the element is in view
  const checkInView = () => {
    const element = document.getElementById("why-choose-us");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsInView(rect.top <= window.innerHeight * 0.5); // Adjust the threshold as needed
    }
  };

  // Listen to scroll events and check if the element is in view
  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    return () => window.removeEventListener("scroll", checkInView);
  }, []);

  return (
    <>
      <section id="why-choose-us" className="overflow-hidden pt-20 pb-12 px-6 md:px-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark font-Sora">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className={`py-3 sm:py-4 animate__animated ${isInView ? 'animate__fadeInLeft animate__slow' : ''}`}>
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className={`py-3 sm:py-4 animate__animated ${isInView ? 'animate__fadeInLeft animate__slow animate__delay-2s' : ''}`}>
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className={`relative z-10 my-4 animate__animated ${isInView ? 'animate__fadeInRight animate__slow' : ''}`}>
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute flex -right-16 -bottom-16 z-[-1]">
                      <PiDotsNineThin
                        size={100}
                        className={`text-purple-500 animate__animated ${isInView ? 'animate__bounce animate__slow' : ''}`}
                      />
                      <PiDotsNineThin
                        size={100}
                        className={`text-purple-500 animate__animated ${isInView ? 'animate__bounce animate__slow' : ''}`}
                      />
                    </span>
                    <span className="absolute -right-16 -bottom-16 z-[-1]">
                      <PiDotsNineThin
                        size={100}
                        className={`text-purple-500 animate__animated ${isInView ? 'animate__bounce animate__slow' : ''}`}
                      />
                      <PiDotsNineThin
                        size={100}
                        className={`text-purple-500 animate__animated ${isInView ? 'animate__bounce animate__slow' : ''}`}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span
                  className={`block md:mb-12 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-primary  animate__animated ${isInView ? 'animate__fadeInRight animate__slow' : ''}`}
                  style={{
                    background: "linear-gradient(to right, #a361ff, #1e044e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Why Choose GREDX
                </span>
                <h2 className={`mb-5 md:text-3xl font-semibold text-gray-600 sm:text-[40px]/[48px] animate__animated ${isInView ? 'animate__fadeInUp animate__slow' : ''}`}>
                  Delight Customers with Our Exceptional Services
                </h2>
                <p className={`mb-5 text-base text-body-color dark:text-dark-6 animate__animated ${isInView ? 'animate__fadeInUp animate__slow' : ''}`}>
                  We are dedicated to providing the best experience for our
                  clients. Our services are designed to meet your needs and
                  exceed your expectations. Whether you need assistance with
                  design, development, or support, we are here to help. Let us
                  help you achieve your goals and make your customers happy.
                </p>
                <p className={`mb-5 text-base text-body-color dark:text-dark-6 animate__animated ${isInView ? 'animate__fadeInUp animate__slow' : ''}`}>
                  <strong>Expert Team:</strong> Our team of experts is dedicated
                  to providing top-notch services, from start to finish,
                  ensuring customer satisfaction at every step.
                </p>
                <p className={`mb-5 text-base text-body-color dark:text-dark-6 animate__animated ${isInView ? 'animate__fadeInUp animate__slow' : ''}`}>
                  <strong>Customer-Centric Approach:</strong> With GREDX, you
                  get a partner who understands your needs and works tirelessly
                  to meet them.
                </p>
                <p className={`mb-8 text-base text-body-color dark:text-dark-6 animate__animated ${isInView ? 'animate__fadeInUp animate__slow' : ''}`}>
                  <strong>Reliable and Efficient:</strong> Choose GREDX for
                  reliable, efficient, and top-quality services that make a
                  difference.
                </p>
                <NavLink
                  to="#contact"
                  onClick={() => smoothScrollTo("contact")}
                  className="inline-flex items-center gap-3 justify-center py-5 px-8 hover:text-black transition ease-in-out delay-100 font-medium text-xl text-center text-white bg-gradient-to-r from-[#8c5be6] to-[#2a1454] rounded-lg bg-primary hover:bg-opacity-90"
                >
                  <IoCall className="visible" size={24} />
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
