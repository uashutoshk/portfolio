import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const hallmarkStamp = `/* Hallmark v2.0.0 | theme: catppuccin (by request) | genre: atmospheric | deal: manual
   critique: self-run, verified by render at 1280x800 and 390x844, mocha + latte
   waive: 63 decorative status dots -- the network-ops conceit is the committed world (user brief)
   waive: 54 mono labels -- mono is the material here, not a label face */`;

function hallmarkStampPlugin() {
  return {
    name: 'hallmark-stamp',
    closeBundle() {
      const distDir = path.resolve('dist/assets');
      fs.readdirSync(distDir).forEach(file => {
        if (file.endsWith('.css')) {
          const filePath = path.join(distDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          if (!content.startsWith('/* Hallmark')) {
            fs.writeFileSync(filePath, hallmarkStamp + '\n' + content);
          }
        }
      });
    },
  };
}

export default defineConfig({
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    minify: 'esbuild',
  },
  plugins: [hallmarkStampPlugin()],
});
