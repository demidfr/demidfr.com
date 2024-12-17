/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./blog/*.html"],
  theme: {
    extend: {
		backgroundImage: {
			'pattern': "url('./image/webg.jpg')"
		},
		colors: {
        'background': '#0a1519',
		'foreground': '#0acbe3',
		'gradstep1': '#0e4351',
		'gradstep2': '#142b44',
		'gradstep3': '#15394C',
      },
	  spacing: {
        '128': '32rem',
		'220': '55rem',
		'240': '60rem',
		'256': '64rem',
      }
	},
  },
  plugins: [],
}

