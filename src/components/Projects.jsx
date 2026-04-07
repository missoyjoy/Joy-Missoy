import React from "react";

// Screenshots of projects
import beautyShopScreenshot from "../assets/BeutyHaven.jpeg";
import jmcarsScreenshot from "../assets/jmcars.jpeg";
import kqtoursScreenshot from "../assets/kqtours.jpeg";
import dictionaryScreenshot from "../assets/dictionary.jpeg";
import gameappScreenshot from "../assets/gameapp.jpeg";
import kqbeautyScreenshot from "../assets/kqbeauty.jpeg";

const projects = [
  {
    name: "E-Commerce Beauty Shop",
    tech: "React, Flask, PostgreSQL, JWT, Render",
    desc: "Full-stack platform with secure authentication, product management, and responsive design.",
    screenshot: beautyShopScreenshot,
    link: "https://beautyhavenn.netlify.app/",
  },
  {
    name: "JM Motors",
    tech: "React, Flask, JWT, PostgreSQL",
    desc: "Car dealership platform with secure login, role-based access, and vehicle listings.",
    screenshot: jmcarsScreenshot,
    link: "https://jmmotor.netlify.app/",
  },
  {
    name: "KQ Afrika Globe Tours",
    tech: "React, Tailwind",
    desc: "Global tours and travel website showcasing destinations and packages.",
    screenshot: kqtoursScreenshot,
    link: "https://kqafrikaglobetour.netlify.app/",
  },
  {
    name: "Dictionary App",
    tech: "React, API",
    desc: "Interactive dictionary app with word definitions, phonetics, and examples.",
    screenshot: dictionaryScreenshot,
    link: "https://missoyjoy.github.io/Dictionary-App/",
  },
  {
    name: "JM Game App",
    tech: "React, Tailwind",
    desc: "Fun and interactive gaming web application with multiple game modes.",
    screenshot: gameappScreenshot,
    link: "https://jmgameapp.netlify.app/",
  },
  {
    name: "KQ Beauty Parlour",
    tech: "React, Tailwind",
    desc: "Beauty parlour website with service listings, booking, and elegant design.",
    screenshot: kqbeautyScreenshot,
    link: "https://kqbeautyparlour.netlify.app/",
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



