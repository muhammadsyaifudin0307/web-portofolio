import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import MainLayout from "./layouts/MainLayout";
import ProjectList from "./pages/projects/ProjectList";
import ProjectDetail from "./pages/projects/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tech-stack" element={<TechStack />} />

        <Route path="project" element={<ProjectList />} />
        <Route path="project/:slug" element={<ProjectDetail />} />

        {/* INI YANG MENANGKAP SEMUA YANG GAGAL */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="tech-stack" element={<TechStack />} />
    //     {/* Project Page */}
    //     <Route path="project" element={<ProjectList />} />
    //     <Route path="project/:slug" element={<ProjectDetail />} />
    //     {/* NotFound Page */}
    //     <Route path="*" element={<NotFound />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
