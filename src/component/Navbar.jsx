import React, { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const NavItems = [
    {
      name: "Home",
      id: "/",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Tech Stack",
      id: "tech-stack",
    },
    {
      name: "Project",
      id: "project",
    },
  ];
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl z-[100] px-6 py-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-Poppins relative">
        <div className="group cursor-pointer z-[110]">
          <h1 className="text-2xl font-black tracking-tighter transition-all duration-300 group-hover:text-amber-400">
            MSY
            <span className="text-amber-400 group-hover:text-white transition-colors">
              FDN
            </span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NavItems.map((item) => (
            <Link
              membuat
              scroll
              l
              key={item.name}
              to={item.id}
              spy={true}
              smooth={true}
              className="relative text-sm font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors duration-300 group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-amber-400 transition-all transform hover:scale-105 active:scale-95">
            LET'S TALK
          </button>
        </div>

        <div className="md:hidden z-[110]">
          <Hamburger
            toggle={setOpen}
            toggled={isOpen}
            size={20}
            color={isOpen ? "#fbbf24" : "#ffffff"}
          />
        </div>

        <div
          className={`
        fixed inset-0 h-screen w-screen bg-black flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden z-[105]
        ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }
      `}>
          {NavItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.id}
              smooth={true}
              spy={true}
              onClick={() => setOpen(false)}
              className={`text-3xl font-bold tracking-tighter hover:text-amber-400 transition-all duration-300 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
