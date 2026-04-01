<script setup>
import { capitalize } from 'vue';


const router = useRouter()
const pages = router.getRoutes().filter((page) => page.name != 'index')
console.log(pages)
</script>

<template>
  <nav class="navbar is-fixed-top" aria-label="main navigation" role="navigation" id="main">
    <div id="navbarMain" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" alt="Link to home" class="navbar-item">
            <strong>Inicio</strong>
        </NuxtLink>
      </div>
  
      <div class="navbar-end">
            <NuxtLink v-for="page in pages" :to="page.path" alt="Link to home" class="navbar-item">
              <strong>{{ capitalize(page.name) }}</strong>
            </NuxtLink>
          <!-- <a class="navbar-item" data-theme-toggle="" aria-label="Change to light theme"><strong>Dark 🌙</strong></a> -->
      </div>
    </div>
  </nav>
</template>