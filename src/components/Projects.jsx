import React from "react";

// Screenshots of projects
import beautyShopScreenshot from "../assets/BeutyHaven.jpeg";
import authScreenshot from "../assets/jmcars.jpeg";
import transworkScreenshot from "../assets/Trans.jpeg";

const projects = [
  {
    name: "E-Commerce Beauty Shop",
    tech: "React, Flask, PostgreSQL, JWT, Render",
    desc: "Full-stack platform with secure authentication, product management, and responsive design.",
    screenshot: beautyShopScreenshot,
    link: "https://beautyhavenn.netlify.app/",
  },
  {
    name: "Authentication & Role-Based Access",
    tech: "Flask, JWT, PostgreSQL",
    desc: "Secure login system with role-based permissions for admin and user routes.",
    screenshot: authScreenshot,
    link: "https://jmmotor.netlify.app/",
  },
  {
    name: "KQ-Tours & Travel",
    tech: "React, Tailwind",
    desc: "Global tours and travelwebsite.",
    screenshot: transworkScreenshot,
    link: "https://kqafrikaglobetour.netlify.app/",
  },
];

export default function Projects() {
  return (
  <section id="projects" className="w-full py-8 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-blue-200">
          Projects and Experience
        </h2>
        <p className="mt-6 max-w-full mx-auto text-gray-600 text-lg bg-blue-200">
          Showcase of full-stack systems, web platforms, and projects I’ve built with modern technologies,creativity and passion.
        </p>
      </div>

      {/* ===== PROJECT CARDS GRID ===== */}
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-blue-200">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg
                       transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Project Screenshot */}
            <img
              src={project.screenshot}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Project Content */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h4>
              <p className="text-gray-500 text-sm mb-2">{project.tech}</p>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

              {/* Optional Company Logo */}
              {/* <div className="flex items-center mb-4">
                <img
                  src={transworkLogo}
                  alt="Company"
                  className="w-10 h-10 object-contain rounded mr-3"
                />
                <span className="text-gray-800 font-medium">Company Name</span>
              </div> */}

              {/* Live Project Link */}
              <a
                href={project.link}
                target="_blank"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



