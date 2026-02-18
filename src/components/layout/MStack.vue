<script setup lang="ts">
defineProps<{
  direction?: 'vertical' | 'horizontal'
  gap?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()
</script>

<template>
  <div
    class="mru:flex"
    :class="direction === 'horizontal' ? 'mru:flex-row' : 'mru:flex-col'"
    :style="{
      gap: gap ?? '16px',
      alignItems: align ?? 'stretch',
    }"
  >
    <slot />
  </div>
</template>
