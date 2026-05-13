import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from "../animations";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-paithane/",
    color: "#0077b5",
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
    color: "#f0f0f0",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.03-.01-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { label: "Email", value: "spaithane9172@gmail.com", href: "mailto:spaithane9172@gmail.com" },
  { label: "Phone", value: "+91 93078 77566", href: "tel:+919307877566" },
  { label: "Location", value: "Pune", href: null },
];

const Contact = () => {
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => ({
    fname: formData.fname.length < 3,
    lname: formData.lname.length < 3,
    email: !formData.email.includes("@") || formData.email.length < 10,
    message: formData.message.length < 5,
  });

  const errors = validate();
  const hasError = (field) => touched[field] && errors[field];

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleBlur = (e) =>
    setTouched((p) => ({ ...p, [e.target.name]: true }));

  const submitForm = async () => {
    setTouched({ fname: true, lname: true, email: true, message: true });
    if (Object.values(errors).some(Boolean)) return;

    setStatus("sending");
    try {
      const formattedDate = new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const templateParams = {
        first_name: formData.fname,
        last_name: formData.lname,
        email: formData.email,
        message: formData.message,
        time: formattedDate,
      };

      await emailjs.send(
        "service_sb8ce9l",
        "template_j04cqjp",
        templateParams,
        "wEFTyc9tYJT8WSXRc"
      );

      setStatus("success");
      setFormData({ fname: "", lname: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden">

      {/* Blobs */}
      <motion.div
        className="glow-blob w-[500px] h-[500px] bg-accent"
        style={{ position: "absolute", top: "-150px", left: "-150px" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-blob w-[400px] h-[400px] bg-purple-600"
        style={{ position: "absolute", bottom: "-100px", right: "-100px" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-20 relative">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="section-label inline-block mb-4">Contact</motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#f0f0f0] mt-4 mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted max-w-md leading-relaxed">
            Have a project in mind or want to discuss an opportunity? Send me a message and I'll get back to you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Left — Info Panel ─────────────────────────────── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            {/* Info cards */}
            <div className="glass p-6 rounded-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-5">Direct Contact</h2>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted pt-0.5 w-16 flex-shrink-0">{label}</span>
                    {href ? (
                      <a href={href} className="text-sm text-[#f0f0f0] hover:text-accent transition-colors duration-200 font-medium break-all">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#f0f0f0] font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="glass p-6 rounded-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-5">Find Me Online</h2>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200 group"
                  >
                    <span className="text-muted group-hover:text-[#f0f0f0] transition-colors">{icon}</span>
                    <span className="text-sm font-semibold text-muted group-hover:text-[#f0f0f0] transition-colors">{label}</span>
                    <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <motion.a
              href="https://drive.google.com/file/d/1E_lcXXPOsyG-dRJYG6cx3w4E1YLjR6Ml/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="btn-primary justify-center text-center py-4"
            >
              Download Resume ↗
            </motion.a>
          </motion.div>

          {/* ── Right — Form ──────────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="glass p-6 md:p-8 rounded-2xl"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-[#f0f0f0]">Message Sent!</h3>
                <p className="text-sm text-muted text-center max-w-xs">
                  Thanks for reaching out, Sachin will get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-ghost mt-2">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-5">
                <h2 className="text-lg font-bold text-[#f0f0f0]">Send a Message</h2>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "fname", placeholder: "First Name" },
                    { name: "lname", placeholder: "Last Name" },
                  ].map(({ name, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                        {placeholder}
                      </label>
                      <input
                        type="text"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={`input-field ${hasError(name) ? "error" : ""}`}
                      />
                      {hasError(name) && (
                        <p className="text-xs text-red-400 mt-1">Min 3 characters</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className={`input-field ${hasError("email") ? "error" : ""}`}
                  />
                  {hasError("email") && <p className="text-xs text-red-400 mt-1">Enter a valid email</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or opportunity..."
                    className={`input-field resize-none ${hasError("message") ? "error" : ""}`}
                  />
                  {hasError("message") && <p className="text-xs text-red-400 mt-1">Min 5 characters</p>}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    Something went wrong. Email me directly at spaithane9172@gmail.com
                  </p>
                )}

                <motion.button
                  onClick={submitForm}
                  disabled={status === "sending"}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary justify-center w-full py-3.5 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
