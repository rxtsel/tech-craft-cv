import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
