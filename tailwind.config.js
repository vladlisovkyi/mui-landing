/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
