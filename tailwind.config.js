/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 15s linear infinite', // Add this line
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: { // Add this block
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.brightness-150': {
          filter: 'brightness(1.5)',
        },
        '.opacity-80': {
          opacity: '0.8',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
