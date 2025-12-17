import React from "react";

const Home = () => {
  const icons = [
    { name: "Instagram", icon: "", link: "" },
    { name: "Github", icon: "", link: "" },
    {
      name: "LinkedIn",
      icon: "",
      link: "",
    },
    {
      name: "Telegram",
      icon: "",
      link: "",
    },
  ];
  return (
    <div className="p-4">
      <div className="h-screen flex justify-between items-center px-5 py-4">
        <div className="text-white w-1/2">
          <div className="">
            <h1 className="font-Poppins text-3xl uppercase font-extrabold">
              Muhammad Syaifudin
            </h1>
            <h3 className="text-xl font-Bbh-Bartle">
              Junior Frontend Developer
            </h3>
            <p className="font-Montserrat">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id culpa
              cupiditate quos laborum repellendus fugit enim, impedit sapiente
              excepturi deleniti illo error. Commodi nihil dolores animi at
              architecto velit excepturi!
            </p>
          </div>
          <div className="">
            <ul>
              {icons.map((list) => (
                <li key={list.name}>{list.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-white w-1/2 px-2 py-4 bg-amber-400">
          <img src="" alt="Foto Profil" className="w-full h-64 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
