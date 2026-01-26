// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.maarifhaque.com", // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date("2025-11-01"),
    }),
  ],
  adapter: vercel(),
});
