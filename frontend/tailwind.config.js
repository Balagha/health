module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        backgoround: "#F5F5F5",
        iconBg: "#4C80C2",
        signUpBg: "#258AFF"
      },
      screens:{
        'desktop': '1280px'
      },
      width:{
        '60-r': '60rem',
        '50-r': '50rem',
        '40-r': "40rem",
        '35-r': '35rem'
      },
      height:{
        '80-r': '80rem',
        '60-r': '60rem',
        '50-r': '50rem',
        '40-r': '40rem',
        '35-r': '35rem'
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif']

    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
