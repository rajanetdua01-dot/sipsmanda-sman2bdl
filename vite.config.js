import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  
  build: {
    minify: false, // ← Nonaktifkan minify sementara
    outDir: 'dist',
    sourcemap: false
  },
  
  server: {
    port: 3000,
    host: true
  }
})