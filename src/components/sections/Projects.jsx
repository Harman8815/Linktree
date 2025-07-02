import React from "react";
import ProjectCard from "../card/ProjectCard";
import { frontendProjects, fullstackProjects } from "../../store/projectData";

const Projects = ({ darkBg }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-14  px-4 max-w-[1600px] mx-auto py-8">
      {/* Frontend Column */}
      <div
        className={`relative w-full md:w-1/2 p-6 rounded-xl overflow-hidden shadow-2xl ring-1 transition
        ${
          darkBg
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ring-gray-700/50'
            : 'bg-gradient-to-br from-blue-100 via-white to-purple-100 ring-gray-300/30'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center">
          <div
            className={`absolute w-64 h-64 rounded-full border-2 animate-ping opacity-20 
            ${darkBg ? 'border-blue-900' : 'border-blue-300'}`}
          ></div>
          <div
            className={`absolute w-40 h-40 rounded-full border-2 animate-pulse opacity-10 
            ${darkBg ? 'border-purple-800' : 'border-purple-300'}`}
          ></div>
        </div>

        <h2 className={`text-center text-2xl font-bold mb-6 ${darkBg ? 'text-white' : 'text-gray-800'}`}>
          Frontend Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-1">
          {frontendProjects.map((proj, index) => (
            <ProjectCard key={index} {...proj} darkBg={darkBg} />
          ))}
        </div>
      </div>

      {/* Fullstack Column */}
      <div
        className={`relative w-full md:w-1/2 p-6 rounded-xl overflow-hidden shadow-2xl ring-1 transition
        ${
          darkBg
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ring-gray-700/50'
            : 'bg-gradient-to-br from-blue-100 via-white to-purple-100 ring-gray-300/30'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center">
          <div
            className={`absolute w-64 h-64 rounded-full border-2 animate-ping opacity-20 
            ${darkBg ? 'border-blue-900' : 'border-blue-300'}`}
          ></div>
          <div
            className={`absolute w-40 h-40 rounded-full border-2 animate-pulse opacity-10 
            ${darkBg ? 'border-purple-800' : 'border-purple-300'}`}
          ></div>
        </div>

        <h2 className={`text-center text-2xl font-bold mb-6 ${darkBg ? 'text-white' : 'text-gray-800'}`}>
          Fullstack Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-1">
          {fullstackProjects.map((proj, index) => (
            <ProjectCard key={index} {...proj} darkBg={darkBg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

