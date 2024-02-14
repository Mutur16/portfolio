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
        'primary-gray': '#eaeaea',
        'text-gray': '#757575',
        'bg-gray': '#f5f5f5',
        'dark-gray': '#333',
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
