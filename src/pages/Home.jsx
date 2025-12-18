import React from "react";
import { Instagram, Linkedin, Send, Github } from "lucide-react";
import Profil from "../assets/profil.jpg";

const Home = () => {
  const icons = [
    {
      name: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/syaifudiiinn?igsh=MTd2ajJ4Z2V3dTV2Yg==",
    },
    {
      name: "Github",
      icon: <Github />,
      link: "https://github.com/muhammadsyaifudin0307",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/muhammad-syaifudin-20555525a/",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 lg:px-12 pt-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="text-white w-full md:w-3/5 space-y-6 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-amber-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm animate-pulse">
              Welcome to my portfolio
            </h3>
            <h1 className="font-Poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Muhammad <span className="text-zinc-500">Syaifudin</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-light text-zinc-400 italic">
              Junior Frontend Developer
            </h2>
          </div>

          <p className="font-Montserrat text-zinc-400 leading-relaxed max-w-xl text-sm md:text-base mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id culpa
            cupiditate quos laborum repellendus fugit enim, impedit sapiente
            excepturi deleniti illo error.
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <ul className="flex gap-4">
              {icons.map((list) => (
                <li key={list.name}>
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:bg-amber-400 hover:text-black hover:-translate-y-2 transition-all duration-300 shadow-xl">
                    {list.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative group">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div> */}

            <img
              src={Profil}
              alt="Foto Profil"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
