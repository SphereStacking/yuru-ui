<script setup lang="ts">
defineProps<{
  maxWidth?: string
  padding?: string
}>()
</script>

<template>
  <div
    class="m-container mx-auto w-full"
    :style="{
      maxWidth: maxWidth ?? '960px',
      padding: padding ?? 'var(--m-space-lg)',
    }"
  >
    <slot />
  </div>
</template>
