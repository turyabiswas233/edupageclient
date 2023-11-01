/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        root_bluish: "#041139",
        trans_bluish: "#101c44",
        darkText: "#efefef",
        Text: "#041139",
      },
    },
  },
  plugins: [],
};
