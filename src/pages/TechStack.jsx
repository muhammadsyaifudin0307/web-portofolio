import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
import { SiGit } from "react-icons/si";

const TechStack = () => {
  const techStackList = [
    { name: "React JS", icon: <SiReact />, color: "hover:border-blue-400" },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "hover:border-cyan-400",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "hover:border-yellow-400",
    },
    { name: "HTML5", icon: <SiHtml5 />, color: "hover:border-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "hover:border-blue-500" },
    { name: "Git", icon: <SiGit />, color: "hover:border-red-500" },
  ];

  return (
    <div className=" py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-amber-300 font-Poppins text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-zinc-500">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStackList.map((tech, index) => (
            <div
              key={index}
              className={`group bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 ${tech.color}`}>
              <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="text-zinc-400 group-hover:text-white font-medium text-sm transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
