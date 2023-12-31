/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-time-line-white':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
      },
      colors: {
        gray: {
          50: '#e6e6e6',
          100: '#cccccc',
          200: '#b3b3b3',
          300: '#999999',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#262626',
          900: '#1f1f1f',
          950: '#0C0C0C',
        },
      },
      screens: {
        mobile: '380px',
        tablet: '780px',
        desktop: '1024px',
      },
      lineHeight: {
        lg: '120px',
      },
      fontSize: {
        xxl: '96px',
      },
      keyframes: {
        reveal: {
          '0%': {
            transform: 'translate(0,100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0,0)',
            opacity: '1',
          },
        },
        infiniteScroll: {
          '14.28%': {
            transform: 'translate(-100%)',
          },
          '14.29%': {
            transform: 'translate(600%)',
          },
        },
      },
      animation: {
        reveal: 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        infiniteScroll: 'infiniteScroll 40s linear infinite',
      },
    },
  },
  plugins: [],
}
