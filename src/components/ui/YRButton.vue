<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  fullWidth?: boolean
}>()

const variantClass = computed(() => {
  switch (props.variant ?? 'primary') {
    case 'primary': return 'yr:bg-primary-200 yr:text-primary-700 yr:hover:shadow-theme-md'
    case 'secondary': return 'yr:bg-secondary-200 yr:text-secondary-700 yr:hover:shadow-theme-md'
    case 'tertiary': return 'yr:bg-tertiary-200 yr:text-tertiary-700 yr:hover:shadow-theme-md'
    case 'outline': return 'yr:border-gray-200 yr:text-gray-700 yr:hover:bg-gray-50 yr:dark:text-gray-200 yr:dark:hover:bg-gray-800'
    case 'ghost': return 'yr:text-gray-700 yr:hover:bg-gray-100 yr:dark:text-gray-200 yr:dark:hover:bg-gray-800'
  }
})

const sizeClass = computed(() => {
  switch (props.size ?? 'md') {
    case 'sm': return 'yr:px-3 yr:py-1.5 yr:text-sm'
    case 'md': return 'yr:px-4 yr:py-2 yr:text-base'
    case 'lg': return 'yr:px-6 yr:py-2.5 yr:text-lg'
  }
})
</script>

<template>
  <button
    :type="type ?? 'button'"
    class="yr-button yr:inline-flex yr:items-center yr:justify-center yr:gap-xs
           yr:rounded-button yr:filter-button yr:font-heading yr:tracking-theme
           yr:cursor-pointer yr:border yr:border-solid yr:border-transparent yr:border-theme
           yr:transition-all yr:transition-theme
           yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-2
           yr:disabled:opacity-50 yr:disabled:cursor-not-allowed"
    :class="[variantClass, sizeClass, fullWidth ? 'yr:w-full' : '']"
    :disabled="disabled || loading"
  >
    <svg v-if="loading" class="yr:animate-spin yr:size-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="yr:opacity-25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="yr:opacity-75" />
    </svg>
    <slot />
  </button>
</template>

<style>
/* hoyo: bouncy hover */
[data-theme="hoyo"] .yr-button:hover:not(:disabled) {
  transform: translateY(-2px);
}
[data-theme="hoyo"] .yr-button:active:not(:disabled) {
  transform: translateY(0);
}

/* pishi: subtle filter + scale */
[data-theme="pishi"] .yr-button:hover:not(:disabled) {
  filter: brightness(0.97);
}
[data-theme="pishi"] .yr-button:active:not(:disabled) {
  transform: scale(0.98);
  filter: brightness(0.95);
}
</style>
