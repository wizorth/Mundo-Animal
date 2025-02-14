import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite que otros dispositivos de la red accedan
    port: 5173, // Usa el puerto predeterminado o cámbialo si es necesario
  },
})
