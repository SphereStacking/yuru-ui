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
    primary: 'mru:bg-primary-200 mru:text-primary-700',
    secondary: 'mru:bg-secondary-200 mru:text-secondary-700',
    tertiary: 'mru:bg-tertiary-200 mru:text-tertiary-700',
    success: 'mru:bg-success mru:text-success-text',
    warning: 'mru:bg-warning mru:text-warning-text',
    error: 'mru:bg-error mru:text-error-text',
    info: 'mru:bg-info mru:text-info-text',
    mint: 'mru:bg-accent-mint mru:text-accent-mint-text',
    pink: 'mru:bg-accent-pink mru:text-accent-pink-text',
    lavender: 'mru:bg-accent-lavender mru:text-accent-lavender-text',
    peach: 'mru:bg-accent-peach mru:text-accent-peach-text',
    sky: 'mru:bg-accent-sky mru:text-accent-sky-text',
    lemon: 'mru:bg-accent-lemon mru:text-accent-lemon-text',
  }
  return map[props.variant ?? 'mint']
})
</script>

<template>
  <span
    class="mru:inline-flex mru:items-center mru:rounded-button
           mru:px-3 mru:py-1 mru:text-xs mru:leading-normal
           mru:font-body mru:tracking-theme mru:whitespace-nowrap"
    :class="variantClass"
  >
    <slot />
  </span>
</template>
