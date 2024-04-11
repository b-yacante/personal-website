/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'font-black': '#093248',
      'font-white': '#fefee8',
      yellow: {
        p: '#fdfdbd',
        200: '#fcf88c',
        300: '#fbed49',
        400: '#f7dd18'
      },
      'light-blue': {
        50: '#f0faff',
        100: '#e0f3fe',
        p: '#b8e8fc',
        300: '#7fd8fa',
        400: '#3bc5f5'
      },
      magenta: {
        50: '#fdf5fe',
        100: '#faebfc',
        200: '#f6d6f8',
        300: '#f1b5f2',
        p: '#ea8fea',
        500: '#da5bda',
        600: '#bd3cba'
      },

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
        'spacing-sm': '15px',
        'spacing-lg': '30px'
      }
    }
  },
  plugins: []
}
