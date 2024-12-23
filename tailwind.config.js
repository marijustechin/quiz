/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: "#293264",
      lightBlue: "#4D5B9E",
      ligthGreen: "#94D7A2",
      lightPink: "#F8BCBC",
      lightViolet: "#D6DBF5",
      white: "#F5F7FB",
    },
    extend: {
      fontFamily: {
        karla: ["Karla", "serif"],
      },
    },
  },
  plugins: [],
};
