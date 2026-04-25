<script lang="ts" setup>
import ProjectCard from '~/components/ProjectCard.vue'

definePageMeta({
  name_es: 'Proyectos',
  layout: 'default',
  pageOrder: 4
})

useSeoMeta({
  title: 'Proyectos — Juanjo Salvador',
  description: 'Proyectos personales y profesionales de Juanjo Salvador.',
})

// TODO: reemplazar con proyectos reales
const projects = [
  {
    title: 'Nombre del proyecto',
    description: 'Descripción corta del proyecto.',
    url: 'https://github.com/tu-usuario/proyecto',
    tags: ['Python', 'Docker'],
  },
  {
    title: 'Nombre del proyecto',
    description: 'Descripción corta del proyecto.',
    url: 'https://github.com/tu-usuario/proyecto',
    tags: ['Python', 'Docker'],
  },
  {
    title: 'Nombre del proyecto',
    description: 'Descripción corta del proyecto.',
    url: 'https://github.com/tu-usuario/proyecto',
    tags: ['Python', 'Docker'],
  },
  {
    title: 'Nombre del proyecto',
    description: 'Descripción corta del proyecto.',
    url: 'https://github.com/tu-usuario/proyecto',
    tags: ['Python', 'Docker'],
  },
]
</script>

<template>
  <div class="projects-page">
    <div class="container">

      <div class="projects-header">
        <p class="projects-prompt">
          <span class="t-prompt">$</span>
          <span class="t-cmd">ls proyectos/</span>
        </p>
        <h1 class="projects-title">
          Proyectos propios
        </h1>
        <p class="projects-lead">
          Cosas que he construido por curiosidad, necesidad o pura diversión.
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div v-if="projects.length" class="projects-grid">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          v-bind="project"
          :style="`--delay: ${0.1 + i * 0.1}s`"
          class="project-card-animated"
        />
      </div>

      <!-- Placeholder -->
      <div v-else class="placeholder-box">
        <p class="placeholder-line">
          <span class="t-prompt">$</span>
          <span class="t-cmd">ls -la</span>
        </p>
        <p class="placeholder-output">
          <span class="t-muted">total 0</span>
        </p>
        <p class="placeholder-output">
          <span class="t-muted">drwxr-xr-x  juanjo  —  </span>
          <span class="t-amber">próximamente</span>
        </p>
        <p class="placeholder-line mt-4">
          <span class="t-prompt">$</span>
          <span class="cursor" />
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 6rem 2rem 5rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: var(--bg);
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

/* ── HEADER ── */
.projects-header {
  margin-bottom: 3.5rem;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.05s both;
}

.projects-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
  color: var(--muted);
}

.t-prompt { color: var(--main); }
.t-cmd    { color: var(--white); }
.t-muted  { color: var(--muted); }
.t-amber  { color: var(--amber); }

.projects-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.projects-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--main);
}

.projects-lead {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.85;
}

/* ── GRID ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.project-card-animated {
  opacity: 0;
  animation: fadeUp 0.5s ease var(--delay) both;
}

/* ── PLACEHOLDER ── */
.placeholder-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 2rem;
  font-size: 0.82rem;
  line-height: 2;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.2s both;
}

.placeholder-line {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.placeholder-output {
  padding-left: 1.4rem;
}

.mt-4 { margin-top: 1rem; }

.cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--main);
  vertical-align: text-bottom;
  animation: blink 1s step-end 0.5s infinite, fadeIn 0s ease 0.5s both;
  opacity: 0;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}

@keyframes blink {
  0%, 100% { opacity: 1; } 50% { opacity: 0; }
}
</style>