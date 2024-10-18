import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#a3d5c6', 600: '#005646', 900: '#003c30', 950: '#002b22' };
const gray = { 100: '#f3f7fb', 200: '#e6eff8', 300: '#b9c3ce', 400: '#7a8ea2', 500: '#485a6d', 700: '#293a4c', 800: '#182839', 900: '#121921' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,yml}'],
	theme: {
		extend: {
      colors: { accent, gray },
    },
	},
	plugins: [starlightPlugin()],
}