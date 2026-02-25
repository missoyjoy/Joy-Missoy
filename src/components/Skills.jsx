import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiPostgresql, SiJsonwebtokens,SiFirebase, SiTailwindcss  } from "react-icons/si";

export default function Skills() {
  const coreStack = [
    {
      name: "React.js",
      icon: <FaReact className="text-blue-500 text-4xl mb-4" />,
      desc: "Component-based frontend architecture",
    },
    {
      name: "JavaScript (ES6+)",
      icon: <FaJsSquare className="text-yellow-500 text-4xl mb-4" />,
      desc: "Modern interactive web functionality",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-700 text-4xl mb-4" />,
      desc: "Backend logic & system design",
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-gray-800 text-4xl mb-4" />,
      desc: "RESTful API development",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-indigo-600 text-4xl mb-4" />,
      desc: "Relational database design",
    },
    {
      name: "JWT Authentication",
      icon: <SiJsonwebtokens className="text-pink-500 text-4xl mb-4" />,
      desc: "Secure route protection",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500 text-4xl mb-4" />,
      desc: "Version control & collaboration",
    },
    {
      name: "REST APIs",
      icon: <FaDatabase className="text-green-600 text-4xl mb-4" />,
      desc: "Frontend–backend integration",
    },
    {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl mb-4" />,
    desc: "Utility-first responsive UI design",
    },
    {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-4xl mb-4" />,
    desc: "Real-time database & cloud services",
    },
  ];

  const projects = [
    {
      name: "E-Commerce Beauty Shop",
      tech: "React, Flask, PostgreSQL, JWT, Render",
      desc: "Full-stack platform with secure authentication, product management, and responsive design.",
      link: "#", // replace with live demo or GitHub
    },
    {
      name: "Authentication & Role-Based Access",
      tech: "Flask, JWT, PostgreSQL",
      desc: "Secure login system with role-based permissions for admin and user routes.",
      link: "#",
    },
    {
      name: "Admin Dashboard",
      tech: "React, Flask",
      desc: "Dynamic dashboard for managing users, products, and system data with real-time updates.",
      link: "#",
    },
  ];

  return (
    <section id="skills" className="w-full">

      {/* ===== HEADER SECTION ===== */}
      <div className="w-full bg-blue-200 py-8 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Skills
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          Full Stack Software Engineer building secure, scalable,
          production-ready web systems that integrate structured backend
          architecture with modern frontend interfaces.
        </p>
      </div>
      

      {/* ===== CORE STACK (HIGHLIGHT SECTION) ===== */}
      
      <div className="w-full bg-blue-200 py-8 px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-14">
          Core Technology Stack
        </h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {coreStack.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center 
                         transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {skill.icon}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {skill.name}
              </h4>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
<div className="w-full bg-blue-200 py-8 px-6">
  <h3 className="text-3xl font-semibold text-center text-gray-800 mb-16">
    Engineering Capabilities
  </h3>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 bg-blue-200">

    {/* Backend Card */}
    <div className="bg-blue-400 rounded-2xl p-8 shadow-lg
                    transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl
                    animate-slide-in-left">
      <h4 className="text-xl font-semibold mb-6 text-white">Backend Engineering</h4>
      <ul className="space-y-3 text-black text-sm">
        <li>JWT Authentication & Route Protection</li>
        <li>Secure API Development</li>
        <li>MVC Architecture Implementation</li>
        <li>Input Validation & Error Handling</li>
      </ul>
    </div>

    {/* Database Card */}
    <div className="bg-blue-400 rounded-2xl p-8 shadow-lg
                    transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl
                    animate-slide-in-up">
      <h4 className="text-xl font-semibold mb-6 text-white">Database Systems</h4>
      <ul className="space-y-3 text-black text-sm">
        <li>Database Schema Design</li>
        <li>Relational Data Modeling</li>
        <li>CRUD Operations</li>
        <li>Query Optimization Basics</li>
      </ul>
    </div>

    {/* Deployment Card */}
    <div className="bg-blue-400 rounded-2xl p-8 shadow-lg
                    transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl
                    animate-slide-in-right">
      <h4 className="text-xl font-semibold mb-6 text-white">Deployment & DevOps</h4>
      <ul className="space-y-3 text-black text-sm">
        <li>Git Branching & Merging</li>
        <li>Environment Variable Configuration</li>
        <li>Full-Stack Deployment (Render)</li>
        <li>Production Debugging</li>
      </ul>
    </div>


  </div>
</div>

 </section>
  );
}





