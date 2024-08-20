import React from "react";
import GitHub from "../../img/github.png";
import ProjectIcon from "../../img/project.jpg";

const projectCard = (props) => {
  return (
    <div className="mt-[1rem] mx-[0.2rem] w-[28rem] h-[28.5rem] md:h-[27rem] bg-white bg-clip-padding backdrop-filter bg-opacity-20 rounded-xl shadow-xl amaranth-regular">
      <div>
        <img
          src={props.img}
          alt=""
          className="w-[28rem] h-[15.5rem] rounded-t-xl"
        />
      </div>
      <div className="text-slate-900 p-[1rem]">
        <h1 className="text-[1.3rem] font-bold mb-2 text-slate-900">
          {props.title}
        </h1>
        <p className="text-justify mb-3 ">{props.desc}</p>
        <p className="flex ml-[1rem] mt-[1.2rem] items-center">
          <a href={props.github} className="flex justify-center items-center">
            <img
              src={GitHub}
              alt=""
              className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]"
            />
            <span>GitHub</span>
          </a>
          <div className="mx-[1rem] w-[2px] h-[1.2rem] bg-slate-900"></div>
          <a
            href={props.projectLink}
            className="flex justify-center items-center"
          >
            <img
              src={ProjectIcon}
              alt=""
              className="w-[1.3rem] h-[1.3rem] mr-[0.5rem] invert"
            />
            <span>Project</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default projectCard;
