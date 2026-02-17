// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/scripts", "@nuxt/ui", "@nuxt/content", "@nuxthub/core", "nuxt-studio"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },
});
