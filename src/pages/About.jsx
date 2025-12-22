import React from "react";

const About = () => {
  return (
    <div className="min-h-screenflex items-center justify-center px-6 py-20 lg:px-12 pt-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="text-white w-full md:w-3/5 space-y-6 text-center md:text-left">
          <div className="text-amber-300">
            <h1 className="font-Poppins text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              About <span className="text-zinc-500">Me</span>
            </h1>
          </div>

          <div className="space-y-3">
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
            <button className="px-6 py-2 bg-zinc-800 hover:bg-amber-300 hover:text-black transition-all rounded-lg border border-zinc-700">
              Contact Me
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-amber-400/20 rounded-2xl blur-xl group-hover:opacity-40 transition duration-1000"></div>

            <img
              src="https://via.placeholder.com/400"
              alt="Foto Profil"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
