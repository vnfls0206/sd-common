import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from 'vite-plugin-require'
import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default(), reactRefresh()],
  optimizeDeps: {
    include: ['codemirror'],
  },
  css: {
    // Import PrismJS CSS file
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./node_modules/prismjs/themes/prism-tomorrow.css";
        `
      }
    }
  },
})
