import { defineConfig } from 'vite'
import vitePluginBinary from './src/main'

export default defineConfig({
  plugins: [vitePluginBinary()],
})
