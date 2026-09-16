import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

// 门户与工作台子应用：qiankun 接入 + 独立运行双模式
export default defineConfig({
  plugins: [
    react(),
    qiankun('app-portal', { useDevMode: true }),
  ],
  resolve: {
    alias: [
      // 命名导出（renderWithQiankun 等）在 es/helper.js，包无 exports 字段需手动指向
      { find: /^vite-plugin-qiankun\/helper$/, replacement: 'vite-plugin-qiankun/es/helper.js' },
    ],
  },
  server: { port: 8101, cors: true },
});
