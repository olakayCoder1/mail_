/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headingFont : ['Noto Sans', 'sans-serif'],
        Alkalami : ['Alkalami', 'serif']
      },
      textColor:{
        light_ : '#91a5b5',
        dark_: '#5f6d79',
        header_bg_text: '#0c2139',
      },
      backgroundColor:{
        header: '#0c2139',  
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
