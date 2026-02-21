import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // 現在はロビー、後でホーム画面に
        game: resolve(__dirname, 'game.html')   // 対局画面
      }
    }
  }
});
