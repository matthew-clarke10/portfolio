/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(74 222 128)',
          hover: 'rgb(34 197 94)',
        },
        neutral: '#FFFFFF',
        background: {
          DEFAULT: 'rgb(31 41 55)',
          nav: 'rgb(17 24 39)',
        },
      },
    },
  },
  plugins: [],
}