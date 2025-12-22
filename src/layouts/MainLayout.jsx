import { Element } from "react-scroll";
import Hero from "../component/Hero";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
import Project from "../pages/projects/ProjectList";

const MainLayout = () => {
  const listPage = [
    {
      name: "hero",
      list: <Hero />,
    },
    {
      name: "about",
      list: <About />,
    },
    {
      name: "tech-stack",
      list: <TechStack />,
    },
    {
      name: "project",
      list: <Project />,
    },
  ];

  return (
    <div>
      {listPage.map((list, index) => (
        <Element key={index} name={list.name}>
          {list.list}
        </Element>
      ))}
    </div>
  );
};

export default MainLayout;
