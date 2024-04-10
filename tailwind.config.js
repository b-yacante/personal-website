/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100%'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      primary: {
        100: '#e6eaf3',
        200: '#d3daea',
        300: '#b5c2db',
        400: '#92a3c8',
        500: '#7788ba',
        600: '#6572ab',
        700: '#59629c',
        800: '#4d5280',
        main: '#424769',
        950: '#2b2d40'
      },
      secondary: {
        50: '#fef6ee',
        100: '#fdead7',
        200: '#fad2ae',
        main: '#f6b17a',
        400: '#f18746',
        500: '#ee6721',
        600: '#df4f17',
        700: '#b93a15',
        800: '#932f19',
        900: '#772a17',
        950: '#40120a'
      },

      gray: {
        50: '#f7f7f8',
        100: '#efeef0',
        200: '#dbdadd',
        300: '#bbb9c0',
        400: '#96939d',
        500: '#797681',
        600: '#636069',
        700: '#514e56',
        800: '#454349',
        900: '#3d3b40',
        950: '#28272a'
      },
      white: '#ffffff'
    },
    fontFamily: {
      roboto: ['Roboto'],
      sans: ['Graphik', 'sans-serif']
    },
    extend: {
      spacing: {
        'spacing-m': '15px',
        'spacing-d': '30px'
      }
    }
  },
  plugins: []
}
