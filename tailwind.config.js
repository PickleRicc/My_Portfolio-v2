/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#F13838',
        'secondary': '#000000',
        'button': '#242739',
        'highlight': '#079CF5',
        'headings': '#DADADA',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

