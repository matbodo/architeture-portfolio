/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          '"Tempus Sans ITC"',
          '"Tempus Sans"',
          '"Open Sans"',
          '"Lato"',
          '"Inter"',
          "sans-serif",
        ],
        body: ['"Open Sans"', '"Lato"', '"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
