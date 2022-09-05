// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  tabWidth: 2,
  printWidth: 120,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
}
