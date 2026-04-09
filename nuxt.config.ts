// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        'xml-js',
        'remark-gfm',
        'remark-mdc',
        'remark-rehype',
        'rehype-raw',
        'unified'
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/critters',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content'
  ]
})