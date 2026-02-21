import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',  // タイトル画面（今回作るもの）
        home: 'home.html',   // ホーム画面
        lobby: 'lobby.html', // ロビー画面
        game: 'game.html'    // 対局画面
      }
    }
  }
});
