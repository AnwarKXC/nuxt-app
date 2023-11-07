// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path"

export default defineNuxtConfig({
   modules: ["nuxt-swiper", "@nuxt/image", "@nuxtjs/i18n", "@vite-pwa/nuxt"],
   pwa: {
      manifest: {
         name: "Refine",
         short_name: "Refine",
         theme_color: "#ffffff",
         description: "Download Refine website",
         icons: [
            {
               src: "/64.svg",
               sizes: "64x64",
            },
            {
               src: "/144.svg",
               sizes: "144x144",
            },
            {
               src: "/192.svg",
               sizes: "192x192",
            },
            {
               src: "/512.svg",
               sizes: "512x512",
            },
            {
               src: "/1024.svg",
               sizes: "1024x1024",
            },
         ],
      },
      workbox: {
         navigateFallback: "/",
         sourcemap: true,
         runtimeCaching: [
            {
               urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
               handler: "NetworkOnly",
               options: {
                  cacheName: "Refine",
                  expiration: {
                     maxEntries: 10,
                     maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                  },
                  cacheableResponse: {
                     statuses: [0, 200],
                  },
               },
            },
         ],
      },
      devOptions: {
         enabled: true,
         suppressWarnings: true,
         type: "module",
      },
   },
   i18n: {
      vueI18n: "./i18n.config.js", // if you are using custom path, default
   },
   app: {
      head: {
         title: "Refine",
         
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         link: [{ rel: "icon", type: "image/x-icon", href: "/64.svg" }],
      },
   },
   alias: {
      assets: "/<rootDir>/assets",
      "@": resolve(__dirname, "/"),
   },
   devtools: { enabled: true },
   css: ["/assets/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
})
