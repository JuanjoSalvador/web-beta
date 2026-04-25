<script lang="ts" setup>
import convert from 'xml-js'

definePageMeta({
  name_es: 'Blog',
  layout: 'default',
  pageOrder: 5
})

useSeoMeta({
  title: 'Blog — Juanjo Salvador',
  description: 'Artículos sobre desarrollo, Linux, herramientas y reflexiones profesionales.',
})

const { data: rss, error } = await useFetch('https://ingenieroynopuedo.es/feed.xml')
let entries;

if (rss.value) {
  const rss_json = convert.xml2js(rss.value, { compact: true, spaces: 4 })
  entries = rss_json.feed.entry
} else {
  console.error("No se pudo obtener el RSS:", error.value)
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
</script>

<template>
  <div class="blog-page">
    <div class="container">

      <div class="blog-header">
        <p class="blog-prompt">
          <span class="t-prompt">$</span>
          <span class="t-cmd">curl ingenieroynopuedo.es/feed.xml</span>
        </p>
        <h1 class="blog-title">
          Últimas entradas del blog
        </h1>
        <p class="blog-lead">
          Escribo en
          <NuxtLink to="https://ingenieroynopuedo.es" target="_blank" rel="noopener" class="external-link">
            ingenieroynopuedo.es
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </NuxtLink>
          sobre desarrollo, Linux y reflexiones del día a día.
        </p>
      </div>

      <!-- Error -->
      <p v-if="error" class="feed-error">
        <span class="t-bool">!</span> No se pudo cargar el feed RSS.
      </p>

      <!-- Post list -->
      <ul v-else-if="entries" class="post-list">
        <li
          v-for="(entry, i) in entries"
          :key="i"
          class="post-item"
          :style="`--delay: ${0.1 + i * 0.07}s`"
        >
          <NuxtLink :to="entry.link._attributes.href" target="_blank" rel="noopener" class="post-link">
            <time class="post-date" :datetime="entry.published._text">
              {{ formatDate(entry.published._text) }}
            </time>
            <span class="post-title">{{ entry.title._text }}</span>
            <svg class="post-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </NuxtLink>
        </li>
      </ul>

      <!-- Loading -->
      <p v-else class="feed-loading">
        <span class="cursor" /> Cargando entradas...
      </p>

    </div>
  </div>
</template>

<style scoped>
.blog-page {
  min-height: 100vh;
  padding: 6rem 2rem 5rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: var(--bg);
}

.container {
  max-width: 720px;
  margin: 0 auto;
}

/* ── HEADER ── */
.blog-header {
  margin-bottom: 3.5rem;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.05s both;
}

.blog-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
  color: var(--muted);
}

.t-prompt { color: var(--main); }
.t-cmd    { color: var(--white); }
.t-bool   { color: #ff8c69; }

.blog-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.blog-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--main);
}

.blog-lead {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.85;
}

.external-link {
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1px;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s, border-color 0.2s;
}

.external-link:hover {
  color: var(--main);
  border-bottom-color: var(--main-dim);
}

/* ── STATES ── */
.feed-error,
.feed-loading {
  font-size: 0.82rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 2rem;
}

/* ── POST LIST ── */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--border);
}

.post-item {
  opacity: 0;
  animation: fadeUp 0.4s ease var(--delay) both;
  border-bottom: 1px solid var(--border);
}

.post-link {
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.1rem 0.5rem;
  text-decoration: none;
  transition: background 0.2s, padding 0.2s;
  border-radius: 2px;
}

.post-link:hover {
  background: var(--surface);
  padding-left: 1rem;
  padding-right: 1rem;
}

.post-link:hover .post-title {
  color: var(--main);
}

.post-link:hover .post-arrow {
  color: var(--main);
  transform: translateX(3px);
}

.post-date {
  font-size: 0.68rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.post-title {
  font-size: 0.88rem;
  color: var(--text);
  line-height: 1.4;
  transition: color 0.2s;
}

.post-arrow {
  color: var(--muted);
  flex-shrink: 0;
  transition: color 0.2s, transform 0.2s;
}

/* Loading cursor */
.cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--main);
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  .post-link {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 0.3rem 1rem;
  }

  .post-date {
    grid-column: 1;
    grid-row: 1;
  }

  .post-title {
    grid-column: 1;
    grid-row: 2;
  }

  .post-arrow {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
  }
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; } 50% { opacity: 0; }
}
</style>