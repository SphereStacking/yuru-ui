<script setup lang="ts">
defineProps<{
  cols?: number
  gap?: string
}>()
</script>

<template>
  <div
    class="yr:grid"
    :style="{
      gridTemplateColumns: `repeat(${cols ?? 3}, 1fr)`,
      gap: gap ?? '16px',
    }"
  >
    <slot />
  </div>
</template>
