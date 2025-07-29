/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Center Colors
        primary: '#FF7633',
        secondary: '#0F534F',
        background: '#FFFFFF',

        // Magazine Colors
        magazine: {
          primary: '#294433',
          secondary: '#CB7E61',
          background: '#EBEBEB',
        },

        // Dark mode colors
        'dark-background': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-text': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} 