/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./blog/*.html"],
  theme: {
    extend: {
		colors: {
        'background': '#282828',
		'foreground': '#ebdbb2',
		'yellow': '#f0c674',
      },
	  spacing: {
        '128': '32rem',
		'256': '64rem',
      }
	},
  },
  plugins: [],
}

