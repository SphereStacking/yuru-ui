<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' |
  'success' | 'warning' | 'error' | 'info' |
  'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'

const props = defineProps<{
  variant?: BadgeVariant
}>()

const variantClass = computed(() => {
  const map: Record<BadgeVariant, string> = {
    primary: 'yr:bg-primary-200 yr:text-primary-700',
    secondary: 'yr:bg-secondary-200 yr:text-secondary-700',
    tertiary: 'yr:bg-tertiary-200 yr:text-tertiary-700',
    success: 'yr:bg-success yr:text-success-text',
    warning: 'yr:bg-warning yr:text-warning-text',
    error: 'yr:bg-error yr:text-error-text',
    info: 'yr:bg-info yr:text-info-text',
    mint: 'yr:bg-accent-mint yr:text-accent-mint-text',
    pink: 'yr:bg-accent-pink yr:text-accent-pink-text',
    lavender: 'yr:bg-accent-lavender yr:text-accent-lavender-text',
    peach: 'yr:bg-accent-peach yr:text-accent-peach-text',
    sky: 'yr:bg-accent-sky yr:text-accent-sky-text',
    lemon: 'yr:bg-accent-lemon yr:text-accent-lemon-text',
  }
  return map[props.variant ?? 'mint']
})
</script>

<template>
  <span
    class="yr:inline-flex yr:items-center yr:rounded-button
           yr:px-3 yr:py-1 yr:text-xs yr:leading-normal
           yr:font-body yr:tracking-theme yr:whitespace-nowrap"
    :class="variantClass"
  >
    <slot />
  </span>
</template>
