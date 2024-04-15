/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '600px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'font-black': '#0c4c6e',
      'font-white': '#fefee8',
      'red-ribbon': {
        50: '#fff0f1',
        100: '#ffe2e4',
        200: '#ffc9d0',
        300: '#ff9da8',
        400: '#ff657c',
        0: '#ff3052',
        600: '#f31a48',
        700: '#cc0434',
        800: '#ab0633',
        900: '#920932',
        950: '#520015'
      },
      'picton-blue': {
        50: '#f0f9ff',
        100: '#e0f3fe',
        200: '#bae8fd',
        300: '#7dd6fc',
        400: '#37c2f9',
        0: '#1ab4f2',
        600: '#0189c8',
        700: '#026da2',
        800: '#075c85',
        900: '#0c4c6e',
        950: '#083149'
      },
      'screamin-green': {
        50: '#eefff2',
        100: '#d7ffe3',
        200: '#b2ffc7',
        300: '#77fe9d',
        0: '#1af258',
        500: '#0add48',
        600: '#02b737',
        700: '#05902e',
        800: '#0b7029',
        900: '#0b5c25',
        950: '#003411'
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
