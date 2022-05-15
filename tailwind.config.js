module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  presets: [require('./tailwind-presets/tech-preset.js')],
  // presets: [require('./tailwind-presets/cosmetics-preset.js')],

  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        'space-mono': 'Space Mono, monospace',
        'source-sans': 'Source Sans Pro, sans-serif',
        'radio-canada': 'Radio Canada, sans-serif',
      },
    },
  },
  plugins: [],
};
