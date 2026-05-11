import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        chamo: {
          yellow: '#ffca3a',
          red: '#e63946',
          black: '#0a0a0a',
          white: '#f3f4f6',
        }
      },
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
