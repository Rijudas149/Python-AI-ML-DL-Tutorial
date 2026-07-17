import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/data/curriculum/module')) {
            return 'curriculum-' + id.split('/').pop()?.replace('.ts', '')
          }
        },
      },
    },
  },
})
