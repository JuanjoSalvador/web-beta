<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: '#'
    },
    description: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="project-card">
    <h5 class="title is-5">
      <a :href="url" target="_blank" rel="noopener noreferrer">
        {{ title }}
      </a>
    </h5>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.project-card {
  padding: 1rem;
}

.title {
  font-size: xx-large;
}

.description {
  font-size: larger;
}
</style>