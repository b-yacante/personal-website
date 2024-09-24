import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#CDDEFF',
        foreground: 'var(--foreground)',
        'game-text': '#2B3467',
        'game-primary': '#EB455F',
        'game-secondary': '#676FA3',
        'game-light': '#FCFFE7',
        'game-dark': '#BAD7E9',
      },
    },
  },
  plugins: [],
}
export default config
