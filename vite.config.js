import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/main.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [],
});
