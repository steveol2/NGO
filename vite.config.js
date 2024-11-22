import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
      "@": path.resolve(__dirname, "src"), // Correct alias for src folder
    },
  },
});
