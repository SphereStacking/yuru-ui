<script setup lang="ts">
import { computed } from 'vue'

type ProgressColor = 'primary' | 'secondary' | 'tertiary' |
  'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'

const props = defineProps<{
  value?: number
  color?: ProgressColor
  size?: 'sm' | 'md' | 'lg'
}>()

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value ?? 0)))

const barClass = computed(() => {
  const map: Record<ProgressColor, string> = {
    primary: 'mru:bg-primary-200',
    secondary: 'mru:bg-secondary-200',
    tertiary: 'mru:bg-tertiary-200',
    mint: 'mru:bg-accent-mint',
    pink: 'mru:bg-accent-pink',
    lavender: 'mru:bg-accent-lavender',
    peach: 'mru:bg-accent-peach',
    sky: 'mru:bg-accent-sky',
    lemon: 'mru:bg-accent-lemon',
  }
  return map[props.color ?? 'mint']
})

const trackHeight = computed(() => {
  switch (props.size ?? 'md') {
    case 'sm': return 'mru:h-1.5'
    case 'md': return 'mru:h-2.5'
    case 'lg': return 'mru:h-4'
  }
})
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="clampedValue"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="mru:w-full mru:bg-gray-100 mru:rounded-full mru:overflow-hidden" :class="trackHeight">
      <div
        class="mru:h-full mru:rounded-full mru:transition-all mru:transition-theme"
        :class="barClass"
        :style="{ width: `${clampedValue}%` }"
      />
    </div>
  </div>
</template>
