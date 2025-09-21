import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/shopture-fe",
  plugins: [react(), tailwindcss()],
  preview: {
    port: 9090,
    host: true,
  },
  server: {
    port: 10100,
    host: true,
  },
});
