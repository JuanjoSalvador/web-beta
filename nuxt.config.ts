// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/style/variables.css',
    '@/assets/style/commons.css'
  ],
  app: {
    pageTransition: { name: 'slide', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' },
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ]
})