// eslint-disable-next-line
const withMT = require('@material-tailwind/react/utils/withMT')

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        'primary-light': '#757575',
        'secondary-light': '#f5f5f5',
        'tertiary-light': '#333',
        'accordion-light': '#eaeaea',
        'primary': '#F5F5F5', //text
        'secondary': '#303030', //bg clair
        'tertiary': '#202020', //bg foncé
        'accordion': '#404040',
        'link': '#E0E0E0'
      },
      fontFamily: {
        name: ['Archivo'],
        body: ['Syne'],
      },
      fontSize: {
        'sm-body': '15px',
        'body': '18px',
        'sm-h4': '22px',
        'h4': '38px',
        '2xl': '1.7rem',
        '3xl': '2.8rem',
        '4xl': '4rem',
      },
    },
  },
  darkMode: 'class',
})
