import React from "react";
import ProjectCard from "./projectComponents/projectCard";
import { projectData } from "../data/ProjectData";

const Project = () => {
  return (
    <div>
      <h1 className="text-[1.6rem] md:text-[3rem] bungee-inline-regular text-slate-900 drop-shadow-xl text-center underline underline-offset-[0.5rem]">
        My Projects
      </h1>
      <div className="flex flex-wrap items-center mt-[0.5rem] md:mt-[2rem] pb-[3rem]">
        {projectData.map((e, index) => (
          <ProjectCard
            key={index}
            img={e.img}
            title={e.title}
            desc={e.desc}
            github={e.github}
            projectLink={e.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
