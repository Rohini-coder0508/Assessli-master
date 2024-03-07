import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/https://script.google.com/macros/s/AKfycbw3A0cxmWzVZ0zio290G_NeRdG49p-TyIN_pMrK0ayohy-Ij1HHj6hgfj0i7zUJVGVx/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
