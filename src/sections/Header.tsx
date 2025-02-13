"use client";
import { SetStateAction, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={`nav-item ${
            activeSection === "home" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        <a
          href="#skill"
          className={`nav-item ${
            activeSection === "skill" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleClick("skills")}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          } hover:bg-white/70 hover:text-gray-900`}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
