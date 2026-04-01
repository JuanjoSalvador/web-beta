<script lang="ts" setup>
  definePageMeta({
    layout: 'hero',
    pageOrder: 1
  })
</script>

<template>
  <div>
    <div class="columns">      
      <div class="column">
        <figure class="image">
          <img src="@/assets/images/pfp.jpg" class="is-rounded" alt="Fotografía en blanco y negro del autor">
        </figure>
      </div>  
      
      <div class="column">
        <div class="introduction">
          <p class="subtitle">¡Hola! Soy</p>
          <h1 class="title is-2">Juanjo Salvador</h1>
          <br />
          <p class="subtitle is-3">
              Soy <strong>desarrollador backend</strong>, 
              con conocimientos de <strong>Python</strong> y <strong>Java</strong>.
          </p>

          <p class="subtitle is-4">
            Aunque también tengo experiencia en <strong>frontend</strong>, <strong>DevOps</strong> y <strong>sistemas Linux</strong>.
          </p>
          <div class="social-buttons is-centered">
            <SocialButton size="5" platform="github" username="JuanjoSalvador" />
            <SocialButton size="5" platform="linkedin" username="jj-salvador" />
            <SocialButton size="5" platform="mastodon" username="jsalvador" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .introduction {
    padding-top: 10rem;
  }
}
</style>