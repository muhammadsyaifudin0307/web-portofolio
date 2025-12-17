import React, { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
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
    <nav className="relative px-8 py-4 bg-black w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-Poppins">
        <div className="col-start-2 text-center z-10">
          <h1 className="font-extrabold">MyPorto</h1>
        </div>
        <div className="md:hidden">
          <Hamburger toggle={setOpen} toggled={isOpen} size={24} />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 md:gap-4">
          {NavItems.map((item) => (
            <Link
              to={item.id}
              key={item.name}
              className="px-2 py-1 rounded font-extrabold text-md">
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute flex flex-col items-center p-4 top-22 w-full right-0 left-0 bg-zinc-400 rounded-lg shadow-xl`}>
          {NavItems.map((item) => (
            <Link
              to={item.id}
              key={item.name}
              className="px-2 py-1 rounded font-extrabold text-md">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
