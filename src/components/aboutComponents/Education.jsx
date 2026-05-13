import React from "react";
import { educationData } from "../../data/EducationData";

const Education = ({ activeMenu }) => {
  if (activeMenu !== "Education") return null;

  return (
    <div className="fade-in">
      <p className="text-sm text-muted mb-6">
        Academic background and qualifications.
      </p>

      <div className="flex flex-col gap-0">
        {educationData.map((item, i) => (
          <div key={i} className="flex gap-5 items-start">
            {/* Timeline */}
            <div className="flex flex-col items-center pt-1">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              {i < educationData.length - 1 && (
                <div className="w-px flex-1 bg-border mt-2 min-h-[3rem]" />
              )}
            </div>
            {/* Content */}
            <div className="pb-8">
              <p className="text-xs text-muted font-semibold mb-1 uppercase tracking-wide">
                {item.year}
              </p>
              <h3 className="text-base font-semibold text-ink">{item.course}</h3>
              <p className="text-sm text-muted mt-0.5">{item.clg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
