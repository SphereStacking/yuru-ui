<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}>()

const paddingClass = computed(() => {
  const map: Record<string, string> = {
    none: '',
    sm: 'yr:p-sm',
    md: 'yr:p-md',
    lg: 'yr:p-lg',
    xl: 'yr:p-xl',
  }
  return map[props.padding ?? 'lg']
})
</script>

<template>
  <div
    class="yr-card yr:rounded-card yr:shadow-theme-md yr:filter-card
           yr:border-theme yr:border-solid yr:border-gray-200
           yr:bg-white yr:transition-all yr:transition-theme
           yr:dark:bg-gray-900 yr:dark:border-gray-700"
    :class="paddingClass"
  >
    <slot />
  </div>
</template>

<style>
/* hoyo: float up on hover */
[data-theme="hoyo"] .yr-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--yr-shadow-lg);
}

/* pishi: border highlight on hover */
[data-theme="pishi"] .yr-card:hover {
  box-shadow: var(--yr-shadow-md);
  border-color: var(--color-primary-300);
}
</style>
