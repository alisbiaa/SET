module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'ChampagnePink' : '#EDDCD2',
        'Isabelline' : '#F0EFEB',
        'Artichoke' : '#B7B7A4',
        'AntiqueBrass' : '#CB997E',
        'Linen' : '#FFF1E6',
        'AshGray' : '#B7B7A4',
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
