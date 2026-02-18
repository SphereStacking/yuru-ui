<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'text' | 'circle' | 'rect'
  width?: string
  height?: string
}>()

const variantClass = computed(() => {
  switch (props.variant ?? 'text') {
    case 'text': return 'yr:w-full yr:h-4 yr:rounded-button'
    case 'circle': return 'yr:size-10 yr:rounded-full'
    case 'rect': return 'yr:w-full yr:h-[100px] yr:rounded-card'
  }
})
</script>

<template>
  <div
    class="yr-skeleton yr:animate-skeleton-pulse"
    :class="variantClass"
    :style="{
      width: width ?? undefined,
      height: height ?? undefined,
    }"
  />
</template>

<style>
.yr-skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
}
</style>
