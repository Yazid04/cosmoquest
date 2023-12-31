/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "DarkSlateGray": "#2F4F4F",
        "Silver": "#FFFFFF",
        "DarkerSilver": "#D9D9D9",
      },
      colors:{
        "DarkSlateGray": "#2F4F4F",
        "Silver": "#FFFFFF",
      },
      fontFamily:{
        "Kaushan": 'Kaushan Script, cursive',
        "Playpen": 'Playpen Sans, cursive',
      }
    },
  },
  plugins: [],
}

