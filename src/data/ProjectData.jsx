import whatsGoingImg from "../img/projectPhotos/whatsGoing.png";
import textUtilsImg from "../img/projectPhotos/textUtils.png";

export const freelanceProjects = [
  {
    id: "psinfratech",
    title: "PS Infratech",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overview: "Modern corporate website and infrastructure portfolio platform. Built to showcase services, leadership, and project galleries with high performance and premium design.",
    contributions: [
      "Developed end-to-end frontend architecture",
      "Implemented responsive UI and premium animations",
      "Integrated full-stack features for dynamic content delivery"
    ],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://psinfratech.com/",
  },
  {
    id: "markandcompany",
    title: "Mark & Company",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    overview: "Professional business website and service portal for a growing company. Focused on clean user experience, reliability, and modern web standards.",
    contributions: [
      "Built complete frontend application",
      "Implemented secure routing and state management",
      "Optimized for SEO and fast loading speeds"
    ],
    techStack: ["React.js", "Tailwind CSS", "Express.js"],
    liveLink: "https://markandcompany.in/",
  },
  {
    id: "wondertax",
    title: "WonderTax",
    role: "Testing & QA Contribution",
    type: "Team Collaboration / Production Experience",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    overview: "Collaborated with the core development team on a production-ready financial product, ensuring high reliability and smooth user experience before launch.",
    contributions: [
      "Conducted thorough UI validation and testing",
      "Performed cross-device responsiveness checking",
      "Provided QA support and usability improvements"
    ],
    techStack: ["Manual Testing", "UI Validation", "QA Support", "Bug Tracking"],
    liveLink: "https://wondertax.in/",
  }
];

export const personalProjects = [
  {
    id: "whatsgoing",
    title: "What's Going",
    image: whatsGoingImg,
    overview: "A real-time news application that fetches the latest headlines from various sources. Includes category filtering and clean UI.",
    features: [
      "Real-time news fetching using external APIs",
      "Category-based filtering (Tech, Sports, etc.)",
      "Responsive and clean modern design"
    ],
    techStack: ["React.js", "News API", "Tailwind CSS"],
    githubLink: "https://github.com/spaithane9172/Whats-Going",
    liveLink: "https://what-s-going.vercel.app/",
  },
  {
    id: "textutils",
    title: "Text Utils",
    image: textUtilsImg,
    overview: "A utility application for manipulating text. Features include word counting, case conversion, and removing extra spaces.",
    features: [
      "Text case conversion (Upper/Lower)",
      "Word and character counting",
      "Whitespace removal and text formatting"
    ],
    techStack: ["React.js", "Bootstrap", "Javascript"],
    githubLink: "https://github.com/spaithane9172/Text-Utils",
    liveLink: "https://text-utils-ten-kappa.vercel.app/",
  }
];
