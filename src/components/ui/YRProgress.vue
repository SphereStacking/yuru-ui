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
    primary: 'yr:bg-primary-200',
    secondary: 'yr:bg-secondary-200',
    tertiary: 'yr:bg-tertiary-200',
    mint: 'yr:bg-accent-mint',
    pink: 'yr:bg-accent-pink',
    lavender: 'yr:bg-accent-lavender',
    peach: 'yr:bg-accent-peach',
    sky: 'yr:bg-accent-sky',
    lemon: 'yr:bg-accent-lemon',
  }
  return map[props.color ?? 'mint']
})

const trackHeight = computed(() => {
  switch (props.size ?? 'md') {
    case 'sm': return 'yr:h-1.5'
    case 'md': return 'yr:h-2.5'
    case 'lg': return 'yr:h-4'
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
    <div class="yr:w-full yr:bg-gray-100 yr:rounded-full yr:overflow-hidden" :class="trackHeight">
      <div
        class="yr:h-full yr:rounded-full yr:transition-all yr:transition-theme"
        :class="barClass"
        :style="{ width: `${clampedValue}%` }"
      />
    </div>
  </div>
</template>
