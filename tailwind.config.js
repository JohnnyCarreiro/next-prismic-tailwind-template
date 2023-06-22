/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        brand: 'var(--font-ubuntu)',
        code: 'var(--font-fira-code)',
      },
      colors: require('./src/styles/tokens/colors'),
    },
  },
  plugins: [],
}
