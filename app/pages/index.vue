<script lang="ts" setup>
definePageMeta({
  layout: 'hero',
  pageOrder: 1
})

useSeoMeta({
  title: 'Juanjo Salvador — Desarrollador Backend',
  description: 'Desarrollador backend con experiencia en Python, Java, Vue y más.',
})

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/JuanjoSalvador',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/jj-salvador',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    label: 'Email',
    url: 'mailto:juanjosalvador@netc.eu',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  },
  {
    label: 'Blog',
    url: 'https://ingenieroynopuedo.es',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  },
]

const skills = ['Python', 'Java', 'Django', 'Spring', 'Vue', 'Angular', 'Docker', 'Linux', 'Git']

const terminalLines = [
  { type: 'cmd', content: 'cat about.json' },
  { type: 'sep', content: '──────────────────────' },
  { type: 'kv', key: 'nombre', pad: ':     ', value: '"Juanjo Salvador"', valueType: 'str', comma: true },
  { type: 'kv', key: 'rol', pad: ':        ', value: '"Backend Developer"', valueType: 'str', comma: true },
  { type: 'kv', key: 'años_exp', pad: ':   ', value: '8', valueType: 'num', comma: true },
  { type: 'kv', key: 'stack', pad: ':      ', value: '["Python", "Java", "Vue"]', valueType: 'str', comma: true },
  { type: 'kv', key: 'linux', pad: ':      ', value: 'true', valueType: 'bool', comma: true },
  { type: 'cursor' },
]
</script>

