import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_animations.scss";
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_helpers.scss";
        `
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
