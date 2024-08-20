import React from "react";

const Experience = (props) => {
  return (
    <div
      className={`mt-[1rem] ${
        props.activeMenu === "Experience" ? "block" : "hidden"
      } h-[20rem]`}
    >
      <h1 className="text-slate-900 font-bold text-[1.4rem]">
        Experience : <span className="text-gray-400">Fresher</span>
      </h1>
    </div>
  );
};

export default Experience;
