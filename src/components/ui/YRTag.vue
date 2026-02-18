<script setup lang="ts">
import { computed } from 'vue'

type TagColor = 'primary' | 'secondary' | 'tertiary' |
  'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'

const props = defineProps<{
  color?: TagColor
  removable?: boolean
}>()

defineEmits<{
  remove: []
}>()

const colorClass = computed(() => {
  const map: Record<TagColor, string> = {
    primary: 'yr:bg-primary-200 yr:text-primary-700',
    secondary: 'yr:bg-secondary-200 yr:text-secondary-700',
    tertiary: 'yr:bg-tertiary-200 yr:text-tertiary-700',
    mint: 'yr:bg-accent-mint yr:text-accent-mint-text',
    pink: 'yr:bg-accent-pink yr:text-accent-pink-text',
    lavender: 'yr:bg-accent-lavender yr:text-accent-lavender-text',
    peach: 'yr:bg-accent-peach yr:text-accent-peach-text',
    sky: 'yr:bg-accent-sky yr:text-accent-sky-text',
    lemon: 'yr:bg-accent-lemon yr:text-accent-lemon-text',
  }
  return map[props.color ?? 'mint']
})
</script>

<template>
  <span
    class="yr:inline-flex yr:items-center yr:gap-2xs yr:rounded-button
           yr:px-3 yr:py-1 yr:text-xs yr:leading-normal
           yr:font-body yr:tracking-theme yr:whitespace-nowrap"
    :class="colorClass"
  >
    <slot />
    <button
      v-if="removable"
      class="yr:flex yr:items-center yr:justify-center yr:size-4 yr:rounded-full
             yr:border-none yr:bg-transparent yr:text-current yr:cursor-pointer
             yr:p-0 yr:text-sm yr:leading-none yr:opacity-70 yr:hover:opacity-100
             yr:transition-opacity yr:transition-theme
             yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-1"
      type="button"
      aria-label="Remove"
      @click="$emit('remove')"
    >
      &times;
    </button>
  </span>
</template>
