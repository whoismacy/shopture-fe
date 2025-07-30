import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 9090,
    host: true,
  },
  server: {
    port: 10100,
    host: true,
  },
});
