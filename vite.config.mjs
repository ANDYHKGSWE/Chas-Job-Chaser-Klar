import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		open: true,
	},
	root: '.', // Se till att Vite letar efter index.html i projektets rotmapp
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
});
