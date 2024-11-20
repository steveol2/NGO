import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Relative paths for deployment
  build: {
    outDir: "dist", // Output folder for the build
  },
  server: {
    port: 3000, // Optional: Specify a custom port for local development
  },
  resolve: {
    alias: {
      // Optional: Resolve aliases for imports if needed
      "@": "/src",
    },
  },
});
