/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Sans-serif"],
      },
      boxShadow: {
        nav: "0 0 9px #0000001c",
        button: "0 0 10px #0000001c",
        card: "5px 4px 20px 2px #0000001c",
      },
    },
  },
  plugins: [],
};
