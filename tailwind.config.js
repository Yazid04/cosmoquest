/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "DarkSlateGray": "#2F4F4F",
        "Silver": "#C0C0C0",
      },
      colors:{
        "DarkSlateGray": "#2F4F4F",
        "Silver": "#C0C0C0",
      },
      fontFamily:{
        "Kaushan": 'Kaushan Script, cursive',
        "Playpen": 'Playpen Sans, cursive',
      }
    },
  },
  plugins: [],
}

