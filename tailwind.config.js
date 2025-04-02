// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000"  // Define primary color as black if needed
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
