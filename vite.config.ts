import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'

// Plugin to copy CNAME and ensure .nojekyll exists
const copyFilesPlugin = () => ({
  name: 'copy-files',
  closeBundle() {
    // Copy CNAME if it exists
    if (existsSync('CNAME')) {
      copyFileSync('CNAME', path.resolve(__dirname, 'dist/CNAME'))
    }
    // Ensure .nojekyll exists
    if (!existsSync('dist/.nojekyll')) {
      copyFileSync(path.resolve(__dirname, 'public/.nojekyll'), path.resolve(__dirname, 'dist/.nojekyll'))
    }
  },
})

export default defineConfig({
  base: '/', // Base URL for custom domain (tokyowebsites.com)
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    copyFilesPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
