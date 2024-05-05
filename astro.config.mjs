import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://wondrous-salmiakki-294d9f.netlify.app/",
  integrations: [preact()]
});