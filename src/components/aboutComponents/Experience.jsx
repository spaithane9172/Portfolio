import React from "react";

const Experience = ({ activeMenu }) => {
  if (activeMenu !== "Experience") return null;

  return (
    <div className="fade-in">
      <p className="text-sm text-muted mb-8">My professional journey so far.</p>

      <div className="flex gap-5 items-start">
        {/* Timeline dot + line */}
        <div className="flex flex-col items-center pt-1 flex-shrink-0">
          <div className="timeline-dot" />
          <div className="w-px flex-1 bg-gradient-to-b from-accent/40 to-transparent mt-2 min-h-[60px]" />
        </div>
        {/* Content */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
              Current
            </span>
          </div>
          <h3 className="text-base font-bold text-[#f0f0f0] mb-2">Fresher · Full-Stack Developer</h3>
          <p className="text-sm text-muted leading-relaxed max-w-md">
            Actively seeking full-stack developer opportunities. Building production-quality projects
            with React, Spring Boot, and MySQL to demonstrate real-world capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
