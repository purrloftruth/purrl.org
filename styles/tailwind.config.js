/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
				serif: [
					'Libre Baskerville',
					...defaultTheme.fontFamily.serif,
				]
			},
			colors: {
				background: '#ffeae7',
				foreground: 'hsl(0deg 95% 66%)',
			},
    },
  },
  plugins: [],
}
