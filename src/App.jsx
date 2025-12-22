import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import MainLayout from "./layouts/MainLayout";
import ProjectList from "./pages/projects/ProjectList";
import ProjectDetail from "./pages/projects/ProjectDetail";
import NotFound from "./pages/NotFound";
import BackgroundLayout from "./layouts/BackgroundLayout";
import Layout from "./layouts/Layout";
function App() {
  return (
    <BackgroundLayout>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainLayout />} />
        </Route>
      </Routes>
    </BackgroundLayout>
  );
}

export default App;
