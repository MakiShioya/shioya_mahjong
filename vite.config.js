import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // ロビー
        game: 'game.html',  // 対局
        home: 'home.html'   // ホーム
      }
    }
  }
});
