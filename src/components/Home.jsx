
import { motion } from "framer-motion";
import myPhoto from "../img/myPhotoTransBg.png";
import { skillsData } from "../data/SkillsData";
import { Link } from "react-router-dom";

/* ─── Word-reveal animation ──────────────────────────────────────── */
const wordVariant = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const TITLE_WORDS = ["Hi, I'm", "Sachin", "Paithane."];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-paithane/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/spaithane9172",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.03-.01-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="relative overflow-hidden">

      {/* ── Animated Background Blobs ─────────────────────────── */}
      <motion.div
        className="glow-blob w-[700px] h-[700px] bg-accent"
        style={{ position: "absolute", top: "-250px", left: "-250px" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-blob w-[500px] h-[500px] bg-purple-600"
        style={{ position: "absolute", bottom: "-100px", right: "-150px" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="glow-blob w-[300px] h-[300px] bg-indigo-400"
        style={{ position: "absolute", top: "30%", left: "42%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-5 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── Left Column ──────────────────────────────────────── */}
          <div className="flex-1 max-w-xl" style={{ perspective: "1000px" }}>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-7"
            >
              <div className="status-dot" />
              <span className="text-xs text-muted font-medium">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Word-reveal headline */}
            <div className="mb-4">
              {TITLE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  className={`block font-black leading-none text-5xl md:text-6xl lg:text-7xl ${word === "Sachin" ? "gradient-text" : "text-[#f0f0f0]"
                    }`}
                  style={{ display: "block" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6"
            >
              <span className="section-label">Full Stack Developer</span>
            </motion.div>

            {/* Summary — exact from resume */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-md"
            >
              Full Stack Developer with experience in building web applications using{" "}
              <span className="text-[#f0f0f0] font-medium">React.js, Node.js, Express.js, and MySQL</span>.
              Skilled in developing REST APIs, responsive interfaces, and backend systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link to="/projects" className="btn-primary">
                <span>View Projects</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-ghost">Let's Talk</Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
              <div className="w-px h-5 bg-white/[0.1]" />
              <span className="text-xs text-muted font-medium">spaithane9172@gmail.com</span>
            </motion.div>
          </div>

          {/* ── Right Column — Photo ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Spinning gradient ring */}
            <motion.div
              className="absolute inset-[-3px] rounded-3xl bg-gradient-to-br from-accent via-transparent to-accent-2 opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo card */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-[#1c1c1c] border border-white/[0.08] shadow-2xl">
              <img
                src={myPhoto}
                alt="Sachin Paithane"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#141414] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-0.5">Full Stack Developer</p>
                <p className="text-sm font-bold text-[#f0f0f0]">Sachin Paithane</p>
              </div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.8, duration: 0.4 },
                x: { delay: 0.8, duration: 0.4 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute -bottom-5 -right-5 glass px-4 py-3 rounded-2xl shadow-2xl border border-white/[0.1]"
            >
              <p className="text-xl font-black gradient-text">1+</p>
              <p className="text-[10px] text-muted leading-tight">Years<br />Experience</p>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.4 },
                x: { delay: 1, duration: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
              }}
              className="absolute -top-5 -left-5 glass px-4 py-3 rounded-2xl shadow-2xl border border-white/[0.1]"
            >
              <p className="text-xl font-black gradient-text">🏆</p>
              <p className="text-[10px] text-muted leading-tight">Intern of<br />the Month ×2</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/[0.15] rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Tech Stack Strip ─────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-5 flex flex-col sm:flex-row items-center gap-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted whitespace-nowrap">
            Tech Stack
          </span>
          <div className="h-px w-6 bg-white/[0.1] hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {skillsData.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.06, duration: 0.3 }}
                whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.6)" }}
                className="skill-pill cursor-default"
              >
                <img src={skill.photo} alt={skill.title} className="w-4 h-4 object-contain" />
                {skill.title}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
