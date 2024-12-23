/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#0F0F0F',
      white: '#fff',
      background: '#FAFAF9',
      'background-secondary': '#262626',
      'text-black': '#262626',
      'glass-morph-bg': '#f7f5f2',
      'section-title': '#8A8A6F',
      'intro-text': '#D0D1C6',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1.062rem',
      lg: ['1.1875rem', '1.21'],
      xl: '1.3125rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': ['2.5rem', '1.1'],
      '5xl': ['4.5rem', '1.05'],
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      mukta: ['Mukta', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'Outfit'],
    },
    extend: {
      margin: {
        'section-title': '5rem',
      },
    },
  },
  plugins: [],
};
