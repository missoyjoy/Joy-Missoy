import React from "react";
import myPhoto from "../assets/Missoy.jpeg"; // my photo
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
  const services = [
    {
      name: "Frontend Development",
      icon: <SiReact className="text-blue-500 text-5xl mb-3" />,
      desc: "Building interactive and responsive user interfaces with React.js, HTML, CSS, and Tailwind CSS.",
    },
    {
      name: "Backend Development",
      icon: <FaServer className="text-gray-800 text-5xl mb-3" />,
      desc: "Designing secure and scalable APIs and server-side applications using Python, Flask, and databases.",
    },
    {
      name: "Website Development",
      icon: <FaLaptopCode className="text-green-500 text-5xl mb-3" />,
      desc: "Creating end-to-end web systems integrating frontend, backend, authentication, and database management.",
    },
    {
      name: "Responsive Web Design",
      icon: <FaMobileAlt className="text-purple-500 text-5xl mb-3" />,
      desc: "Ensuring websites look great on all devices with adaptive layouts and mobile-first design.",
    },
    {
      name: "UI/UX Design",
      icon: <SiTailwindcss className="text-cyan-500 text-5xl mb-3" />,
      desc: "Crafting intuitive and visually appealing user experiences with modern design principles.",
    },
      {
      name: "Graphic Design",
      icon: <SiTailwindcss className="text-cyan-500 text-5xl mb-3" />,
      desc: "Crafting intuitive and visually appealing user experiences with modern design principles.",
    },
  ];

  return (
   <section id="about" className="min-h-screen flex flex-col items-center justify-center p-6 text-black">
      {/* Section 1: Photo + Description */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 max-w-6xl w-full ">
        <img
          src={myPhoto}
          alt="Joy Missoy"
          className="w-56 h-56 rounded-full object-cover mb-6 md:mb-0 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 w-full bg-blue-200">Hi, I’m Joy Missoy</h2>
          <p className="text-lg text-gray-700 bg-blue-200 w-full">
            I am a Full Stack Software Developer and Software Engineer. I build modern, responsive websites and robust systems with technologies like React, JavaScript, Python, Flask, HTML, CSS, and Tailwind CSS. I love turning ideas into functional and scalable digital experiences.
          </p>
        </div>
      </div>

      {/* Section 2: Contact */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold text-gray-800">Hire Me / Get In Touch</h3>
        <p className="text-gray-600">Feel free to reach out — I'm open to opportunities and collaborations.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:missoyjoy2019@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
          >
            📧 missoyjoy2019@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/joy-missoy-56638423a/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2"
          >
            🔗 LinkedIn Profile
          </a>
        </div>
      </div>
      {/* ===== SERVICES SECTION ===== */}
<div className="mt-12 w-full max-w-6xl">

  {/* Title */}
  <div className="text-center mb-8">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
      My Services
    </h3>
    <p className="text-gray-700 mt-2">
      Here are the solutions I can provide as a Full Stack Developer.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white/30 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
      >
        {service.icon}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {service.name}
        </h4>
        <p className="text-gray-600 text-sm">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}







