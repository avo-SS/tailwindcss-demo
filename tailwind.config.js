module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        'space-mono': 'Space Mono, monospace',
        'source-sans': 'Source Sans Pro, sans-serif',
      },

      animation: {
        float: 'float 1s ease-in-out infinite alternate',
      },

      keyframes: {
        float: {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
};
