// import { defineConfig } from 'vite';
// import solidPlugin from 'vite-plugin-solid';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
// // import { resolve } from 'path'

// // export default defineConfig({
// //   plugins: [
// //     solidPlugin(),
// //     viteStaticCopy({
// //       targets: [
// //         {
// //           src: 'manifest.json',
// //           dest: '.', // копирует в корень папки dist
// //         },
// //       ],
// //     }),
// //   ],
// //   server: {
// //     port: 3000,
// //   },
// //   build: {
// //     target: 'esnext',
// //     outDir: 'dist',
// //     rollupOptions: {
// //       input: {

// //         content: 'src/index.tsx',
// //         background: 'src/background.ts',
// //         home: 'home.html',
// //       },
// //       output: {
// //         entryFileNames: '[name].js',
// //       },
// //     },
// //   },
// // });

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
        home: resolve(__dirname, 'home.html'),

        content: 'src/content.ts',
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
