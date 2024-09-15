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

      keyframes: {
        "float-left-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" }, // Adjust the value to control the distance
        },
      },
      animation: {
        float: "float-left-right 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
