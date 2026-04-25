<script lang="ts" setup>
import page from '~/content/pages/about.md?raw'

definePageMeta({
  name_es: 'Sobre mí',
  layout: 'default',
  pageOrder: 2
})

useSeoMeta({
  title: 'Sobre mí — Juanjo Salvador',
  description: 'Quién soy y de dónde vengo.',
})
</script>

<template>
  <div class="about-page">
    <div class="container">
      <div class="about-header">
        <p class="about-prompt">
          <span class="t-prompt">$</span>
          <span class="t-cmd">cat about.md</span>
        </p>
        <h1 class="about-title">
          Sobre mi
        </h1>
      </div>

      <figure class="image is-header-image">
        <img src="@/assets/images/pfp.avif" fetchpriority="high" class="is-rounded"
          alt="Fotografía en blanco y negro del autor">
      </figure>

      <MDC v-if="page" :value="page" class="prose" />

    </div>
  </div>
</template>

<style scoped>
.about-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
  color: var(--muted);
}
 
.t-prompt { color: var(--main); }
.t-cmd    { color: var(--white); }

.about-page {
  height: auto;
  padding: 6rem 2rem 5rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: var(--bg);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: justify;
}

/* ── HEADER ── */
.about-header {
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.05s both;
}

.about-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.about-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--muted);
}

.t-prompt {
  color: var(--main);
}

.t-cmd {
  color: var(--white);
}

/* ── PROSE ── */

/* :deep() necesario porque ContentRenderer renderiza fuera del scope */
.prose :deep(h1) {
  font-family: 'Fraunces', serif;
  text-align: justify;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.1s both;
}

.prose :deep(h2) {
  font-family: 'Fraunces', serif;
  font-size: 1.6rem;
  text-align: justify;
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
  opacity: 0;
  animation: fadeUp 0.5s ease 0.15s both;
}

.prose :deep(h3) {
  font-family: 'Fraunces', serif;
  text-align: justify;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.01em;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
}

.prose :deep(p) {
  font-size: 0.92rem;
  color: var(--text);
  line-height: 1.9;
  margin-bottom: 1.25rem;
  max-width: 100%;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.2s both;
}

.prose :deep(strong) {
  color: var(--white);
  font-weight: 500;
}

.prose :deep(em) {
  color: var(--muted);
  font-style: italic;
}

.prose :deep(a) {
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;
}

.prose :deep(a:hover) {
  color: var(--main);
  border-bottom-color: var(--main-dim);
}

.prose :deep(ul),
.prose :deep(ol) {
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
}

.prose :deep(li) {
  font-size: 0.92rem;
  color: var(--text);
  line-height: 1.9;
  margin-bottom: 0.4rem;
}

.prose :deep(li::marker) {
  color: var(--main);
}

.prose :deep(blockquote) {
  border-left: 2px solid var(--main-dim);
  padding: 0.5rem 0 0.5rem 1.25rem;
  margin: 1.5rem 0;
}

.prose :deep(blockquote p) {
  color: var(--muted);
  font-style: italic;
  margin-bottom: 0;
}

.prose :deep(code) {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--main);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82em;
  padding: 0.15em 0.4em;
  border-radius: 2px;
}

.prose :deep(pre) {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 1.25rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.prose :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.82rem;
  color: var(--text);
}

.prose :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2.5rem 0;
}

figure.is-header-image {
  width: 400px;
  margin: 0 auto;
  display: block;
  margin-bottom: 2em;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>