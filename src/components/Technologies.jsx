import React, { useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver"; // Import the IntersectionObserver hook
import wordpressNoColor from "../assets/wordpress-nocolor.png";
import wordpressColor from "../assets/wordpress-color.png";
import reactNoColor from "../assets/react-nocolor.png";
import reactColor from "../assets/react-color.png";
import jsNoColor from "../assets/Js-nocolor.png";
import jsColor from "../assets/JS-color.png";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const Technologies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const handleMouseEnter = (card) => setHoveredCard(card);
  const handleMouseLeave = () => setHoveredCard(null);

  const cards = [
    {
      name: "WordPress",
      icon: wordpressNoColor,
      hoveredIcon: wordpressColor,
      score: "99%",
    },
    {
      name: "React",
      icon: reactNoColor,
      hoveredIcon: reactColor,
      score: "89%",
    },
    { name: "JavaScript", icon: jsNoColor, hoveredIcon: jsColor, score: "93%" },
  ];

  const iconCards = [
    {
      name: "Next.js",
      icon: <RiNextjsLine size={82} />,
      color: "text-black",
      hoveredColor: "text-white",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={82} />,
      color: "text-black",
      hoveredColor: "text-blue-400",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={82} />,
      color: "text-black",
      hoveredColor: "text-white",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={82} />,
      color: "text-black",
      hoveredColor: "text-green-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={82} />,
      color: "text-black",
      hoveredColor: "text-green-500",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-background text-foreground py-28 lg:px-38 md:px-28 px-2 font-Sora"
    >
      <div className="container mx-auto text-center">
        <h2
          className={`text-center text-4xl md:text-6xl font-bold text-purple-700 dark:text-purple-400 mb-4 ${
            isVisible ? "animate__animated animate__fadeInDown  " : ""
          }`}
          style={{
            background: "linear-gradient(to right, #a361ff, #1e044e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tech at GREDX
        </h2>
        <p
          ref={sectionRef}
          className={`text-muted-foreground md:text-md md:max-w-2xl mx-auto mb-12  ${
            isVisible
              ? "animate__animated animate__bounceIn "
              : ""
          }`}
        >
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              ref={sectionRef}
              key={index}
              className={
                isVisible
                  ? "animate__animated animate__bounceIn animate__slow  animate__delay-1s"
                  : ""
              }
            >
              <div
                className={`bg-card px-6 py-12 rounded-3xl text-gray-500 bg-gray-100 shadow-xl transition duration-500 ease-in-out ${
                  hoveredCard === card.name
                    ? "bg-purple-950 hover:text-purple-500"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(card.name)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredCard === card.name ? card.hoveredIcon : card.icon}
                  alt={`${card.name} logo`}
                  className={`mx-auto h-20 mb-5 transition duration-500 ease-in-out ${
                    hoveredCard === card.name ? "scale-125" : ""
                  }`}
                  style={{ transition: "transform 0.3s ease-in-out" }} // Smooth scaling only for hovered icon
                />
                <p className="text-primary text-2xl font-bold">{card.score}</p>
              </div>
              <p className="text-purple-500 text-xl font-semibold mt-4">
                {card.name}
              </p>
            </div>
          ))}
          {iconCards.map((card, index) => (
            <div
              ref={sectionRef}
              key={index}
              className={
                isVisible
                  ? "animate__animated animate__bounceIn animate__slow  animate__delay-1s"
                  : ""
              }
            >
              <div
                className={`bg-card px-6 flex flex-col items-center py-12 rounded-3xl text-gray-500 bg-gray-100 shadow-xl transition duration-500 ease-in-out ${
                  hoveredCard === card.name
                    ? "bg-purple-950 hover:text-purple-500"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(card.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`mb-4 ${
                    hoveredCard === card.name ? card.hoveredColor : card.color
                  } transition duration-500 ease-in-out hover:scale-125`}
                >
                  {card.icon}
                </div>
                <p className="text-primary text-2xl font-bold">85%</p>
              </div>
              <p className="text-xl mt-5 font-semibold text-purple-500">
                {card.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
