import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-blue-200"
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          I’m always open to discuss new projects, collaborations, or job opportunities. Feel free to reach out using the form below or through my contact info.
        </p>
      </div>

      {/* ===== CONTACT CARDS ===== */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 w-full max-w-4xl">
        <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-md flex-1 hover:shadow-xl transition">
          <FaEnvelope className="text-blue-500 text-2xl" />
          <a href="mailto:missoyjoy2019@gmail.com" className="text-gray-800 hover:underline">missoyjoy2019@gmail.com</a>
        </div>
        <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-md flex-1 hover:shadow-xl transition">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <span className="text-gray-800">+254 796 182 880</span>
        </div>
        <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-md flex-1 hover:shadow-xl transition">
          <FaLinkedin className="text-blue-500 text-2xl" />
          <a
            href="https://www.linkedin.com/in/joy-missoy-56638423a/"
            target="_blank"
            className="text-gray-800 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* ===== CONTACT FORM ===== */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}


