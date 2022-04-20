import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCss from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), UnoCss()],
});
