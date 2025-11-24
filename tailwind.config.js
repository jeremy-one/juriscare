/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3d5a6c',
          dark: '#2c4352',
        },
        secondary: '#8b9a85',
        accent: '#b8a07e',
        beige: {
          DEFAULT: '#c4b5a0',
          light: '#e5ddd0',
          dark: '#a89985',
        },
        dark: '#1a1a1a',
        light: '#f5f5f5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
