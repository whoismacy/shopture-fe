import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 9090,
    strictPort: true,
  },
  server: {
    port: 10100,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
