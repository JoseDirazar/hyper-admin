/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purpleNav: "#BE9FF6",
        black : "#000",
        purpleOscuro: "#925FF0",
        grey : "#646464",
        pinkChip: "#E9DFFC",
        fontColorChip: "#784DC7",
        textForm: "#29154D",
        textRed : "#D64751"
      },
    },
    
  },
  plugins: [],
}
