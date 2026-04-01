<template>
    <NuxtLink class="icon-link" :href="socialUrl" target="_blank">
      <Icon :name="`fa6-brands:${platform}`" :size="`${size}rem`" />
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['linkedin', 'mastodon', 'github'].includes(value)
    }
  },
  username: {
    type: String,
    required: true
  }
})

const socialUrl = computed(() => {
  const availableUrls = {
    "linkedin": "https://linkedin.com/in/",
    "mastodon": "https://mastodon.social/@",
    "github": "https://github.com/"
  }
  const baseUrl = availableUrls[props.platform as keyof typeof availableUrls];
  
  return `${baseUrl}${props.username}`;
});
</script>

<style>
.icon-link {
  color: white !important;
  margin-left: 1rem;
  transition: opacity 0.2s ease;
}

.icon-link:hover {
  opacity: 0.7;
}

.is-centered {
  text-align: center;
}
</style>