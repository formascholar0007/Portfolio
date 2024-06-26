import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; 

const WorksSection = () => {
  const [filter, setFilter] = useState("All");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const projects = [
    {
      imageUrl: "https://bootstrapmade.com/content/templatefiles/PhotoFolio/PhotoFolio-bootstrap-website-template-md.webp",
      title: "Deloitte",
      description: "Project was about precision and information.",
      category: "Websites",
    },
    {
      imageUrl: "https://w3layouts.com/wp-content/uploads/2023/10/UI-Portfolio-Website-Template-scaled-1.jpg",
      title: "New Age",
      description: "Project was about precision and information.",
      category: "Logo",
    },
    {
      imageUrl: "https://essential-addons.com/wp-content/uploads/2023/12/image-2.jpeg",
      title: "New Age",
      description: "Project was about precision and information.",
      category: "Websites",
    },
    {
      imageUrl: "https://essential-addons.com/wp-content/uploads/2024/01/portfolio-tempalte-sites-831.png",
      title: "New Age",
      description: "Project was about precision and information.",
      category: "UX/UI",
    },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32 font-Sora">
      <h2
        className="text-center text-3xl md:text-6xl font-bold text-purple-700 dark:text-purple-400 mb-8"
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
            filter === "All" ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white" : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "Websites" ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white" : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("Websites")}
        >
          Websites
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "Logo" ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white" : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("Logo")}
        >
          Logo
        </button>
        <button
          className={`px-4 md:px-4 py-2 md:py-2 rounded-full ${
            filter === "UX/UI" ? "bg-gradient-to-r from-purple-500 to-purple-950 text-white" : "text-zinc-700 dark:text-zinc-300"
          }`}
          onClick={() => handleFilter("UX/UI")}
        >
          UX/UI
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} imageUrl={project.imageUrl} title={project.title} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
