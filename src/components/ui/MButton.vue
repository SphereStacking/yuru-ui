<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const variantClass = computed(() => {
  switch (props.variant ?? 'primary') {
    case 'primary': return 'mru:bg-primary-200 mru:text-primary-700 mru:hover:shadow-theme-md'
    case 'secondary': return 'mru:bg-secondary-200 mru:text-secondary-700 mru:hover:shadow-theme-md'
    case 'tertiary': return 'mru:bg-tertiary-200 mru:text-tertiary-700 mru:hover:shadow-theme-md'
    case 'outline': return 'mru:border-gray-200 mru:text-gray-700 mru:hover:bg-gray-50 mru:dark:text-gray-200 mru:dark:hover:bg-gray-800'
    case 'ghost': return 'mru:text-gray-700 mru:hover:bg-gray-100 mru:dark:text-gray-200 mru:dark:hover:bg-gray-800'
  }
})

const sizeClass = computed(() => {
  switch (props.size ?? 'md') {
    case 'sm': return 'mru:px-3 mru:py-1.5 mru:text-sm'
    case 'md': return 'mru:px-4 mru:py-2 mru:text-base'
    case 'lg': return 'mru:px-6 mru:py-2.5 mru:text-lg'
  }
})
</script>

<template>
  <button
    class="m-button mru:inline-flex mru:items-center mru:justify-center mru:gap-xs
           mru:rounded-button mru:filter-button mru:font-heading mru:tracking-theme
           mru:cursor-pointer mru:border mru:border-solid mru:border-transparent mru:border-theme
           mru:transition-all mru:transition-theme
           mru:disabled:opacity-50 mru:disabled:cursor-not-allowed"
    :class="[variantClass, sizeClass]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style>
/* hoyo: bouncy hover */
[data-theme="hoyo"] .m-button:hover:not(:disabled) {
  transform: translateY(-2px);
}
[data-theme="hoyo"] .m-button:active:not(:disabled) {
  transform: translateY(0);
}

/* pishi: subtle filter + scale */
[data-theme="pishi"] .m-button:hover:not(:disabled) {
  filter: brightness(0.97);
}
[data-theme="pishi"] .m-button:active:not(:disabled) {
  transform: scale(0.98);
  filter: brightness(0.95);
}
</style>
