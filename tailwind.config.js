/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'], // Correct way to add Poppins
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
