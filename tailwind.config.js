/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2px': '2px',
      },
      backgroundColor: {
        'gray-e0': '#e0e0e0',
      },
      boxShadow: {
        'inset-shadow': 'inset 7px 7px 5px #c1c1c1, inset -7px -7px 5px #ffffff',
      }
    },
  },
  plugins: [],
}

