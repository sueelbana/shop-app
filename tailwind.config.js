/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "rgba(99,76,159,1)", 
        "brand": "rgba(57, 36, 95, 1)", 
        "light": "rgba(236, 235, 238, 1)",

      },
    },
  },
  plugins: [],
}
