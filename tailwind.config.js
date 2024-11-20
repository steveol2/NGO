/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/Images/Homepix.jpg')", // Adjusted to use the public path
        "edu-image": "url('/Images/edu.jpg')",
        "abt-image": "url('/Images/about.jpg')",
      },
    },
  },
  plugins: [],
};
