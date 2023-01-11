/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class", 
  theme: {
    extend: {
      colors: {
        darkPrimaryBg: "#1B262C",
        darkSecondaryBg: "#0C2233",
        darkPrimaryText: "#0F4C75",
        darkSecondaryText: "#3282B8",
        darkColorLite: "#BBE1FA",
        darKHover: "#392985",
        darkBorder: "#110640",
        // color from Ai in dark mode
        darkFirst: "#4B0082",
        darkSecond: "#228B22",
        darkThird: "#191970",
        darkFourth: "#36454F",
        darkFifth: "#8B0000",
        darkSixth: "#330000",
        darkSeventh: "#BDBDBD",
        // color from Ai in lite mode
        liteFirst: "#87CEEB",
        liteSecond: "#FFE5B4",
        liteThird: "#E6E6FA",
        liteFourth: "#90EE90",
        liteFifth: "#FFFACD",
        liteSixth: "#2E8B57",
        liteSeventh: "#FFC0CB",

        // ...
      },
    },
  },
  plugins: [],
};
