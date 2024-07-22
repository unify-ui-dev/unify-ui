import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import { transformerNotationDiff } from "shikiji-transformers";
import unoCSS from "unocss/astro";
import db from "@astrojs/db";
import dynamicImport from 'astro-dynamic-import';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx(), db(), unoCSS({
    injectReset: true
  }), dynamicImport()],
  redirects: {
    "/docs": {
      status: 302,
      destination: "/docs/introduction"
    },
    "/preset": {
      status: 302,
      destination: "/preset/introduction"
    },
    "/components": {
      status: 302,
      destination: "/components/accordion"
    }
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      transformers: [transformerNotationDiff()]
    }
  },
  vite: {
    css: {
      transformer: "lightningcss"
    },
    build: {
      cssMinify: 'lightningcss'
    }
  },
  output: "hybrid",
  adapter: vercel(),
});