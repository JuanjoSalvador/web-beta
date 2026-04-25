<template>
  <div class="project-card">
    <div class="project-card-body">
      <h4 class="project-title">{{ title }}</h4>
      <p class="project-description">{{ description }}</p>
      <NuxtLink :to="url" target="_blank" rel="noopener" class="project-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </NuxtLink>
    </div>
    <div class="project-card-footer">
      <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: 'JetBrains Mono', monospace;
}

.project-card:hover {
  border-color: var(--main-dim);
  box-shadow: 0 0 24px rgba(122,255,140,0.05);
}

.project-card-body {
  padding: 1.5rem;
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-title {
  font-family: 'Fraunces', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.02em;
}

.project-description {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.8;
  flex: 1;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: auto;
  padding: 0.55rem 1.1rem;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
  width: fit-content;
}

.project-btn:hover {
  border-color: var(--main-dim);
  color: var(--main);
}

.project-card-footer {
  padding: 0.85rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: var(--bg) !important;
  color: var(--muted) !important;
  border: 1px solid var(--border) !important;
  border-radius: 0 !important;
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 0.65rem !important;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.6rem !important;
  height: auto !important;
  font-weight: 400 !important;
  transition: color 0.2s, border-color 0.2s;
}

.tag:hover {
  color: var(--main) !important;
  border-color: var(--main-dim) !important;
}
</style>