import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/visits-frontend',
  server: {
    port: 6003,
    cors: false
  }
})
