/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2563eb',
      },
      fontFamily: {
        sans: ['freight-sans-pro', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '144': '36rem',
      },
    },
  },
  plugins: [],
}