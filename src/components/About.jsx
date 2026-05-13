import { useState } from "react";
import { motion } from "framer-motion";
import myPhoto from "../img/myPhotoTransBg.png";
import { skillsData, experienceData, certifications } from "../data/SkillsData";
import { fadeUp, staggerContainer, slideInLeft, scaleIn, viewport } from "../animations";

const TABS = ["Skills", "Experience", "Education", "Certifications"];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "NBN Sinhgad School of Engineering, Ambegaon BK, Pune",
    period: "Jun 2019 – Jul 2023",
    grade: "8.52 CGPA",
  },
];

const STATS = [
  { value: "8.52", label: "CGPA", suffix: "" },
  { value: "3", label: "Companies", suffix: "+" },
  { value: "3", label: "Projects Shipped", suffix: "+" },
  { value: "5", label: "Certifications", suffix: "" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section className="relative overflow-hidden">

      {/* Background blobs */}
      <motion.div
        className="glow-blob w-[400px] h-[400px] bg-accent"
        style={{ position: "absolute", top: "-100px", left: "-120px" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-blob w-[350px] h-[350px] bg-purple-600"
        style={{ position: "absolute", bottom: "-80px", right: "-100px" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-20 relative">

        {/* ── Hero Row ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

          {/* Photo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex-shrink-0 relative"
          >
            <motion.div
              className="absolute inset-[-3px] rounded-3xl bg-gradient-to-br from-accent via-transparent to-accent-2 opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-52 h-64 md:w-64 md:h-80 rounded-3xl overflow-hidden bg-[#1c1c1c] border border-white/[0.08]">
              <img
                src={myPhoto}
                alt="Sachin Paithane"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] to-transparent" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex-1"
          >
            <motion.span variants={fadeUp} className="section-label mb-5 inline-block">
              About Me
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-[#f0f0f0] mt-4 mb-5 leading-tight"
            >
              Passionate about<br />
              <span className="gradient-text">Building Things</span> 👋
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted leading-relaxed text-base max-w-lg mb-8">
              Full Stack Developer with experience in building web applications using{" "}
              <span className="text-[#f0f0f0] font-medium">React.js, Node.js, Express.js, and MySQL</span>.
              Currently working as a freelance developer, focusing on end-to-end application development.
            </motion.p>

            {/* Stats */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map(({ value, label, suffix }) => (
                <motion.div key={label} variants={scaleIn} className="stat-card text-center">
                  <p className="text-2xl font-black gradient-text mb-1">{value}{suffix}</p>
                  <p className="text-xs text-muted">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Tabs ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="glass p-6 md:p-8"
        >
          {/* Tab bar */}
          <div className="flex flex-wrap gap-6 border-b border-white/[0.08] mb-8 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn whitespace-nowrap ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Skills Tab ─────────────────────────────────────── */}
          {activeTab === "Skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm text-muted mb-6">Technologies and tools I use to build great products.</p>

              {/* Frontend */}
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Frontend</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {skillsData.filter(s => s.category === "Frontend").map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="skill-pill cursor-default"
                  >
                    <img src={skill.photo} alt={skill.title} className="w-4 h-4 object-contain" />
                    {skill.title}
                  </motion.span>
                ))}
              </div>

              {/* Backend */}
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Backend</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {skillsData.filter(s => s.category === "Backend").map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="skill-pill cursor-default"
                  >
                    <img src={skill.photo} alt={skill.title} className="w-4 h-4 object-contain" />
                    {skill.title}
                  </motion.span>
                ))}
              </div>

              {/* Tools */}
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Tools</p>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Postman", "GitHub"].map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="skill-pill cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Experience Tab ─────────────────────────────────── */}
          {activeTab === "Experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {experienceData.map((job, i) => (
                <div key={i} className="flex gap-5">
                  {/* Timeline */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="timeline-dot mt-1" />
                    {i < experienceData.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-2 min-h-[60px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                        {job.type}
                      </span>
                      <span className="text-xs text-muted">{job.period}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#f0f0f0] mb-0.5">{job.role}</h3>
                    <p className="text-sm text-accent/80 font-medium mb-3">{job.company}</p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── Education Tab ──────────────────────────────────── */}
          {activeTab === "Education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="timeline-dot mt-1" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold mb-1">{edu.period}</p>
                    <h3 className="text-base font-bold text-[#f0f0f0] mb-0.5">{edu.degree}</h3>
                    <p className="text-sm text-accent/80 font-medium mb-1">{edu.school}</p>
                    <span className="inline-block text-xs font-bold bg-green-500/10 border border-green-500/20 text-green-400 rounded-full px-3 py-1">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── Certifications Tab ────────────────────────────── */}
          {activeTab === "Certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm text-muted mb-6">Courses and certifications I've completed.</p>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-accent/30 transition-colors duration-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#f0f0f0] font-medium">{cert}</p>
                    <div className="ml-auto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
