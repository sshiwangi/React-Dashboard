/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarbg: "#F4F1ED",
        togglebtn: "#90C177",
      },
    },
  },
  plugins: [],
};
