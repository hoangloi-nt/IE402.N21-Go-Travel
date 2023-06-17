/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"tour-card": "0px 20px 80px rgba(126, 121, 121, 0.1)",
			},
		},
	},
	plugins: [],
};
