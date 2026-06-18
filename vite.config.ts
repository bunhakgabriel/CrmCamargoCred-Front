import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['d6a8-2001-1284-f514-c8e3-79e1-4944-7eeb-a716.ngrok-free.app'],
    proxy: {
      '/ConfigGestorCrmApi': {
        target: 'http://3.14.7.116:8000',  // URL do seu backend
        changeOrigin: true,               // Faz a troca de origem para evitar problemas com CORS
        secure: false, 
      },
    },
  },
})
