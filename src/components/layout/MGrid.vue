<script setup lang="ts">
defineProps<{
  cols?: number
  gap?: string
}>()
</script>

<template>
  <div
    class="m-grid grid"
    :style="{
      gridTemplateColumns: `repeat(${cols ?? 3}, 1fr)`,
      gap: gap ?? 'var(--m-space-md)',
    }"
  >
    <slot />
  </div>
</template>
