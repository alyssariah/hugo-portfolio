/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html', 'layouts/**/**/*.html'],
  colors: {
    primary: '#5998C5',
    border: '#ACB9C4'
  },
  theme: {
    fontFamily: {
      'display': ['Barlow Condensed', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
      "logo": ['Great Vibes', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
