import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import sass from 'sass';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [
        react(), 
        tailwindcss()
    ],
    css: {
        preprocessorOptions: {
            scss: {
            implementation: sass,
            },
        },
    },
    resolve: {
        alias: {
            '@': "/src",
            '@assets': "/src/assets",
            '@components': "/src/components",
        },
    },
}));
