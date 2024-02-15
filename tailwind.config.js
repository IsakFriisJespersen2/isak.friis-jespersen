/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sbab: ['var(--font-sbab)']
			},
			fontSize: {
				xxs: ['0.625rem', '0.75rem'],
				xs: ['0.75rem', '1rem'], // 12px / 16px
				sm: ['0.875rem', '1.25rem'], // 14px / 20px
				base: ['1rem', '1.5rem'], // 16px / 24px
				md: ['1.125rem', '1.5rem'], // 18px / 24px
				lg: ['1.25rem', '1.5rem'], // 20px / 24px
				xl: ['1.5rem', '2rem'], // 24px / 32px
				'2xl': ['2rem', '2.5rem'], // 32px / 40px
				'3xl': ['2.5rem', '3rem'], // 40px / 48px
				'4xl': ['3rem', '3.5rem'], // 48px / 56px
				'5xl': ['3.5rem', '4rem'] // 56px / 64px
			},
			fontWeight: {
				normal: 400,
				medium: 600,
				semibold: 600,
				display: 600,
				bold: 700
			},
			boxShadow: {
				error: '0 0 0 2px rgba(221, 51, 34, 1)',
				focus: '0 0 0 2px rgba(17, 85, 238, 1)',
			},
			colors: {
				primary: '#18262B',
				secondary: '#005f73',
				tertiary: '#0a9396',
				quaternary: '#94d2bd',
				quinary: '#e9d8a6',
				senary: '#ee9b00'
			},
			screens: {
				desktop: { max: '1536px' },
				// => @media (min-width: 1536px) { ... }
				laptop: { max: '1280px' },
				// => @media (min-width: 1280) { ... }
				'tablet-lg': { max: '1024px' },
				// => @media (min-width: 1024px) { ... }
				tablet: { max: '768px' },
				// => @media (min-width: 640px) { ... }
				mobile: { max: '640px' },
				// => @media (min-width: 350px { ... }

			}
		},
	},
	plugins: []
};
