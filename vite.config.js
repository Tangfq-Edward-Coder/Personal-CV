import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Personal-CV/',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
})
