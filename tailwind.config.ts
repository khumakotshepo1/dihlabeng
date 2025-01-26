import type { Config } from "tailwindcss";

export default {

	darkMode: ["class"],

	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			backgroundImage: {
				'townhall': 'url("/img/core/townhall.webp")',
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
				lora: ['var(--font-lora)'],
				ralewayDots: ['var(--font-raleway-dots)'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				polarNight: {
					"50": "hsl(210, 6%, 92%)",
					"100": "hsl(210, 5%, 85%)",
					"200": "hsl(210, 5%, 70%)",
					"300": "hsl(210, 5%, 57%)",
					"400": "hsl(210, 5%, 39%)",
					"500": "hsl(210, 9%, 25%)",
					"600": "hsl(210, 7%, 21%)",
					"700": "hsl(210, 6%, 16%)",
					"800": "hsl(210, 6%, 10%)",
					"900": "hsl(210, 6%, 5%)"
				},
				snowStorm: {
					"50": "hsl(210, 17%, 97%)",
					"100": "hsl(210, 15%, 96%)",
					"200": "hsl(210, 13%, 91%)",
					"300": "hsl(210, 12%, 88%)",
					"400": "hsl(210, 11%, 84%)",
					"500": "hsl(210, 11%, 81%)",
					"600": "hsl(210, 8%, 70%)",
					"700": "hsl(210, 6%, 56%)",
					"800": "hsl(210, 5%, 39%)",
					"900": "hsl(210, 5%, 18%)"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},

	plugins: [require("tailwindcss-animate")],

} satisfies Config;
