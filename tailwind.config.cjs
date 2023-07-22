/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
'a4': "1 / 1.414"
      },
      colors: {
        mygray: {
          darker: "rgb(30,30,30)",
          dark: "rgb(80,80,80)",
          light: "rgb(120,120,120)",
          lighter: "rgb(200,200,200)",
        },
      },
    },
  },
  plugins: [],
};
