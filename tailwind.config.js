/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	colors: {
  		'dark-blue': '#122b39',
  		'dark-navy': '#0a3147',
		'dark-red':'#FF0000',
  		navy: '#1D267D',
  		purple: '#5C469C',
  		'light-purple': '#D4ADFC',
  		'light-blue': '#5ae0cc',
  		'sky-blue': '#6EACDA',
  		beige: '#E2E2B6',
  		'brand-primary': '#008000',
  		'surface-neutral': '#FFFFFF',
  		'surface-background': '#F4F5F9',
  		'surface-background-2': '#EEFFF0',
  		'surface-border': '#DBDCDE',
  		'text-primary': '#3A3541',
  		'text-light': '#89868D',
  		'text-disable': '#B4B2B7',
  		'gradient-start': '#030F2A',
  		'gradient-end': '#008E76',
  		'shades-color-700': '#009863',
  		'shades-color-600': '#00c285',
  		'shades-color-500': '#37cfa2',
  		'shades-color-400': '#61d9bc',
  		'shades-color-300': '#86e2d3',
  		'shades-color-200': '#adebe5',
  		'shades-color-100': '#e0f7f6',
  		'button-edit': '#007AFF',
  		'button-active-text': '#3EB900',
  		'button-active-font': '#E7FFF4',
  		'button-inactive-font': '#F6D1DA',
  		'button-inactive-text': '#F93131'
  	},
  	fontFamily: {
  		sans: ["Lato", "sans-serif"]
  	},
  	fontSize: {
  		'display-large': ["32px", { fontWeight: "900" }],
  		'display-medium': ["30px", { fontWeight: "700" }],
  		'display-small': ["28px", { fontWeight: "700" }],
  		'heading-large': ["26px", { fontWeight: "900" }],
  		'heading-medium': ["24px", { fontWeight: "700" }],
  		'heading-small': ["22px", { fontWeight: "700" }],
  		'title-large': ["20px", { fontWeight: "500" }],
  		'title-medium': ["18px", { fontWeight: "500" }],
  		'title-small': ["16px", { fontWeight: "500" }],
  		'body-large': ["16px", { fontWeight: "400" }],
  		'body-medium': ["14px", { fontWeight: "400" }],
  		'body-small': ["12px", { fontWeight: "400" }]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};