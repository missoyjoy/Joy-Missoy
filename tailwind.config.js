/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ allows JS toggle with "dark" class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
