<template>
  <div>
    <div class="spacer"></div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.spacer {
  min-height: 4rem;
}
</style>