<template>
  <div class="columns is-vcentered is-variable is-8">
    <!-- LEFT -->
    <div class="column is-5">
      <h1 class="title hero-title">
        Juanjo Salvador
      </h1>
      <p class="hero-role">Backend Developer · Python · Java</p>

      <p class="hero-bio mb-5">
        Desarrollador con más de <strong>8 años de experiencia</strong>
        construyendo sistemas robustos. Curioso por naturaleza: he pasado
        por <strong>backend</strong>, <strong>frontend</strong>,
        <strong>DevOps</strong>, ciberseguridad y hasta videojuegos.
      </p>

      <br/>

      <div class="social-links mb-5">
        <NuxtLink v-for="link in socialLinks" :key="link.label" :to="link.url" target="_blank" rel="noopener"
          class="social-link">
          <span v-html="link.icon" />
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="buttons hero-buttons">
        <NuxtLink to="#proyectos" class="button is-primary-custom">
          Ver proyectos
        </NuxtLink>
        <NuxtLink to="#contacto" class="button is-ghost-custom">
          Contactar
        </NuxtLink>
      </div>
    </div>

    <!-- RIGHT: TERMINAL -->
    <div class="column is-6 is-offset-1">
      <div class="terminal-wrap">
        <div class="terminal-box">
          <div class="terminal-bar">
            <span class="t-dot r" />
            <span class="t-dot y" />
            <span class="t-dot g" />
            <span class="terminal-title-bar">juanjo@portfolio ~ </span>
          </div>
          <div class="terminal-body">
            <div v-for="(line, i) in terminalLines" :key="i" class="t-line" :class="`l${i + 1}`">
              <template v-if="line.type === 'cmd'">
                <span class="t-prompt">$</span>
                <span class="t-cmd">{{ line.content }}</span>
              </template>
              <template v-else-if="line.type === 'sep'">
                <span class="t-out t-sep">{{ line.content }}</span>
              </template>
              <template v-else-if="line.type === 'kv'">
                <span class="t-out">
                  <span class="t-key">"{{ line.key }}"</span>
                  <span>{{ line.pad }}</span>
                  <span :class="`t-${line.valueType}`">{{ line.value }}</span>
                  <span v-if="line.comma">,</span>
                </span>
              </template>
              <template v-else-if="line.type === 'cursor'">
                <span class="t-prompt">$</span>
                <span class="cursor" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
    /* ── HERO ── */
    .hero {
      background-color: var(--bg) !important;
      position: relative;
    }

    .hero.is-fullheight-with-navbar .hero-body {
      align-items: center;
      position: relative;
    }

    /* ── LEFT COLUMN ── */
    .availability-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.3rem 0.85rem;
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: 2px;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 1.75rem;
      opacity: 0;
      animation: fadeUp 0.5s ease 0.1s both;
    }

    .availability-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--main);
      box-shadow: 0 0 0 2px rgba(122,255,140,0.2);
    }

    .hero-title {
      font-family: 'Fraunces', serif !important;
      font-size: clamp(3rem, 5.5vw, 5rem) !important;
      font-weight: 600 !important;
      color: var(--white) !important;
      line-height: 1 !important;
      letter-spacing: -0.03em !important;
      margin-bottom: 0.5rem !important;
      opacity: 0;
      animation: fadeUp 0.6s ease 0.2s both;
    }

    .hero-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--main);
    }

    .hero-role {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 1.75rem;
      opacity: 0;
      animation: fadeUp 0.6s ease 0.3s both;
    }

    .hero-bio {
      font-size: 0.92rem;
      color: var(--text);
      max-width: 44ch;
      line-height: 1.85;
      margin-bottom: 0 !important;
      opacity: 0;
      animation: fadeUp 0.6s ease 0.4s both;
    }

    .hero-bio strong { color: var(--white); font-weight: 500; }

    /* Social links */
    .social-links {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
      opacity: 0;
      animation: fadeUp 0.6s ease 0.55s both;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--muted) !important;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding-bottom: 1px;
      transition: color 0.2s, border-color 0.2s;
    }

    .social-link:hover {
      color: var(--main) !important;
      border-bottom-color: var(--main-dim);
    }

    /* Buttons */
    .hero-buttons {
      opacity: 0;
      animation: fadeUp 0.6s ease 0.65s both;
    }

    .button.is-primary-custom {
      background-color: var(--main) !important;
      color: #0d0f0e !important;
      border: none !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 0.72rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase;
      border-radius: 0 !important;
      height: auto;
      padding: 0.65rem 1.4rem !important;
      transition: background 0.2s, transform 0.15s !important;
    }

    .button.is-primary-custom:hover {
      background-color: #a0ffac !important;
      transform: translateY(-2px);
    }

    .button.is-ghost-custom {
      background-color: transparent !important;
      color: var(--text) !important;
      border: 1px solid var(--border) !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 0.72rem !important;
      font-weight: 500 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase;
      border-radius: 0 !important;
      height: auto;
      padding: 0.65rem 1.4rem !important;
      transition: border-color 0.2s, color 0.2s, transform 0.15s !important;
    }

    .button.is-ghost-custom:hover {
      border-color: var(--main-dim) !important;
      color: var(--main) !important;
      transform: translateY(-2px);
    }

    /* ── TERMINAL ── */
    .terminal-wrap {
      opacity: 0;
      animation: fadeUp 0.8s ease 0.5s both;
    }

    .terminal-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 2px;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(122,255,140,0.04),
        0 32px 64px rgba(0,0,0,0.55),
        0 0 80px rgba(122,255,140,0.03);
    }

    .terminal-bar {
      background: #1a1d1b;
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      border-bottom: 1px solid var(--border);
    }

    .t-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
    }
    .t-dot.r { background: #ff5f57; }
    .t-dot.y { background: #febc2e; }
    .t-dot.g { background: #28c840; }

    .terminal-title-bar {
      flex: 1;
      text-align: center;
      font-size: 0.62rem;
      color: var(--muted);
      letter-spacing: 0.05em;
    }

    .terminal-body {
      padding: 1.5rem;
      font-size: 0.78rem;
      line-height: 2.1;
    }

    .t-line { display: flex; gap: 0.75rem; opacity: 0; }
    .t-line.l1 { animation: termLine 0.25s ease 1.0s both; }
    .t-line.l2 { animation: termLine 0.25s ease 1.25s both; }
    .t-line.l3 { animation: termLine 0.25s ease 1.5s both; }
    .t-line.l4 { animation: termLine 0.25s ease 1.75s both; }
    .t-line.l5 { animation: termLine 0.25s ease 2.0s both; }
    .t-line.l6 { animation: termLine 0.25s ease 2.25s both; }
    .t-line.l7 { animation: termLine 0.25s ease 2.5s both; }
    .t-line.l8 { animation: termLine 0.25s ease 2.75s both; }
    .t-line.l9 { animation: termLine 0.25s ease 3.0s both; }

    .t-prompt { color: var(--main); user-select: none; }
    .t-cmd    { color: var(--white); }
    .t-out    { color: var(--muted); padding-left: 1.2rem; }
    .t-key    { color: var(--amber); }
    .t-str    { color: #7fb8c8; }
    .t-num    { color: #d19aff; }
    .t-bool   { color: #ff8c69; }
    .t-sep    { color: var(--border); }

    .cursor {
      display: inline-block;
      width: 8px; height: 1em;
      background: var(--main);
      vertical-align: text-bottom;
      opacity: 0;
      animation: blink 1s step-end 3.2s infinite, fadeIn 0s ease 3.2s both;
    }

    /* ── SKILLS STRIP ── */
    .skills-strip {
      background-color: var(--surface) !important;
      border-top: 1px solid var(--border);
      padding: 1.25rem 2rem;
      opacity: 0;
      animation: fadeUp 0.5s ease 1.1s both;
    }

    .skills-strip .tag {
      background: var(--bg) !important;
      color: var(--muted) !important;
      border: 1px solid var(--border) !important;
      border-radius: 0 !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 0.68rem !important;
      letter-spacing: 0.05em;
      transition: color 0.2s, border-color 0.2s;
      cursor: default;
    }

    .skills-strip .tag:hover {
      color: var(--main) !important;
      border-color: var(--main-dim) !important;
    }

    .skills-label {
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      white-space: nowrap;
      margin-right: 0.5rem;
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes termLine {
      from { opacity: 0; transform: translateX(-5px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; } 50% { opacity: 0; }
    }
</style>