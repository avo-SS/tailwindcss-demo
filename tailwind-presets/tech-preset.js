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

        primary: 'Space Mono, monospace',
        secondary: 'Radio Canada, sans-serif',
      },

      colors: {
        primary: '#f8fafc',
        'primary-dark': '#151412',
        secondary: '#f0f2f4',
        'secondary-dark': '#151412',
        tertiary: '#8fa6c8',
        'tertiary-dark': '#1e293b',
        'accent-light': '#d2e2ff',
        'accent-dark': '#ab8ebe',
        'brand-dark': '#5a5f4d',
        'brand-light': '#ffffff',
      },

      dropShadow: {
        'brand-dark': '0 25px 25px rgb(60 60 60 / 0.8)',
        'brand-dark-sm': '0 0 10px rgb(60 60 60 / 0.3)',
        brand: '0 25px 25px rgb(1 50 90 / 0.4)',
        'brand-sm': '0 0 10px rgb(1 50 90 / 0.3)',
      },

      borderRadius: {
        'brand-lg': '0rem',
        'brand-sm': '0rem',
        full: '0rem',
      },
    },
  },
  plugins: [],
};
