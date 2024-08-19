/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
// 	plugins: [react()],
// 	resolve: {
// 		alias: {
// 			'@': '/src',
// 		},
// 	},
// });

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./src/**/*.{js,jsx,ts,tsx}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [require('@tailwindcss/forms')],
// };
