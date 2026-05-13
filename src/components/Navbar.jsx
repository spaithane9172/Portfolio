import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled || menuOpen
        ? "bg-[#050505]/40 backdrop-blur-2xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        : "bg-gradient-to-b from-black/70 via-black/20 to-transparent border-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto h-20 md:h-24 flex items-center justify-between px-5 md:px-8">

        {/* ── Logo ─────────────────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent via-purple-500 to-indigo-500 flex items-center justify-center text-white text-base font-black shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            S
          </motion.div>
          <span className="text-lg font-bold text-[#f0f0f0] tracking-tight">
            Sachin Paithane<span className="text-accent font-black">.</span>
          </span>
        </Link>

        {/* ── Desktop Links ─────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path} className="relative py-2">
                <Link
                  to={path}
                  className={`text-[0.9rem] font-medium transition-colors duration-300 relative tracking-wide ${isActive ? "text-accent" : "text-white/70 hover:text-white"
                    }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Right Actions ──────────────────────────────────────── */}
        <div className="flex items-center gap-5">
          <motion.a
            href="./Sachin_Paithane_9307877566.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center text-xs font-bold text-accent px-6 py-2.5 rounded-full bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/60 transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)] tracking-wide"
          >
            Resume ↗
          </motion.a>

          {/* ── Mobile Hamburger ──────────────────────────────────── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] bg-[#f0f0f0] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] bg-[#f0f0f0] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] bg-[#f0f0f0] rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Dropdown ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-3xl border-b border-white/[0.06]"
          >
            <ul className="flex flex-col px-5 py-6 gap-3">
              {NAV_LINKS.map(({ path, label }, i) => {
                const isActive = location.pathname === path;
                return (
                  <motion.li
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={path}
                      className={`flex items-center justify-between px-5 py-4 rounded-xl text-base font-semibold transition-all ${isActive
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                    >
                      {label}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.8)]" />}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                className="mt-4"
              >
                <a
                  href="https://drive.google.com/file/d/1E_lcXXPOsyG-dRJYG6cx3w4E1YLjR6Ml/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full py-4 text-accent font-bold rounded-xl border border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all shadow-lg"
                >
                  Download Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
