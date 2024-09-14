/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#BFF747",
        second: "#FFFFF5",
        accent: "#427AA1",
      },
      boxShadow: {
        right: "2px 2px 0px 2px rgba(0, 0, 0), 4px 0 6px -2px rgba(0, 0, 0)",
      },
    },
  },
  plugins: [require("daisyui")],
};
