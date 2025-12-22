import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full bg-transparent flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
