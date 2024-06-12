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
        footer_light:"#7C7D7D",
        page3:"#F7F7F7",
        page1_app:"#F7F7F7",
        light_text_page3:"#B3B4B4",
        blockchain:'#4D4E4E'

      }
    },
  },
  plugins: [],
}