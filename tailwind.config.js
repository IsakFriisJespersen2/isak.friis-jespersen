/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#18262B',
				secondary: '#005f73',
				tertiary: '#0a9396',
				quaternary: '#94d2bd',
				quinary: '#e9d8a6',
				senary: '#ee9b00'
			}
		}
	},
	plugins: []
};
