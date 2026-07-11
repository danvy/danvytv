// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://danvy.tv",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  // The Hugo site served posts under /posts. Keep those URLs alive for inbound
  // links and search engines. (The legacy /index.xml feed is a real endpoint,
  // not a redirect — see src/pages/index.xml.js.)
  redirects: {
    "/posts": "/blog",
    "/posts/[...id]": "/blog/[...id]",
  },
  integrations: [
    // Redirect stubs shouldn't be advertised as canonical URLs.
    sitemap({ filter: (page) => !page.includes("/posts") }),
    pagefind(),
  ],
});
