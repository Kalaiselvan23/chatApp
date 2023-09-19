/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        "home":"4rem 25rem auto"
      }
    },
  },
  plugins: [],
}

