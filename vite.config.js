import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // или другая директория, которую вы указали при настройке Firebase Hosting
  },
  plugins: [react()],
})
