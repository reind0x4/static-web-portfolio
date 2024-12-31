import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Direktori keluaran
    rollupOptions: {
      input: './index.html', // File HTML utama
    },
  },
});
