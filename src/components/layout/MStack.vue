<script setup lang="ts">
defineProps<{
  direction?: 'vertical' | 'horizontal'
  gap?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()
</script>

<template>
  <div
    class="m-stack flex"
    :class="[
      direction === 'horizontal' ? 'flex-row' : 'flex-col',
    ]"
    :style="{
      gap: gap ?? 'var(--m-space-md)',
      alignItems: align ?? 'stretch',
    }"
  >
    <slot />
  </div>
</template>
