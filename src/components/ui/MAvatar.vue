<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  fallback?: string
}>()

const sizeClass = computed(() => {
  switch (props.size ?? 'md') {
    case 'sm': return 'mru:size-8 mru:text-xs'
    case 'md': return 'mru:size-10 mru:text-sm'
    case 'lg': return 'mru:size-14 mru:text-lg'
  }
})
</script>

<template>
  <div
    class="mru:inline-flex mru:items-center mru:justify-center mru:rounded-avatar mru:overflow-hidden mru:shrink-0"
    :class="sizeClass"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt ?? ''"
      class="mru:size-full mru:object-cover"
    />
    <span
      v-else
      class="mru:flex mru:items-center mru:justify-center mru:size-full
             mru:bg-primary-200 mru:text-primary-700 mru:font-heading"
    >
      {{ fallback ?? '' }}
    </span>
  </div>
</template>
