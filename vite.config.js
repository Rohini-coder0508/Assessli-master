// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 8080,
//     proxy: {
//       '/api': {
//         // target: 'https://assessli-chi.vercel.app/https://script.google.com',
//         target: 'http://localhost:8080/https://script.google.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/https://script.google.com/macros/s/AKfycbyJHMSe5UnkRS07JZGb5hsmLWFfECNOUaZsZ7ZWyrQ726ktWvQhVyz9xQAU9R_O5AmstA/exec', // Update this to the actual API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
