/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to your files for Tailwind to scan
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F2F7F3", // Light shade
          default: "#213328", // Main color (default)
          dark: "#121C17", // Dark shade
        },
        secondary: {
          light: "#9BBAA4", // Light shade
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"], // Adding DM Sans font
      },
    },
  },
  plugins: [],
};
