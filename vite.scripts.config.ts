import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.tsx'),
      },
      output: {
        format: 'iife', // Формат IIFE для Chrome Extensions
        entryFileNames: '[name].js', // content.js, background.js
        chunkFileNames: 'assets-content/[name]-[hash].js',
        assetFileNames: 'assets-content/[name]-[hash][extname]',
      },
    },
    outDir: 'dist', // Вывод в ту же папку dist
    emptyOutDir: false, // Не очищаем dist, чтобы сохранить HTML-файлы
    target: 'esnext',
    minify: false, // Отключаем минификацию для отладки (опционально)
    sourcemap: true, // Включаем sourcemaps для отладки
  },
});
