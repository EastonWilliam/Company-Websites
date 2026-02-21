import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF7C7C",
				secondary: "#151515",
				accent: "#FF7C7C",
				background: "#FFFFFF",
				foreground: "#171717",
				hover: "#FF7C7CCC",
			},
		},
	},
	plugins: [],
};

export default config;
