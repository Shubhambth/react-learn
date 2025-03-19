import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: [
      "b941d6df-59cb-4087-8d7d-555aa302de4a-00-5qs21w7es1ho.sisko.replit.dev"
    ]
  }
})
