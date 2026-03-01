import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
    base: '/inctc/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
    },
    build: {
        target: 'esnext',
        minify: 'terser',
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    animations: ['framer-motion'],
                },
            },
        },
    },
});
