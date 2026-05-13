import React from "react";
import { skillsData } from "../../data/SkillsData";

const Skills = ({ activeMenu }) => {
  if (activeMenu !== "Skills") return null;

  return (
    <div className="fade-in">
      <p className="text-sm text-muted mb-6">Technologies and tools I use to build great products.</p>
      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill, i) => (
          <span
            key={i}
            className="skill-pill"
            style={{ animationDelay: `${0.04 * i}s` }}
          >
            <img src={skill.photo} alt={skill.title} className="w-4 h-4 object-contain" />
            {skill.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
