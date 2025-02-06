/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "prairie-sand": {
          50: "#fef6ee",
          100: "#fcebd8",
          200: "#f9d3af",
          300: "#f5b37c",
          400: "#f08a47",
          500: "#eb6a24",
          600: "#dd5119",
          700: "#b73d17",
          800: "#9c351c",
          900: "#762b18",
          950: "#3f130b",
        },
      },
    },
  },
  plugins: [],
};