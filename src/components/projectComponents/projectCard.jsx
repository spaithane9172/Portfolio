import React from "react";
import { motion } from "framer-motion";

// --- FREELANCE CARD ---
export const FreelanceCard = ({ title, role, image, overview, contributions = [], techStack = [], liveLink }) => {
  return (
    <article className="group relative flex flex-col h-full rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-white/[0.2] transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
      
      {/* Screenshot Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        {/* Live button overlay */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white tracking-tight mb-1">{title}</h3>
          <p className="text-xs font-semibold text-accent uppercase tracking-wider">{role}</p>
        </div>

        <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
          {overview}
        </p>

        {contributions.length > 0 && (
          <div className="mb-6 space-y-2">
            {contributions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent/80 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-white/70">{item}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tag) => (
              <span key={tag} className="text-[10px] font-medium text-white/50 bg-white/[0.03] border border-white/[0.05] rounded-md px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
          
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold text-accent hover:text-white transition-colors bg-accent/10 hover:bg-accent/30 px-3 py-1.5 rounded-lg border border-accent/20 shadow-sm"
            >
              Visit
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

// --- PERSONAL CARD ---
export const PersonalCard = ({ title, image, overview, features = [], techStack = [], githubLink, liveLink }) => {
  return (
    <article className="group relative flex flex-col h-full rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-white/[0.2] transition-all duration-500 shadow-xl">
      
      {/* Screenshot */}
      <div className="relative w-full h-64 overflow-hidden border-b border-white/[0.05] p-6 flex items-center justify-center bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative z-10"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-6">
          {overview}
        </p>

        {features.length > 0 && (
          <div className="mb-8 space-y-2.5 flex-1">
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-3">Key Features</h4>
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/80 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tag) => (
              <span key={tag} className="text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 rounded-lg px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.03-.01-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                </svg>
                Code
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors ml-auto"
              >
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
