/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'ext-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#0D332F',
          300: '#88888A',
          400: '#57BFA8',
          500: '#63D7BD',
        },
        purple: {
          500: '#8750E7',
        },
        blue: {
          100: '#101115',
          300: '#232428',
        },

        gray: {
          100: '#0B130F',
          200: '#343538',
          300: '#484848',
          400: '#757575',
          600: '#88888A',
        },
        red: {
          200: '#2E0F0F',
          400: '#FF5C5C',
        },
      },
      keyframes: {
        pulseOnce: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        },
      },
      animation: {
        'pulse-once': 'pulseOnce 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
