/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d9e2ff',
          300: '#b7c7ff',
          400: '#8da4ff',
          500: '#6681ff',
          600: '#3d52f4',
          700: '#2f3dd6',
          800: '#2834ae',
          900: '#252e89',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};