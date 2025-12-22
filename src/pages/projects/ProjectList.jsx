import React from "react";
import { Github, Eye } from "lucide-react";

const ProjectList = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      desc: "Membangun platform belanja online dengan fitur cart dan payment gateway.",
      tech: ["React", "Tailwind", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio v1",
      desc: "Project personal pertama menggunakan animasi AOS dan desain minimalis.",
      tech: ["HTML", "CSS", "Javascript"],
      link: "#",
      github: "#",
    },
    {
      title: "Weather App",
      desc: "Aplikasi ramalan cuaca real-time yang mengambil data dari OpenWeather API.",
      tech: ["React", "Axios", "Zod"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className=" py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-amber-300 font-Poppins text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-zinc-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 hidden md:block"></div>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-500">
              {/* Content Container */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="justify-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                  <div className="justify-end">
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors">
                        <span className="text-white font-bold">
                          <Github size={24} />
                        </span>
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors">
                        <span className="text-white font-bold">
                          <Eye size={24} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
