/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "rgba(99,76,159,1)",  // your custom navbar color
      },
    },
  },
  plugins: [],
}
