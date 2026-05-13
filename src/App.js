import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Dark canvas */}
      <div className="bg-[#0d0d0d] min-h-screen font-sans text-[#f0f0f0] relative">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
        <Navbar />
        <main className="pt-24 relative z-10">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
