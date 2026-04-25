// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Fraunces:ital,wght@0,300;0,600;1,300;1,600&display=swap'
        }
      ]
    }
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-breaks']
    }
  },
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