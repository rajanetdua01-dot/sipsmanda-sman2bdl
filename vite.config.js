import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // Konfigurasi build untuk production
  build: {
    outDir: 'dist',
    sourcemap: false, // Nonaktifkan sourcemap untuk production
    rollupOptions: {
      output: {
        // Code splitting untuk optimize loading
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia']
        },
        // Naming file yang konsisten
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Minify untuk ukuran file lebih kecil
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log di production
        drop_debugger: true
      }
    }
  },
  
  // Konfigurasi server development
  server: {
    port: 3000,
    host: true, // Listen di semua network interfaces
    open: true, // Auto open browser
    cors: true
  },
  
  // Konfigurasi preview
  preview: {
    port: 4173,
    host: true
  },
  
  // Konfigurasi resolve
  resolve: {
    alias: {
      '@': '/src' // Alias untuk path src
    }
  },
  
  // Optimasi CSS
  css: {
    devSourcemap: false // Nonaktifkan sourcemap CSS di development
  }
})