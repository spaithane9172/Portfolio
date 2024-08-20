import React from "react";
import { educationData } from "../../data/EducationData";

const Education = (props) => {
  return (
    <div
      className={`mt-[1rem] ${
        props.activeMenu === "Education" ? "block" : "hidden"
      } w-full md:w-8/10 overflow-y-auto h-[20rem] scrollbar px-[1rem]`}
    >
      {educationData.map((e, index) => (
        <div
          key={index}
          className="border-b-[3px] border-gray-400 mb-[1.5rem] md:mb-[2.5rem] pb-[0.5rem]"
        >
          <h1 className="text-slate-900 font-bold md:text-[1.4rem]">
            {e.year}
          </h1>
          <h1 className="text-gray-400 font-bold md:text-[1.4rem] ">
            {e.course}
          </h1>
          <h1 className="text-slate-900  font-bold md:text-[1.4rem]">
            {e.clg}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Education;
