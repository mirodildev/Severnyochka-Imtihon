/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'Sans-serif'],
      },
      colors: {
        'Yashil': '#70C05B',
        'qorag': '#414141',
        'olov': '#f63',
        'pinkx': '#FCD5BA',
        'background': 'linear-gradient(180deg, rgba(112, 192, 91, 0.00) 0%, #70C05B 82.81%);'
      },
      borderRadius: {
        'nor': '4px',
      },
      width: {
        'besh': '375px'
      },
      backgroundImage: {
        'herobg': "url('/public/assets/herobg.png')",
        'footerbg': "url('/public/assets/footer-bg.png')",
        'molokoSir': "url('/public/assets/moloko,sir.png')",
         'non': "url('/public/assets/xleb.png')",
        'fruit': "url('/public/assets/')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
         'non': "url('/public/assets/xleb.png')",
         'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
        'non': "url('/public/assets/xleb.png')",
      },
      boxShadow: {
        'katalogshadow': '10px 10px 10px 10px rgb(112, 192, 91)'
      },
      
    },
  },
  plugins: [],
}