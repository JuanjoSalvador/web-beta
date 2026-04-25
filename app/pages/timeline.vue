<script lang="ts" setup>
definePageMeta({
  name_es: 'Trayectoria profesional',
  layout: 'default',
  pageOrder: 3
})

useSeoMeta({
  title: 'Sobre mí — Juanjo Salvador',
  description: 'Trayectoria profesional de Juanjo Salvador, desarrollador backend.',
})

const view = ref('background')

const timeline = [
  {
    year: '2016',
    title: 'Inicio de carrera',
    body: 'Termino el ciclo de <strong>Técnico Superior en Desarrollo de Aplicaciones Web</strong> y doy mis primeros pasos como desarrollador profesional.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Java'],
  },
  {
    year: '2017 – 2019',
    title: 'Backend & frontend',
    body: 'Trabajo en varios proyectos combinando desarrollo <strong>backend con Java y Spring</strong> y frontend con <strong>Angular</strong>. Aprendo a moverme bien en toda la pila.',
    tags: ['Java', 'Spring', 'Angular'],
  },
  {
    year: '2020 – 2021',
    title: 'Python & Django',
    body: 'Salto al ecosistema Python. Desarrollo APIs y aplicaciones web con <strong>Django y Flask</strong>, y empiezo a trabajar con entornos <strong>Linux y Docker</strong> en el día a día.',
    tags: ['Python', 'Django', 'Flask', 'Docker', 'Linux'],
  },
  {
    year: '2022',
    title: 'Especialización en ciberseguridad',
    body: 'Completo un curso de especialización de FP en <strong>ciberseguridad</strong>. Aunque no lo ejerzo profesionalmente, amplía mucho mi visión sobre el desarrollo seguro.',
    tags: ['Ciberseguridad'],
  },
  {
    year: '2023',
    title: 'Desarrollo de videojuegos & RV',
    body: 'Otro curso de especialización, esta vez en <strong>desarrollo de videojuegos y realidad virtual</strong>. Curiosidad pura: siempre fui más aprendiz que maestro.',
    tags: ['Videojuegos', 'RV'],
  },
  {
    year: '2024 – hoy',
    title: 'Vue & Nuxt',
    body: 'Me adentro en el ecosistema <strong>Vue y Nuxt</strong> para el frontend. Sigo apostando por Python en backend y por Linux como entorno de trabajo principal.',
    tags: ['Vue', 'Nuxt', 'Python', 'Linux'],
    current: true,
  },
]
</script>

<template>
  <div class="about-page"> 
      <div class="about-header">
        <p class="about-prompt">
          <span class="t-prompt">$</span>
          <span class="t-cmd">cat trasfondo.md</span>
        </p>
        <h1 class="about-title">
          Trasfondo profesional
        </h1>
        <p class="about-lead">
          Soy de los que creen que un desarrollador curioso vale más que uno especializado.
          Aquí va la versión honesta de cómo he llegado hasta aquí.
        </p>
      </div>
 
      <div class="timeline">
        <div
          v-for="(item, i) in timeline"
          :key="i"
          class="timeline-item"
          :class="{ 'is-current': item.current }"
          :style="`--delay: ${0.1 + i * 0.12}s`"
        >
          <div class="timeline-marker">
            <span class="marker-dot" />
          </div>
 
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-body" v-html="item.body" />
            <div class="timeline-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
 
        <!-- Final node -->
        <div class="timeline-end">
          <span class="cursor" />
        </div>
      </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 6rem 2rem 5rem;
  font-family: 'JetBrains Mono', monospace;
  background-color: var(--bg);
  position: relative;
}
 
/* ── HEADER ── */
.about-header {
  margin-bottom: 4rem;
  opacity: 0;
  animation: fadeUp 0.5s ease 0.05s both;
}
 
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
 
.about-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}
 
.about-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--main);
}
 
.about-lead {
  font-size: 0.9rem;
  color: var(--muted);
  max-width: 52ch;
  line-height: 1.85;
}
 
/* ── TIMELINE ── */
.timeline {
  position: relative;
  padding-left: 2rem;
}
 
/* Vertical line */
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--main-dim), var(--border) 85%, transparent);
}
 
.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  opacity: 0;
  animation: fadeUp 0.5s ease var(--delay) both;
}
 
.timeline-item:last-child {
  padding-bottom: 1.5rem;
}
 
/* Dot */
.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}
 
.marker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
  border: 1px solid var(--main-dim);
  transition: background 0.2s, box-shadow 0.2s;
}
 
.timeline-item.is-current .marker-dot {
  background: var(--main);
  box-shadow: 0 0 0 3px rgba(122,255,140,0.15);
}
 
.timeline-item:hover .marker-dot {
  background: var(--main);
  box-shadow: 0 0 0 3px rgba(122,255,140,0.12);
}
 
/* Content */
.timeline-year {
  display: inline-block;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 0.4rem;
}
 
.timeline-title {
  font-family: 'Fraunces', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
}
 
.timeline-body {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.85;
  max-width: 56ch;
  margin-bottom: 0.85rem;
}
 
.timeline-body :deep(strong) {
  color: var(--white);
  font-weight: 500;
}
 
.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
 
.tag {
  background: var(--surface) !important;
  color: var(--muted) !important;
  border: 1px solid var(--border) !important;
  border-radius: 0 !important;
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 0.65rem !important;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.6rem !important;
  transition: color 0.2s, border-color 0.2s;
  cursor: default;
  height: auto !important;
}
 
.tag:hover {
  color: var(--main) !important;
  border-color: var(--main-dim) !important;
}
 
/* End cursor */
.timeline-end {
  padding-left: 0;
  position: relative;
  left: -1.65rem;
  opacity: 0;
  animation: fadeUp 0.4s ease 1s both;
}
 
.cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--main);
  vertical-align: text-bottom;
  animation: blink 1s step-end 1.2s infinite, fadeIn 0s ease 1.2s both;
  opacity: 0;
}
 
/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
 
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
 
@keyframes blink {
  0%, 100% { opacity: 1; } 50% { opacity: 0; }
}
</style>