import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-200 text-black shadow-md">
      {/* Left side: Name */}
      <div className="font-bold text-xl">Joy Missoy</div>

      {/* Right side: Menu links */}
      <div className="flex items-center space-x-6">
        <a href="#about" className="hover:underline">About Me</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact Me</a>
      </div>
    </nav>
  );
}




