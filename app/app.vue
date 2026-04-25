<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  title: 'Juanjo Salvador - Web Personal',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css',
      as: 'style'
    },
  ]
})
</script>

<template>
  <div class="is-mobile">
    <NavBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    opacity: 0.4;
  }


  p.is-justified {
    text-align: justify;
  }

  p {
      font-size: large;
      margin-bottom: 1.25em;
  }

  .slide-left-enter-from {
    transform: translateX(50%);
    opacity: 0;
  }

  .slide-left-leave-to {
    transform: translateX(-50%);
    opacity: 0;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-50%);
  }
  .slide-right-leave-to {
    opacity: 0;
    transform: translateX(50%);
  }

  .layout-up-enter-from {
    opacity: 0;
    transform: translateY(100px); /* Empieza un poco más abajo */
  }

  .layout-up-leave-to {
    opacity: 0;
    transform: translateY(-100px); /* Sale hacia arriba */
  }

  .layout-up-enter-active,
  .layout-up-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 0.25s;
  }
</style>
