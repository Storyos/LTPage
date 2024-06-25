// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      colors:{
        'giants-navy': '#041e42',
        'giants-blue':'#6cace4',
        'giants-red':'#d00f32',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
