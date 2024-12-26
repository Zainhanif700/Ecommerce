import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-alice-carousel'], 
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Make sure .jsx is included
  },
})
