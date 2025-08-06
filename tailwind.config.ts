import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				yellow: '#FABD2F',
        		orange: '#FE8019',
				red: '#FB4934',
				green: '#B8BB26',
				blue: '#83A598',
				purple: '#D3869B',
				aqua: '#8EC07C',
				gray: '#928374',
				brown: '#A8732D',
				pink: '#F47174',
				teal: '#4EC9B0',
				lime: '#C2E75F',
				cyan: '#3FDCEE',
				magenta: '#FF66C4',
				indigo: '#6C6FD0',
				olive: '#8A8D30',
				maroon: '#800000',
				gold: '#FFD700',
				peach: '#FFB347',
				navy: '#000080',
				coral: '#FF6F61',
				sand: '#C2B280',
				mint: '#AAF0D1',
				rust: '#B7410E',
				jade: '#00A86B',
				sky: '#87CEEB',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gruvbox: {
					blue: 'hsl(var(--gruvbox-blue))',
					purple: 'hsl(var(--gruvbox-purple))',
					aqua: 'hsl(var(--gruvbox-aqua))',
					orange: 'hsl(var(--gruvbox-orange))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'primary': 'var(--shadow-primary)',
				'card': 'var(--shadow-card)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
