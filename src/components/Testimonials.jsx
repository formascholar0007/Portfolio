import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      author: "David H. Hansson",
      role: "CTO, Boosting Metabolism",
      avatar: "https://avatars2.githubusercontent.com/u/2741?s=64&v=4",
      url: "https://timerse.com/7-steps-to-boost-your-metabolism/",
    },
    {
      id: 2,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://avatars0.githubusercontent.com/u/810438?s=100",
      url: "https://swift.org/",
    },
    {
      id: 3,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://avatars0.githubusercontent.com/u/810438?s=100",
      url: "https://swift.org/",
    },
    {
      id: 4,
      text: "I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones, crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My brain was tired.",
      author: "Dan Abramov",
      role: "Creator, Java",
      avatar: "https://avatars0.githubusercontent.com/u/810438?s=100",
      url: "https://swift.org/",
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

  return (
    <section className="bg-zinc-900 text-gray-100 sm:px-8 py-20 font-Sora">
      <div className="text-center w-full"></div>
      <div>
        <h2
          className="text-center text-gray-800 text-4xl   max-w-xl  mx-auto lg:text-6xl font-bold leading-tight"
          style={{
            background: "linear-gradient(to right, #c098f8, #42129d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
       What client Says?
        </h2>
        <div className="mb-5 mt-2 mx-auto w-44 h-1 border-b-2 border-purple-500"></div>
        <div className="text-center mx-2 md:mx-0 text-gray-200 font-light">
          Here are what some of our amazing customers are saying ...
        </div>
      </div>
      <div className="relative max-w-screen-xl mt-8 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gradient-to-r from-purple-900 to-gray-900 text-gray-100 sm:rounded-lg shadow-lg">
        <div className="absolute right-0 bottom-0 w-80 h-56 bg-gradient-to-r from-purple-600 to-purple-950 "></div>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative mx-auto mt-8 rounded-lg border-2 shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between"
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
                        {testimonial.role},{" "}
                        <a
                          href={testimonial.url}
                          className="text-purple-500 hover:text-purple-900"
                        >
                          {testimonial.role}
                        </a>
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
