import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					400: '#090D1F',
					600: '#1A1A1A',
				},
				light: {
					400: '#FFF',
				},
			},
		},
	},
	plugins: [],
}
export default config
