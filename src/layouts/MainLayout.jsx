import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="h-screen bg-zinc-950">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
