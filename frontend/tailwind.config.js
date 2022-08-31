module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      'sm': '664px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        backgoround: "#F5F5F5",
        iconBg: "#4C80C2",
        signUpBg: "#258AFF",
        green: "#A5C422",
        light: "#c2e231"
      },
      screens: {
        'desktop': '1280px'
      },
      width: {
        '100-r': '100rem',
        '80-r': '80rem',
        '60-r': '60rem',
        '50-r': '50rem',
        '40-r': "40rem",
        '35-r': '35rem',
        '15-r': '15rem'
      },
      height: {
        '90-r': '90rem',
        '85-r': '85rem',
        '80-r': '80rem',
        '60-r': '60rem',
        '50-r': '50rem',
        '40-r': '40rem',
        '35-r': '35rem',
        '15-r': '15rem'
      },
      spacing: {
        '45%': '45%',
        '50': '50px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
