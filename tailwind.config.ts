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
        'game-text': '#2B3467',
        'game-bg': '#EEEDED',
        'game-red': '#F95454',
        'game-darkred': '#C62E2E',
        'game-blue': '#0D92F4',
        'game-lightblue': '#77CDFF',
      },
    },
  },
  plugins: [],
}
export default config
