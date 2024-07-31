import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import useIntersectionObserver from "./useIntersectionObserver";
import firstProject from '../assets/firstProject.png';
import secondProject from '../assets/secondProject.png';
import thirdProject from '../assets/thirdProject.png';
import fourthProject from '../assets/fourthProject.png';

const WorksSection = () => {
  const [filter, setFilter] = useState("All");
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const handleFilter = (category) => {
    setFilter(category);
  };

  const projects = [
    {
      imageUrl: firstProject,
      title: "Write Well Book Publisher",
      description: "Book Publisher Website",
      category: "Websites",
      link: "https://writewellbookpublisher.in/"
    },
    {
      imageUrl: thirdProject,
      title: "Dietitian Deepshikha Garg",
      description: "Dietitian Website",
      category: "Logo",
      link: "https://www.dietitiandeepshikhagarg.com/"
    },
    {
      imageUrl: fourthProject,
      title: "Architect",
      description: "Website Related To Architect",
      category: "Websites",
      link: "https://architech-omega.vercel.app/"
    },
    {
      imageUrl: secondProject,
      title: "Article Book Publisher",
      description: "Book Publisher Website",
      category: "UX/UI",
      link: "https://articalbookpublication.com/ "
    },
  ];
  

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div  ref={sectionRef}  className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32 font-Sora">
      <h2
        className={`text-center text-3xl md:text-6xl font-bold text-purple-700 dark:text-purple-400 mb-8 
        ${isVisible ? "animate__animated animate__bounceIn animate__slow" : ""}
        `}
        style={{
          background: "linear-gradient(to right, #c098f8, #42129d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Recent Works
      </h2>
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8 md:mb-10 w-full md:w-[25rem] mx-auto bg-zinc-700 p-1 rounded-full">
        <button
          className={`px-4 md:px-6 py-2 md:py-3 rounded-full ${
            filter === "All"
              ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "Websites"
              ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("Websites")}
        >
          Websites
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "Logo"
              ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("Logo")}
        >
          Logo
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "UX/UI"
              ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("UX/UI")}
        >
          UX/UI
        </button>
      </div>
      <div ref={sectionRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 ${isVisible ? "animate__animated animate__fadeIn animate__slow animate__delay-1s" : ""}`}>
  {filteredProjects.map((project, index) => (
    <ProjectCard
      key={index}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
      link={project.link}
    />
  ))}
</div>

    </div>
  );
};

export default WorksSection;
