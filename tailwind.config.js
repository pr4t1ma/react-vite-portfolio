const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      // Soft & Subtle Palette
      primary: "#4A4A48",      // Warm Gray - text & headers
      secondary: "#FAF9F7",    // Soft Cream - background
      accent: "#B8956A",       // Muted Taupe - buttons & highlights
      tertiary: "#D9D3CE",     // Warm Beige - secondary backgrounds
      // Legacy colors (keeping for reference)
      grain: "#d7cec7",
      blackboard: "#565656",
      oxblood: "#B8956A",      // Now maps to accent (taupe)
      tan: "#D9D3CE",          // Now maps to tertiary (beige)
      peach: "#D9D3CE",
      forestgreen: "#82A3AC",
      green: "#32766A",
      gray: "#999",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
