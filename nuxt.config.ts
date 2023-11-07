import { resolve } from "path"

export default {
   buildModules: ["@nuxt/pwa"],
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
               handler: "CacheFirst", // Use "CacheFirst" strategy
               options: {
                  cacheName: "Refine",
                  expiration: {
                     maxEntries: 10,
                     maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                  },
                  cacheableResponse: {
                     statuses: [0],
                  },
               },
            },
            {
               urlPattern: /\.(js|css|png|jpg|svg)$/, // Modify this pattern to match your resources
               handler: "CacheFirst", // Use "CacheFirst" strategy
               options: {
                  cacheName: "Refine-assets",
                  expiration: {
                     maxEntries: 50, // Adjust as needed
                     maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                  },
                  cacheableResponse: {
                     statuses: [0],
                  },
               },
            },
         ],
      },
   },
   head: {
      title: "Refine",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/64.svg" }],
   },
   alias: {
      assets: resolve(__dirname, "assets"),
      "@": resolve(__dirname),
   },
   css: ["/assets/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
}
