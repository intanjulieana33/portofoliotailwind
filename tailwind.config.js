/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: "#991b1b",
        secondary: '#64748b',
        dark: '#0c0a09',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
};
