import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        preview: resolve(__dirname, 'preview.html'),
        yasal: resolve(__dirname, 'yasal.html'),
        projeler: resolve(__dirname, 'projeler.html'),
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
