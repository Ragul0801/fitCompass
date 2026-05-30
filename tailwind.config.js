/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#9DFF00',
      },
      boxShadow: {
        neon: '0 0 24px rgba(157,255,0,0.35)',
      },
    },
  },
  plugins: [],
};

