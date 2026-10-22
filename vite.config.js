import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build` produit le site + le tableau de bord (admin.html) dans dist/
// `npm run build:single` produit un seul fichier HTML du site (pratique pour un aperçu)
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: mode === 'single'
    ? { outDir: 'dist-single' }
    : { outDir: 'dist', rollupOptions: { input: { main: 'index.html', admin: 'admin.html' } } },
}));
