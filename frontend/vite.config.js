import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/street_naming_be/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
});
