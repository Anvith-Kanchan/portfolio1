import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cloudflare Pages serves this app from the domain root.
export default defineConfig({ plugins: [react()], base: '/' });
