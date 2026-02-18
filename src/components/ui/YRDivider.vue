<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
}>()

const strokeColorMap: Record<string, string> = {
  mint: '%23b0ffc4',
  pink: '%23ffd4e8',
  lavender: '%23e0d4ff',
  peach: '%23ffe4cc',
  sky: '%23ccedff',
  lemon: '%23fff6d5',
}

const borderColorMap: Record<string, string> = {
  mint: 'var(--color-accent-mint)',
  pink: 'var(--color-accent-pink)',
  lavender: 'var(--color-accent-lavender)',
  peach: 'var(--color-accent-peach)',
  sky: 'var(--color-accent-sky)',
  lemon: 'var(--color-accent-lemon)',
}

const wavySvg = computed(() => {
  const stroke = strokeColorMap[props.color ?? 'mint']
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 8'%3E%3Cpath d='M0 4c5 0 5-3 10-3s5 6 10 6 5-6 10-6 5 3 10 3' fill='none' stroke='${stroke}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`
})

const borderColor = computed(() => borderColorMap[props.color ?? 'mint'])
</script>

<template>
  <div
    class="yr-divider yr:w-full"
    :style="{
      '--yr-divider-svg': wavySvg,
      '--yr-divider-border-color': borderColor,
    } as Record<string, string>"
    role="separator"
  />
</template>

<style>
/* wavy (hoyo) */
[data-theme="hoyo"] .yr-divider {
  height: 8px;
  background: var(--yr-divider-svg) repeat-x;
  background-size: 40px 8px;
  border: none;
}

/* straight (pishi) */
[data-theme="pishi"] .yr-divider {
  height: 0;
  border: none;
  border-top: 2px solid var(--yr-divider-border-color);
}
</style>
