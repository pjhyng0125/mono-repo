import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Emotion 사용 시: @vitejs/plugin-react가 자동으로 지원
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // src 경로 alias 설정
      "~config": path.resolve(__dirname, "../../packages/config"), // 공통 config 접근
    },
  },
});
