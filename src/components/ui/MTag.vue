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
    primary: 'mru:bg-primary-200 mru:text-primary-700',
    secondary: 'mru:bg-secondary-200 mru:text-secondary-700',
    tertiary: 'mru:bg-tertiary-200 mru:text-tertiary-700',
    mint: 'mru:bg-accent-mint mru:text-accent-mint-text',
    pink: 'mru:bg-accent-pink mru:text-accent-pink-text',
    lavender: 'mru:bg-accent-lavender mru:text-accent-lavender-text',
    peach: 'mru:bg-accent-peach mru:text-accent-peach-text',
    sky: 'mru:bg-accent-sky mru:text-accent-sky-text',
    lemon: 'mru:bg-accent-lemon mru:text-accent-lemon-text',
  }
  return map[props.color ?? 'mint']
})
</script>

<template>
  <span
    class="mru:inline-flex mru:items-center mru:gap-2xs mru:rounded-button
           mru:px-3 mru:py-1 mru:text-xs mru:leading-normal
           mru:font-body mru:tracking-theme mru:whitespace-nowrap"
    :class="colorClass"
  >
    <slot />
    <button
      v-if="removable"
      class="mru:flex mru:items-center mru:justify-center mru:size-4 mru:rounded-full
             mru:border-none mru:bg-transparent mru:text-current mru:cursor-pointer
             mru:p-0 mru:text-sm mru:leading-none mru:opacity-70 mru:hover:opacity-100
             mru:transition-opacity mru:transition-theme"
      type="button"
      aria-label="Remove"
      @click="$emit('remove')"
    >
      &times;
    </button>
  </span>
</template>
