import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "package",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.jsx",
        "./Header": "./src/components/Header.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 5005,
    strictPort: true,
    cors: true,
  },
});
