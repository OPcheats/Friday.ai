// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Use the Netlify preset so Nitro outputs a Netlify Functions-compatible handler.
  //
  // IMPORTANT: @lovable.dev/vite-tanstack-config hardcodes output.serverDir = "dist/server"
  // regardless of preset. We must explicitly override output here so the function
  // lands in .netlify/server/ — the directory our netlify.toml [functions] block points to.
  // The spread `...userNitroOpts.output` in the lovable config means our output wins.
  nitro: {
    preset: "netlify",
    output: {
      dir: ".netlify",
      serverDir: ".netlify/server",
      publicDir: "dist/client",
    },
  },
});
