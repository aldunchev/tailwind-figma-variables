/** @type {import('tailwindcss').Config} */
const variables = require('./variableOutput.js').theme;
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      ...variables.colors,
    },
    borderRadius: {
      ...variables.borderRadius
    },
    spacing: {
      ...variables.spacing
    }
  },
  plugins: [
  ],
}
