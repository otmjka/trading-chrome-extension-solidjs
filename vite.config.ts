import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      input: {
        // popup: resolve(__dirname, 'popup.html'),
        // home: resolve(__dirname, 'home.html'),

        // content: 'src/content.tsx',
        background: 'src/background.ts',
      },
      output: {
        entryFileNames: '[name].js', // Ensure popup.js and home.js stay at root
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
  },
});
