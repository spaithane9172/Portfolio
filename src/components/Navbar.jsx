import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [isActive, setIsActive] = useState("/");
  const handleHamburger = () => {
    hamburgerMenu ? setHamburgerMenu(false) : setHamburgerMenu(true);
  };
  return (
    <nav className="bg-slate-900 md:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex px-[1rem] lg:px-[5rem] h-[3.5rem] md:h-[5rem] justify-between items-center fixed w-full text-white ">
      <div className="flex justify-end items-end">
        <p className="great-vibes-regular text-[1.7rem] lg:text-[2rem] -rotate-3 drop-shadow-2xl text-white">
          Sachin Paithane
        </p>
      </div>
      <ul
        className={`bg-slate-900 md:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex lg:flex flex-col lg:flex-row justify-center items-center absolute lg:relative translate-y-[8.5rem] lg:translate-y-0 translate-x-[100vw] lg:translate-x-0 lg:mr-[7vw] duration-300 ${
          hamburgerMenu ? "translate-x-[62vw]" : "translate-x-52"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            setIsActive("/");
          }}
        >
          <li
            className={`w-[8rem] h-[3rem] flex justify-center items-center cursor-pointer font-bold md:font-semibold border-b-[3px] lg:border-[1px] ${
              isActive === "/"
                ? "lg:rounded-full border-yellow-400"
                : "lg:rounded-nonde border-transparent"
            } hover:scale-105`}
          >
            Home
          </li>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setIsActive("about");
          }}
        >
          <li
            className={`w-[8rem] h-[3rem] flex justify-center items-center cursor-pointer font-bold md:font-semibold border-b-[3px] lg:border-[1px] ${
              isActive === "about"
                ? "lg:rounded-full border-yellow-400"
                : "lg:rounded-nonde border-transparent"
            } hover:scale-105`}
          >
            About
          </li>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setIsActive("projects");
          }}
        >
          <li
            className={`w-[8rem] h-[3rem] flex justify-center items-center cursor-pointer font-bold md:font-semibold border-b-[3px] lg:border-[1px] ${
              isActive === "projects"
                ? "lg:rounded-full border-yellow-400"
                : "lg:rounded-nonde border-transparent"
            } hover:scale-105`}
          >
            Projects
          </li>
        </Link>
        <Link
          to="contact"
          onClick={() => {
            setIsActive("contact");
          }}
        >
          <li
            className={`w-[8rem] h-[3rem] flex justify-center items-center cursor-pointer font-bold md:font-semibold border-b-[3px] lg:border-[1px] ${
              isActive === "contact"
                ? "lg:rounded-full border-yellow-400"
                : "lg:rounded-nonde border-transparent"
            } hover:scale-105`}
          >
            Contact
          </li>
        </Link>
      </ul>
      <div
        className="flex w-[2.6rem] h-[2.6rem] flex-col justify-center items-center border-[1px] border-white p-2 rounded-md cursor-pointer lg:hidden"
        onClick={handleHamburger}
      >
        <div
          className={`w-[1.8rem] h-[0.2rem] bg-white mb-2 duration-500 ${
            hamburgerMenu ? "rotate-45 absolute mb-[0]" : "-rotate-0"
          }`}
          id="hamburgerBar1"
        ></div>
        <div
          className={`w-[1.8rem] h-[0.2rem]  mb-2 ${
            hamburgerMenu ? "bg-transparent mb-0" : "bg-white"
          }`}
          id="hamburgerBar2"
        ></div>
        <div
          className={`w-[1.8rem] h-[0.2rem] bg-white duration-500 ${
            hamburgerMenu ? "-rotate-45 absolute" : "rotate-0"
          }`}
          id="hamburgerBar3"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
