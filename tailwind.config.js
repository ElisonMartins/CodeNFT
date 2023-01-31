module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'background': '#030303',
        'color1': 'rgba(224, 37, 206, 0.7)',
        'color2': 'rgba(74, 237, 82, 0.7)',
        'color3': 'rgba(189, 36, 230, 0.7)',
      },
      width: {
        'tam': '350px'
      },
    },
  },
  plugins: [],
};