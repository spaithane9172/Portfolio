import React from "react";
import { skillsData } from "../../data/SkillsData";

const Skills = (props) => {
  return (
    <div
      className={`mt-[1rem] ${
        props.activeMenu === "Skills" ? "block" : "hidden"
      } flex flex-wrap w-full md:w-8/10 justify-center overflow-y-auto h-[20rem] scrollbar`}
    >
      {skillsData.map((e, index) => (
        <div
          key={index}
          className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-xl shadow-xl w-[8rem] h-[7rem] flex flex-col justify-center items-center amaranth-regular mr-[1rem] mb-[1rem]"
        >
          <img src={e.photo} alt="" className="w-[2rem] h-[2rem] mb-[0.5rem]" />
          <h1 className="text-gray-400 font-bold">{e.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Skills;
