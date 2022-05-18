module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class', // 'media'  -> media prefers-color-scheme

  // Tells the config file to include content of preset
  presets: [
    // ------- Design system? -------
    // require('./fast-x-ui/colors.js')
    // require('./fast-x-ui/typography.js')
    // require('./fast-x-ui/spacing.js')

    // ------- Projects? -------
    // require('./memodo.js')
    // require('./demosite.js')

    require('./tailwind-presets/tech-preset.js'),
    // require('./tailwind-presets/cosmetics-preset.js'),
  ],

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
