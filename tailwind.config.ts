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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))', // Maps to PRD page background (BLUE)
				foreground: 'hsl(var(--foreground))', // Maps to PRD primaryText (BLACK)
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Maps to PRD accentBlue (BLUE)
					foreground: 'hsl(var(--primary-foreground))' // Maps to PRD surface (WHITE)
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
					foreground: 'hsl(var(--muted-foreground))' // Maps to PRD secondaryText (GRAY)
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', // Maps to PRD accentBlue (BLUE)
					foreground: 'hsl(var(--accent-foreground))' // Maps to PRD surface (WHITE)
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))', // Maps to PRD surface (WHITE)
					foreground: 'hsl(var(--popover-foreground))' // Maps to PRD primaryText (BLACK)
				},
				card: {
					DEFAULT: 'hsl(var(--card))', // Maps to PRD surface (WHITE)
					foreground: 'hsl(var(--card-foreground))' // Maps to PRD primaryText (BLACK)
				},
        link: 'hsl(var(--link))' // Added for PRD accentLink
				// Removed sidebar colors as they are not in the PRD
			},
			borderRadius: {
        // --radius is set to 0.375rem (rounded-md) in index.css
				lg: 'var(--radius)', // Becomes 0.375rem (effectively 'md' from PRD perspective)
				md: 'calc(var(--radius) - 2px)', // Becomes smaller than PRD's 'md'
				sm: 'calc(var(--radius) - 4px)' // Becomes even smaller
        // This means Tailwind's rounded-lg utility will use PRD's default 'rounded-md' value.
        // And Tailwind's rounded-md utility will use calc(0.375rem - 2px).
        // If the intention was for Tailwind's 'md' utility to BE 'rounded-md' (0.375rem), then --radius should be used differently or radius keys remapped.
        // Given PRD 'default: rounded-md', and Shadcn sets 'lg: var(--radius)', we set --radius to be 'rounded-md' value (0.375rem).
			},
      // PRD typography.primaryFont is 'sans-serif'. Tailwind's default 'sans' stack is already a sans-serif font stack.
      // No explicit fontFamily changes needed here unless a specific font family string was provided.
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
