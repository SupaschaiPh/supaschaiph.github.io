/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'

export default {
	darkMode: 'class',
	content: ['./public/**/*.astro',
		'./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
		'node_modules/preline/dist/*.js'],
	theme: {
		extend: {},
	},
	plugins: [
		preline
	],
}
