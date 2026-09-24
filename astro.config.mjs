import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://zeniconsulting.com",
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});