/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     color:{
      buttonColorF:'#464FEB',
      buttonColorS:'#8330E9',
     },
     fontFamily: {
      sans: ['DM Sans', 'sans-serif']
     }
    },
  },
  plugins: [],
}