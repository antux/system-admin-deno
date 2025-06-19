import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    AstroPWA({
      registerType: "autoUpdate", // Auto-actualización
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Mi App Astro PWA",
        short_name: "AstroPWA",
        description: "Una PWA hecha con Astro",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
