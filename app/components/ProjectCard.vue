<template>
  <div>
    <div class="project-card">
      <div class="project-card-body">
        <h4 class="title is-4">
          {{ title }}
        </h4>
        <p class="project-description is-justified">
          {{ description }}        
        </p>
        <p class="project-url">
          <a :href="url" class="button is-fullwidth is-dark">
            <strong>Github</strong>
          </a>
        </p>          
      </div>
      <div class="project-card-footer">
        <a v-for="(tag, index) in tags" :key="index"  class="tag">
          {{ tag }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
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

<style>
.project-card {
  border-radius: 1rem;
  padding: 1rem;
}

.project-card-body {
  min-height: 15rem;
}

.project-description {
  min-height: 7.5rem;
}

.project-card > .title {
  margin-bottom: 0.2rem;
  margin-top: 0.3rem;
}

.project-card > .project-card-body > .project-url {
  color: red;
}

.tag {
  font-weight: bold;
  margin-right: 0.5rem;
}

.tag:hover {
  background-color: var(--primary-color);
}
</style>