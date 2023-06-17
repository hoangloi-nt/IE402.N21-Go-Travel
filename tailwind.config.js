/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"tour-card": "0px 20px 80px rgba(126, 121, 121, 0.1)",
				"sign-in": "16px 16px 48px rgba(0, 0, 0, 0.0995);",
			},
			colors: {
				"purple-1": "#6557B9",
				"grey-1": "#D8D8D8",
			},
		},
	},
	plugins: [],
};
