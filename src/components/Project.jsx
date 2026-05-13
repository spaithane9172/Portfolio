import { motion } from "framer-motion";
import { FreelanceCard, PersonalCard } from "./projectComponents/projectCard";
import { freelanceProjects, personalProjects } from "../data/ProjectData";
import { fadeUp, staggerContainer, viewport } from "../animations";

const Project = () => {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-screen">
      {/* Background elements */}
      <motion.div
        className="glow-blob w-[500px] h-[500px] bg-purple-600/20"
        style={{ position: "absolute", top: "5%", right: "-100px", filter: "blur(120px)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-blob w-[400px] h-[400px] bg-accent/20"
        style={{ position: "absolute", bottom: "10%", left: "-100px", filter: "blur(120px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">

        {/* --- FREELANCE PROJECTS --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-32"
        >
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#f0f0f0] mb-4 tracking-tight">
              Freelancing <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              Real-world client work and collaborations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <motion.div key={index} variants={fadeUp} className="h-full">
                <FreelanceCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- PERSONAL PROJECTS --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#f0f0f0] mb-4 tracking-tight">
              Personal <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              Projects built for learning, experimentation, and showcasing development skills
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {personalProjects.map((project, index) => (
              <motion.div key={index} variants={fadeUp} className="h-full">
                <PersonalCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Project;
