import React from "react";
import myPhoto from "../img/myPhoto.jpg";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import { skillsData } from "../data/SkillsData";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 h-[18rem] md:h-[40rem] rounded-full flex justify-center items-center">
        <img
          src={myPhoto}
          alt=""
          className="w-[15rem] md:w-fit h-[15rem] md:h-[27rem] rounded-full shadow-xl border-[2px] border-gray-100"
        />
      </div>
      <div className="md:w-1/2 px-5 md:px-0">
        <p>
          <span className="text-[1.6rem] md:text-[3rem] bungee-inline-regular">
            <span className="text-slate-900">H</span>
            <span className="text-gray-400">i,&#128075;</span>
          </span>
          <br />
          <span className="text-[1.6rem] md:text-[3rem] bungee-inline-regular text-slate-900">
            I'<span className="text-gray-400">m</span> Sachin
            <span className="text-gray-400"> Paithane</span>
          </span>
          <br />
          <p className="text-[1.2rem] md:text-[1.5rem] text-justify text-slate-900 amaranth-regular ">
            A passionate{" "}
            <span className="text-gray-400 font-bold">
              full-stack web developer
            </span>{" "}
            skilled in crafting seamless, efficient, and scalable web
            applications from{" "}
            <span className="text-gray-400 font-bold">front-end design</span> to{" "}
            <span className="text-gray-400 font-bold">
              back-end functionality
            </span>
            .
          </p>
        </p>
        <div className="mt-[1.5rem] md:mt-[1rem]">
          <button className="hover:scale-105 mr-[1rem]">
            <a href="https://www.linkedin.com/in/sachin-paithane/">
              <img
                src={linkedin}
                alt=""
                className="w-[2rem] h-[2rem] shadow-xl"
              />
            </a>
          </button>
          <button className="hover:scale-105">
            <a href="https://github.com/spaithane9172">
              <img
                src={github}
                alt=""
                className="w-[2rem] h-[2rem] shadow-xl"
              />
            </a>
          </button>
        </div>
        <div className="mt-[1rem] md:mt-[3rem] flex">
          <div className="flex  items-center">
            <h1 className="font-bold text-gray-400 text-[1rem] md:text-[1.2rem]">
              Tech Stack
            </h1>
            <div className="h-[1.5rem] w-[2px] bg-gray-400 mx-[0.3rem] md:mx-[1rem]"></div>
          </div>
          <div className="flex justify-center items-center">
            {skillsData.map((e, index) => {
              return (
                <img
                  key={index}
                  src={e.photo}
                  alt=""
                  className="w-[1.3rem] md:w-[2.2rem] h-[1.5rem] md:h-[2.5rem] shadow-xl mx-[0.2rem] md:mx-[0.5rem]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
