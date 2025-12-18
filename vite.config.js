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
        legal: resolve(__dirname, 'legal.html'),
        project: resolve(__dirname, 'project-detail.html'),
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
