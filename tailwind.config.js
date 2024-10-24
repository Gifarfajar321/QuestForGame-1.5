/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ['"Montserrat"'],
      "comic-neue": ['"Comic Neue"'],
    },
    extend: {
      colors: {
        primary: "#ff8906",
        sunset: "#ffaa33 ",
        lightSunset: "#8B4513",
        dark: "#0f0e17",
        second: "#fffffe",
        description: "#a7a9be",
        secondtwo: "#1f1c2f",
      },
    },
  },
  plugins: ["tailwindcss-textshadow"],
};
