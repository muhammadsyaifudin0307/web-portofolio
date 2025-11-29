import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const NavItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Tech Stack",
      path: "/tech-stack",
    },
    {
      name: "Project",
      path: "/project",
    },
  ];

  return (
    <nav className="bg-amber-700">
      <div className="navbar-brand">
        {NavItems.map((item) => (
          <NavLink to={item.path}>{item.name}</NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
