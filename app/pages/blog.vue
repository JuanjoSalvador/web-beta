<script lang="ts" setup>
import convert from 'xml-js'

definePageMeta({
  name_es: 'Blog',
  pageOrder: 4
})

const { data: rss, error } = await useFetch('https://ingenieroynopuedo.es/feed.xml')
let entries;

if (rss.value) {
  const rss_json = convert.xml2js(rss.value, { compact: true, spaces: 4 })
  entries = rss_json.feed.entry;
  console.log(entries)
} else {
  console.error("No se pudo obtener el RSS:", error.value)
}

const truncateWords = (text: string, limit: number) => {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= limit) return text;
  
  return words.slice(0, limit).join(' ') + '...';
}

</script>

<template>
  <section class="section">
    <h3 class="title is-3">
      Blog
    </h3>
    <div class="content">
      <p>
        Tengo un blog donde escribo sobre temas técnicos, publico mis notas, experiencias, y artículos sobre mis proyectos.
        El blog está separado de esta web, por lo que se puede acceder directamente de forma independiente.
      </p>
    </div>

    <h4 class="title is-4">
      Últimas entradas
    </h4>
    <div class="content">
      <p class="description is-justified">
      </p>
    </div>

    <div v-for="entry in entries">
      <time :datetime="entry.published._text">
        {{ new Date(entry.published._text).toLocaleDateString('es-ES', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        }) }}
      </time>
      <a :href="entry.link._attributes.href" class="link" target="_blank">
        <h5 class="title is-5">
          {{ entry.title._text }}
        </h5>
      </a>
      <hr/>
    </div>
  </section>
</template>

<style>
.content p {
  text-align: justify;
}
</style>