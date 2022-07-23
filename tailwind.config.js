/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)'
      }
    },
    fontFamily:{
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
