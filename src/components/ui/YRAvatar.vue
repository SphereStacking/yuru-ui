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
    case 'sm': return 'yr:size-8 yr:text-xs'
    case 'md': return 'yr:size-10 yr:text-sm'
    case 'lg': return 'yr:size-14 yr:text-lg'
  }
})
</script>

<template>
  <div
    class="yr:inline-flex yr:items-center yr:justify-center yr:rounded-avatar yr:overflow-hidden yr:shrink-0"
    :class="sizeClass"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt ?? ''"
      class="yr:size-full yr:object-cover"
    />
    <span
      v-else
      class="yr:flex yr:items-center yr:justify-center yr:size-full
             yr:bg-primary-200 yr:text-primary-700 yr:font-heading"
    >
      {{ fallback ?? '' }}
    </span>
  </div>
</template>
