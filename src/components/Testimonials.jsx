import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIntersectionObserver from "./useIntersectionObserver";
import "animate.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#863af1",
        borderRadius: "50%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#8c4be7",
        borderRadius: "50%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    />
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dt. Deepshikha Garg",
      role: "distinguished dietician",
      avatar: "https://cdn-icons-png.flaticon.com/128/17446/17446833.png",
    },
    {
      id: 2,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://cdn-icons-png.flaticon.com/128/17446/17446833.png",
    },
    {
      id: 3,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://cdn-icons-png.flaticon.com/128/17446/17446833.png",
    },
    {
      id: 4,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://cdn-icons-png.flaticon.com/128/17446/17446833.png",
    },
  ];

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots-class",
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className={`bg-zinc-900 text-gray-100 sm:px-8 py-20 font-Sora ${
        isVisible ? "animate__animated animate__fadeIn" : ""
      }`}
    >
      <div className="text-center w-full"></div>
      <div>
        <h2
          ref={sectionRef}
          className={`text-center text-gray-800 text-4xl max-w-xl mx-auto lg:text-6xl font-bold leading-tight ${
            isVisible
              ? "animate__animated animate__fadeIn animate__slow animate__delay-1s"
              : ""
          }`}
          style={{
            background: "linear-gradient(to right, #c098f8, #42129d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What client Says?
        </h2>
        <div
          ref={sectionRef}
          className={`mb-5 mt-2 mx-auto w-44 h-1 border-b-2 border-purple-500 ${
            isVisible
              ? "animate__animated animate__fadeIn animate__slow animate__delay-2s"
              : ""
          }`}
        ></div>
        <div
          ref={sectionRef}
          className={`text-center mx-2 md:mx-0 text-gray-200 font-light ${
            isVisible
              ? "animate__animated animate__fadeIn animate__slow animate__delay-2s"
              : ""
          }`}
        >
          Here are what some of our amazing customers are saying ...
        </div>
      </div>
      <div className="relative max-w-screen-xl mt-8 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gradient-to-r from-purple-900 to-gray-900 text-gray-100 sm:rounded-lg shadow-lg">
        <div className="absolute right-0 bottom-0 w-80 h-56 bg-gradient-to-r from-purple-600 to-purple-950"></div>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div
                ref={sectionRef}
                key={testimonial.id}
                className={`relative mx-auto mt-8 rounded-lg border-2 shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between ${
                  isVisible
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                <div className="-ml-4">
                  <svg
                    className="w-8 opacity-25 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                  >
                    <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                  </svg>
                </div>
                <div className="mt-2">{testimonial.text}</div>
                <div>
                  <div className="mx-auto w-full border border-gray-300 my-8"></div>
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-12 h-12 rounded-full border-2 border-purple-400"
                        src={testimonial.avatar}
                        alt="Avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {testimonial.role}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .custom-dots-class li button:before {
          color: #8c4ee2;
          border: 2px solid #8c4ee2;
        }
        .custom-dots-class li.slick-active button:before {
          color: #ff00ff;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
