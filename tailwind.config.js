module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'pexel-img': "url('/src/static/pexels.png')"
      }
    },
  },
  plugins: [require('tailwindcss-dropdown')],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  variants: {
    display: ['responsive', 'dropdown']
  },
};
