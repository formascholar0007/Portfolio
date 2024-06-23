import React from "react";
import ProjectCard from "./ProjectCard"; // Update the path as per your file structure

const WorksSection = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 py-32 font-Sora">
      <h2
        className="text-center text-6xl font-bold text-purple-700 dark:text-purple-400 mb-6"
        style={{
          background: "linear-gradient(to right, #c098f8, #42129d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Recent Works
      </h2>
      <div className="flex justify-center space-x-4 mb-8 w-96 mx-auto bg-zinc-700 p-1 rounded-full">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-950 text-white rounded-full">
          All
        </button>
        <button className="px-4 py-2  text-zinc-700 dark:text-zinc-300 rounded-full">
          Websites
        </button>
        <button className="px-4 py-2 text-zinc-700 dark:text-zinc-300 rounded-full">
          Logo
        </button>
        <button className="px-4 py-2  text-zinc-700 dark:text-zinc-300 rounded-full">
          UX/UI
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20">
        <ProjectCard
          imageUrl="https://bootstrapmade.com/content/templatefiles/PhotoFolio/PhotoFolio-bootstrap-website-template-md.webp"
          title="Deloitte"
          description="Project was about precision and information."
        />
        <ProjectCard
          imageUrl="https://w3layouts.com/wp-content/uploads/2023/10/UI-Portfolio-Website-Template-scaled-1.jpg"
          title="New Age"
          description="Project was about precision and information."
        />
        <ProjectCard
          imageUrl="https://essential-addons.com/wp-content/uploads/2023/12/image-2.jpeg"
          title="New Age"
          description="Project was about precision and information."
        />
        <ProjectCard
          imageUrl="https://essential-addons.com/wp-content/uploads/2024/01/portfolio-tempalte-sites-831.png"
          title="New Age"
          description="Project was about precision and information."
        />
      </div>
    </div>
  );
};

export default WorksSection;
