/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      ibarra : 'Ibarra Real Nova, monospace',
      roboto:'Roboto, sans-serif'
    },


    extend: {
      colors:{
        main:"#151617",
        header:"#FFFFFF",
        light_text:"#5B5C5D",
        footer_light:"#7C7D7D"

      }
    },
  },
  plugins: [],
}