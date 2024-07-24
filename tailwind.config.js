/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#006699",
				secondary: {
					100: "#d5dfe2",
					200: "#838688",
				},
				dark: "#111111",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "3rem",
				},
			},
		},
	},
	plugins: [],
};
