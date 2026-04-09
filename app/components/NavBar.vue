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
  <nav class="navbar is-fixed-top" aria-label="main navigation" role="navigation" id="main">
    <div id="navbarBrand">
      <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" @click="toggleMenu" :class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
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
    <div id="navbarMain" class="navbar-menu">
      <div class="navbar-start">
      </div>
  
      <div class="navbar-end">
      </div>
    </div>
  </nav>
</template>