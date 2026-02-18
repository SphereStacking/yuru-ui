<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'text' | 'circle' | 'rect'
  width?: string
  height?: string
}>()

const variantClass = computed(() => {
  switch (props.variant ?? 'text') {
    case 'text': return 'mru:w-full mru:h-4 mru:rounded-button'
    case 'circle': return 'mru:size-10 mru:rounded-full'
    case 'rect': return 'mru:w-full mru:h-[100px] mru:rounded-card'
  }
})
</script>

<template>
  <div
    class="m-skeleton mru:animate-[m-skeleton-pulse_1.5s_ease-in-out_infinite]"
    :class="variantClass"
    :style="{
      width: width ?? undefined,
      height: height ?? undefined,
    }"
  />
</template>

<style>
.m-skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
}

@keyframes m-skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
