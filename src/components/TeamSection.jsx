// TeamSection.js

import React from "react";
import Slider from "react-slick";
import { FaLinkedin, FaFacebook, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import useIntersectionObserver from "./useIntersectionObserver";
import "animate.css";

const teamMembers = [
  {
    name: "H. Alexander Anna",
    position: "Managing Director",
    image:
      "https://www.absbio.com/hubfs/Successful%20smiling%20young%20male%20job%20applicant%20holding%20a%20blue%20file%20with%20his%20curriculum%20vitae%20posing%20in%20front%20of%20his%20new%20work%20colleagues%20or%20business%20team.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Elizabeth Joseph",
    position: "Managing Director",
    image: "https://fekrait.com/uploads/topics/16750304198773.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Benjamin Evelyn",
    position: "Designer",
    image:
      "https://images.blog.airmason.com/wp-content/uploads/2023/10/Which-is-Correct-A-Employee-or-An-Employee-Exploring-the-Difference.png",
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots-class",
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="text-black md:py-28 py-12 lg:px-16 font-Sora"
    >
      <div className="container mx-auto">
        <h2
          className={`text-4xl lg:text-6xl font-bold mb-6 text-center ${
            isVisible ? "animate__animated animate__fadeIn animate__slow" : ""
          }`}
          style={{
            background: "linear-gradient(to right, #c098f8, #42129d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Special Team Member
        </h2>
        <p
          className={`text-center md:text-md md:max-w-5xl mx-auto px-4 mb-12 ${
            isVisible
              ? "animate__animated animate__fadeIn animate__slow  animate__delay-1s"
              : ""
          }`}
        >
          At GREDX, our strength lies in our people. Our team is a dynamic blend
          of creative minds and technical experts, all driven by a shared
          passion for innovation and excellence. Get to know the professionals
          who are dedicated to turning your ideas into reality.
        </p>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              ref={sectionRef}
              key={index}
              className={`p-4 ${
                isVisible
                  ? "animate__animated animate__fadeIn animate__slow  animate__delay-1s"
                  : ""
              }`}
            >
              <div className="bg-gray-50 text-purple-600 rounded overflow-hidden shadow-lg relative group px-5 py-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover rounded"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-500">{member.position}</p>
                    </div>
                    <div className="relative ">
                      <FaShareAlt
                        className="text-purple-600 group-hover:text-gray-50"
                        size={22}
                      />
                      <div className="absolute bottom-full w-full flex flex-col bg-gray-100 rounded px-5 py-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook
                            className="text-gray-600 my-2 hover:text-purple-600"
                            size={22}
                          />
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaXTwitter
                            className="text-gray-600 my-2 hover:text-purple-600"
                            size={22}
                          />
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin
                            className="text-gray-600 my-2 hover:text-purple-600"
                            size={22}
                          />
                        </a>
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaSquareInstagram
                            className="text-gray-600 my-2 hover:text-purple-600"
                            size={22}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .custom-dots-class li button:before {
          color: #8c4ee2;
          border: 2px solid #8c4ee2;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
