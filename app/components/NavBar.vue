<script setup>
import { capitalize } from 'vue';

const router = useRouter()
const pages = router.getRoutes()
  .filter((page) => page.name != 'index')
  .sort((a, b) => (a.meta.pageOrder || 0) - (b.meta.pageOrder || 0))

let isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="main">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">JS<span style="color:var(--main)">.</span></a>
      <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" @click="toggleMenu" :class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-end">
        <NuxtLink to="/" alt="Link to home" class="navbar-item is-tab" @click="closeMenu">
            Inicio
          </NuxtLink>
          <NuxtLink v-for="page in pages" :to="page.path" class="navbar-item is-tab" @click="closeMenu">
            {{ capitalize(page.meta.name_es) }}
          </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  /* ── NAVBAR ── */
  .navbar {
    background-color: rgba(13,15,14,0.85) !important;
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border) !important;
  }

  .navbar-brand .navbar-item {
    font-family: 'Fraunces', serif !important;
    font-weight: 600;
    font-size: 1.05rem;
    color: var(--white) !important;
    letter-spacing: -0.02em;
  }

  .navbar-brand .navbar-item:hover {
    background: transparent !important;
    color: var(--main) !important;
  }

  .navbar-menu { background-color: transparent !important; }

  .navbar-end .navbar-item {
    color: var(--muted) !important;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .navbar-end .navbar-item:hover {
    background: transparent !important;
    color: var(--main) !important;
  }

  .navbar-burger span { background-color: var(--muted) !important; }
  .navbar-burger:hover span { background-color: var(--main) !important; }
  .navbar-menu.is-active {
    background-color: var(--surface) !important;
    border-top: 1px solid var(--border);
  }
</style>