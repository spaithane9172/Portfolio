import React, { useState } from "react";
import myPhoto from "../img/myPhotoTransBg.png";
import Experience from "./aboutComponents/Experience";
import Skills from "./aboutComponents/Skills";
import Education from "./aboutComponents/Education";

const About = () => {
  const [activeMenu, setActiveMenu] = useState("Skills");
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="md:w-1/2 h-[20rem] md:h-[40rem] rounded-full flex justify-center items-center">
        <div className="bg-black bg-clip-padding backdrop-filter bg-opacity-40 rounded-xl shadow-xl">
          <img
            src={myPhoto}
            alt=""
            className="w-[15rem] md:w-[25rem] h-[15rem] md:h-[30rem] shadow-xl"
          />
        </div>
      </div>
      <div className="md:w-1/2 px-5 md:px-0 h-full md:h-[40rem] pt-[1rem] md:pt-[4rem] pb-[2rem]">
        <div>
          <p className="text-center md:text-start pb-[1rem] md:p-0">
            <span className="text-[1.6rem] md:text-[3rem] bungee-inline-regular text-slate-900 drop-shadow-xl">
              About Me
            </span>
          </p>
          <p className="text-[1.2rem] md:text-[1.5rem] text-justify text-slate-900 amaranth-regular ">
            My name is <span className="text-gray-400">Sachin Paithane</span> I
            completed my bachelor of{" "}
            <span className="text-gray-400">Computer Engineering</span> degree
            in
            <span className="text-gray-400"> 2023</span> from NBN Sinhgad School
            of Engineering Pune. and I am passionate about{" "}
            <span className="text-gray-400">Web Development</span>.
          </p>
        </div>
        <div className="mt-[2rem] amaranth-regular">
          <div className="w-full flex justify-between border-b-[1px] border-slate-900 pb-2">
            <h1
              className={`font-bold text-gray-400 text-[1.2rem] md:mr-[6rem] cursor-pointer hover:scale-105`}
              onClick={() => {
                setActiveMenu("Skills");
              }}
            >
              Skills
            </h1>
            <h1
              className="font-bold text-gray-400 text-[1.2rem] md:mr-[6rem] cursor-pointer hover:scale-105"
              onClick={() => {
                setActiveMenu("Experience");
              }}
            >
              Experience
            </h1>
            <h1
              className="font-bold text-gray-400 text-[1.2rem] cursor-pointer hover:scale-105"
              onClick={() => {
                setActiveMenu("Education");
              }}
            >
              Education
            </h1>
          </div>
          <div
            className={`h-[3px] bg-yellow-400 duration-500 ${
              activeMenu === "Skills"
                ? "translate-x-0 w-[4rem] md:w-[4.5rem]"
                : activeMenu === "Experience"
                ? "md:translate-x-[17.6rem] translate-x-[5.8rem] w-[5.8rem] md:w-[6.5rem]"
                : activeMenu === "Education"
                ? "md:translate-x-[38.1rem] translate-x-[14.5rem] w-[5.8rem] md:w-[5.5rem]"
                : "translate-x-0"
            }`}
          ></div>
          <div>
            <Experience activeMenu={activeMenu} />
            <Skills activeMenu={activeMenu} />
            <Education activeMenu={activeMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
