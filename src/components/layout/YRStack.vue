<script setup lang="ts">
defineProps<{
  direction?: 'vertical' | 'horizontal'
  gap?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()
</script>

<template>
  <div
    class="yr:flex"
    :class="direction === 'horizontal' ? 'yr:flex-row' : 'yr:flex-col'"
    :style="{
      gap: gap ?? '16px',
      alignItems: align ?? 'stretch',
    }"
  >
    <slot />
  </div>
</template>
