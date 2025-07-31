import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: "src/pages",
      extensions: ["tsx"],
    }),
  ],
  resolve: {
    alias: {},
  },
  server: {
    port: 3000,
    open: true,
  },
});
