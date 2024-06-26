/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: false,
  singleQuote: true
}

module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  config
}
