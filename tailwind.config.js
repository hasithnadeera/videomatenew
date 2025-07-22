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
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#7B2CBF',
        secondary: '#2E1A47',
        dark: '#1A0B2E',
        brand: {
          purple: '#B47DFF',
          'purple-light': '#E2CDFF',
          accent: '#CFADFF',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #B47DFF 100%, #B47DFF 4%)',
        'gradient-border': 'linear-gradient(90deg, #CFADFF, #fff)',
        'gradient-text': 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
        'glassmorphism': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'brand': '0 4px 32px 0 rgba(180,125,255,0.15)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-card': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.text-gradient': {
          background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}