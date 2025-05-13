/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3390ff',
          500: '#0D6EFD',
          600: '#0058cc',
          700: '#004299',
          800: '#002b66',
          900: '#001533',
        },
        teal: {
          50: '#e6fcf5',
          100: '#ccf9eb',
          200: '#99f3d6',
          300: '#66ecc2',
          400: '#33e6ad',
          500: '#20C997',
          600: '#1aa179',
          700: '#13795b',
          800: '#0d503c',
          900: '#06281e',
        },
        orange: {
          50: '#fff3e6',
          100: '#ffe6cc',
          200: '#ffcd99',
          300: '#ffb466',
          400: '#ff9b33',
          500: '#FD7E14',
          600: '#cc6500',
          700: '#994c00',
          800: '#663300',
          900: '#331900',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        smooth: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};