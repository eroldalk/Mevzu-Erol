import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Vercel kök alan adında (mevzu-erol.vercel.app) yayınlanıyor
  server: { port: 5174, strictPort: true },
});
