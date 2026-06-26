import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
        'crmcamargocred.fun',
        'www.crmcamargocred.fun'
        ],
    proxy: {
      '/ConfigGestorCrmApi': {
        target: 'http://localhost:8000',  // URL do seu backend
        changeOrigin: true,               // Faz a troca de origem para evitar problemas com CORS
        secure: false, 
      },
    },
  },
})