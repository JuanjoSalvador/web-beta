<template>
  <div>
    <div class="experience-card">
      <p class="period">{{ startMonth }} {{ startYear}} - {{ endMonth }} {{ endYear }}</p>
      <h4 class="title is-4">
        {{ companyName }}
      </h4>
      <p class="description">
        {{ description }}        
      </p>
      <br/>
        <a v-for="(tag, index) in tags" :key="index"  class="tag">
          {{ tag }}
        </a>
    </div>
    <hr/>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  startMonth: {
    type: String,
    required: true
  },
  startYear: {
    type: String,
    required: true
  },
  endMonth: {
    type: String,
    required: true
  },
  endYear: {
    type: String,
    required: true
  },
  companyName: {
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
.experience-card {
  border-radius: 1rem;
  padding: 0.1rem;
  max-height: 9.5rem;
}

.experience-card > .title {
  margin-bottom: 0.2rem;
  margin-top: 0.3rem;
}

.period {
  color: lightslategrey;
}

.tag {
  font-weight: bold;
  margin-right: 0.5rem;
}

.tag:hover {
  background-color: var(----main);
}

hr {
  margin-bottom: 0.5rem;
}
</style>