/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5', // primary blue
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#e6faf8',
          100: '#ccf6f1',
          200: '#99ece3',
          300: '#66e3d5',
          400: '#33d9c7',
          500: '#00d0b9', // secondary teal
          600: '#00a694',
          700: '#007d6f',
          800: '#00534a',
          900: '#002a25',
        },
        accent: {
          50: '#fef1e6',
          100: '#fde3cc',
          200: '#fbc799',
          300: '#f9ab66',
          400: '#f78f33',
          500: '#f57300', // accent orange
          600: '#c45c00',
          700: '#934500',
          800: '#622e00',
          900: '#311700',
        },
        success: {
          50: '#edf7ed',
          100: '#dbeeda',
          200: '#b7ddb5',
          300: '#93cc90',
          400: '#6fbb6b',
          500: '#4baa46',
          600: '#3c8838',
          700: '#2d662a',
          800: '#1e441c',
          900: '#0f220e',
        },
        warning: {
          50: '#fefae6',
          100: '#fdf5cc',
          200: '#fbeb99',
          300: '#f9e166',
          400: '#f7d733',
          500: '#f5cd00',
          600: '#c4a400',
          700: '#937b00',
          800: '#625200',
          900: '#312900',
        },
        error: {
          50: '#fdeaef',
          100: '#fbd5de',
          200: '#f7abbd',
          300: '#f2819c',
          400: '#ee577b',
          500: '#ea2d5a',
          600: '#bb2448',
          700: '#8c1b36',
          800: '#5e1224',
          900: '#2f0912',
        },
        dark: {
          50: '#e6e6e7',
          100: '#ccccce',
          200: '#99999d',
          300: '#66666c',
          400: '#33333b',
          500: '#00000a', // almost black
          600: '#00000a',
          700: '#000008',
          800: '#000005',
          900: '#000003',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.7s ease-out',
        pulse: 'pulse 3s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2336464a' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};