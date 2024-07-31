import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imageUrl, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block relative group">
      <img
        src={imageUrl}
        alt="Project Image"
        className="w-full h-64 sm:h-72 md:h-80 lg:h-[25rem] rounded-lg object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-950 text-white p-4 md:p-6 lg:p-8 m-4 sm:m-6 md:m-8 lg:m-12 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
        <span className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8">
          <MdArrowOutward size={24} className="sm:size={32} md:size={40}" />
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
