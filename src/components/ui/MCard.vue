<script setup lang="ts">
defineProps<{
  padding?: string
}>()
</script>

<template>
  <div
    class="m-card"
    :style="{ padding: padding ?? 'var(--m-space-lg)' }"
  >
    <slot />
  </div>
</template>

<style scoped>
.m-card {
  border-radius: var(--m-radius-card);
  box-shadow: var(--m-shadow-md);
  filter: var(--m-filter-card);
  border: var(--m-border-width) solid var(--m-color-gray-200);
  background-color: var(--m-color-card-bg);
}
</style>
