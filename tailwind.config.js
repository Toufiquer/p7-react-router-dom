/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#1B262C",
        secondaryBg: "#0C2233",
        primaryText: "#0F4C75",
        secondaryText: "#3282B8",
        lite: "#BBE1FA",
        hover: "#392985",
        border: "#110640",
        // ...
      },
    },
  },
  plugins: [],
};
