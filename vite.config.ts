import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-alice-carousel'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    allowedHosts: ['*'],
    proxy: {
      '/api': 'https://lowtechgmbh-d4hbh6dqcza7b0bf.canadacentral-01.azurewebsites.net', 
    },
  },
})
