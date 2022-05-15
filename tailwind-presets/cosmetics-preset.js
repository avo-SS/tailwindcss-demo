module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        'space-mono': 'Space Mono, monospace',
        'source-sans': 'Source Sans Pro, sans-serif',
        'radio-canada': 'Radio Canada, sans-serif',

        primary: 'Cormorant Garamond, serif',
        secondary: 'Playfair Display, serif',
      },

      colors: {
        primary: '#fefae0',
        'primary-dark': '#30302b',
        secondary: '#faedcd',
        'secondary-dark': '#30302b',
        tertiary: '#d4a373',
        'tertiary-dark': '#454141',
        'accent-light': '#e9edc9',
        'accent-dark': '#ccd5ae',
        'brand-dark': '#5a5f4d',
        'brand-light': '#ffffff',
      },

      dropShadow: {
        'brand-dark': '0 25px 25px rgb(20 20 18 / 0.3)',
        'brand-dark-sm': '0 0 10px rgb(20 20 18 / 0.4)',
        brand: '0 25px 25px rgb(210 150 115 / 0.9)',
        'brand-sm': '0 0 10px rgb(210 150 115 / 0.9)',
      },

      borderRadius: {
        'brand-lg': '2rem',
        'brand-sm': '1rem',
      },
    },
  },
  plugins: [],
};
