import { defineConfig } from 'vite';

// Corrected configuration below
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
