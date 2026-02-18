<script setup lang="ts">
defineProps<{
  maxWidth?: string
  padding?: string
}>()
</script>

<template>
  <div
    class="mru:mx-auto mru:w-full"
    :style="{
      maxWidth: maxWidth ?? '960px',
      padding: padding ?? '24px',
    }"
  >
    <slot />
  </div>
</template>
