/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-image': "url('src/assets/img/fundo_futurista.jpg')",
      },
    },
    colors: {
      darkgray: '#494949',
      bluetec: '#2E8EFF',
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
}

