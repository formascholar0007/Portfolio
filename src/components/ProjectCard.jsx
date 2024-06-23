import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt="Project Image"
        className="w-full h-96 md:h-80 lg:h-[34rem] rounded-lg object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-950 text-white p-4 m-12 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <p className="text-lg">{description}</p>
        <span className="absolute top-8 right-4">
          <MdArrowOutward size={40} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
