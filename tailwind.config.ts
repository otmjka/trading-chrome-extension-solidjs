import type { Config } from 'tailwindcss';
export default {
  prefix: 'ext-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: '#75bc81',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem', // 30px
      },
      colors: {
        black: {
          DEFAULT: '#04070C',
          100: '#36383C',
          200: '#686A6D',
          300: '#9B9C9E',
          400: '#CDCDCE',
        },
        green: {
          100: '#152519',
          200: '#2D4B33',
          300: '#45714D',
          400: '#75bc81', // '#5D9667',
          500: '#5BBE7B', //'#5BBE7B',
          600: '#87C999',
          700: '#9FD5B2',
          800: '#BDE3CB',
        },
        purple: {
          400: '#651EDF',
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
          100: '#2B161A',
          200: '#562D34',
          300: '#82444F',
          400: '#AD5B69',
          500: '#E96B82',
          600: '#DE8C9C',
          700: '#ECC4CC',
          800: '#F5E1E6',
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
  plugins: [require('@kobalte/tailwindcss')],
} satisfies Config;
