
     import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-300 py-8 px-6 mt-12">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Name */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">
            Joy Missoy
          </h3>
          <p className="text-sm text-gray-700">
            Full Stack Software Engineer
          </p>
        </div>

        {/* Right Side - Contact Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-800 text-xl">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/joy missoy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="mailto:joymissoy@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+254796182880"
            className="hover:text-green-600 transition"
          >
            <FaPhoneAlt />
          </a>
          {/* WhatsApp */}
         <a
        href="https://wa.me/254796182880"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/20 backdrop-blur-md 
             px-4 py-2 rounded-full shadow-md 
             hover:bg-white hover:text-green-600 
             transform hover:-translate-y-1 hover:scale-105 
             transition duration-300"
>
  <FaWhatsapp />
  <span className="text-sm">WhatsApp</span>
</a>


        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-700 mt-6">
        © {new Date().getFullYear()} Joy Missoy. All rights reserved.
      </div>

    </footer>
  );
}
 
