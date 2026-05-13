import HTML from "../img/HTML.png";
import CSS from "../img/CSS.png";
import JS from "../img/JS.png";
import TailwindCSS from "../img/TailwindCSS.png";
import ReactJs from "../img/ReactJs.png";
import Java from "../img/java.png";
import SpringBoot from "../img/SpringBoot.png";
import MySQL from "../img/MySQL.png";

export const skillsData = [
  // Frontend
  { photo: HTML,       title: "HTML",        category: "Frontend" },
  { photo: CSS,        title: "CSS",         category: "Frontend" },
  { photo: JS,         title: "JavaScript",  category: "Frontend" },
  { photo: ReactJs,    title: "React.js",    category: "Frontend" },
  { photo: TailwindCSS,title: "TailwindCSS", category: "Frontend" },
  // Backend
  { photo: Java,       title: "Node.js",     category: "Backend"  },
  { photo: SpringBoot, title: "Express.js",  category: "Backend"  },
  { photo: MySQL,      title: "MySQL",        category: "Backend"  },
];

export const experienceData = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    period: "May 2026 – Present",
    type: "Freelance",
    bullets: [
      "Developed web applications using React.js, Node.js, Express.js, and MySQL with REST APIs and responsive UI.",
      "Managed backend logic, database operations, testing, and deployment.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Hously Finntech Realty",
    period: "Dec 2025 – May 2026",
    type: "Full-time",
    bullets: [
      "Developed and maintained CRM and CMS applications using React.js, Node.js, Express.js and MySQL.",
      "Implemented REST APIs and optimized database queries to improve system performance.",
    ],
  },
  {
    role: "IT/Software Intern",
    company: "Mind Prabha Technologies Pvt. Ltd.",
    period: "Oct 2024 – Apr 2025",
    type: "Internship",
    bullets: [
      "Developed and maintained two frontend projects using React.js, Next.js, TailwindCSS, and NextUI.",
      "Integrated RESTful APIs with the frontend, handling data fetching, error handling, and state management effectively.",
      "Conducted API testing and debugging to ensure seamless functionality and performance optimization.",
      "Awarded \"Intern of the Month\" twice for performance and contributions.",
    ],
  },
];

export const certifications = [
  "MERN Stack Fundamentals",
  "HTML5 & CSS3 Build: Two Responsive Websites",
  "Javascript For Beginners Complete Course",
  "Java Programming",
  "OOPs in Java",
];
