<script lang="ts" setup>
import convert from 'xml-js'

const { data: rss, error } = await useFetch('https://ingenieroynopuedo.es/feed.xml')
let entries;

if (rss.value) {
  const rss_json = convert.xml2js(rss.value, { compact: true, spaces: 4 })
  console.log(rss_json);
  entries = rss_json.feed.entry;
} else {
  console.error("No se pudo obtener el RSS:", error.value)
}
</script>

<template>
  <div>
    <h3 class="title is-3">
      Blog
    </h3>
    <div class="content">
      <p class="description is-justified">
      </p>
    </div>

    <div v-for="entry in entries">
      
      <a href="#" class="link">
        <h4 class="title is-4">
          {{ entry.title._text }}
        </h4>
      </a>
      <br/>
    </div>
    
  </div>
</template>