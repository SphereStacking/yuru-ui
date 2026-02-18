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
  mint: 'var(--m-color-accent-mint)',
  pink: 'var(--m-color-accent-pink)',
  lavender: 'var(--m-color-accent-lavender)',
  peach: 'var(--m-color-accent-peach)',
  sky: 'var(--m-color-accent-sky)',
  lemon: 'var(--m-color-accent-lemon)',
}

const wavySvg = computed(() => {
  const stroke = strokeColorMap[props.color ?? 'mint']
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 8'%3E%3Cpath d='M0 4c5 0 5-3 10-3s5 6 10 6 5-6 10-6 5 3 10 3' fill='none' stroke='${stroke}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`
})

const wavySvgThick = computed(() => {
  const stroke = strokeColorMap[props.color ?? 'mint']
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 10'%3E%3Cpath d='M0 5c5 0 5-4 10-4s5 8 10 8 5-8 10-8 5 4 10 4' fill='none' stroke='${stroke}' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E")`
})

const borderColor = computed(() => borderColorMap[props.color ?? 'mint'])
</script>

<template>
  <div
    class="m-divider"
    :style="{
      '--m-divider-svg': wavySvg,
      '--m-divider-svg-thick': wavySvgThick,
      '--m-divider-border-color': borderColor,
    } as Record<string, string>"
    role="separator"
  />
</template>

<style>
.m-divider {
  width: 100%;
}

/* === hoyo: なみなみ区切り線 === */
[data-theme="hoyo"] .m-divider {
  height: 8px;
  background: var(--m-divider-svg) repeat-x;
  background-size: 40px 8px;
  border: none;
}

/* === pishi: きっちり直線 === */
[data-theme="pishi"] .m-divider {
  height: 0;
  border: none;
  border-top: 2px solid var(--m-divider-border-color);
}

/* === toge: ダッシュ線でザクザク === */
[data-theme="toge"] .m-divider {
  height: 0;
  border: none;
  border-top: 2px dashed var(--m-color-gray-600);
}

/* === moko: もっこもこの太いなみなみ === */
[data-theme="moko"] .m-divider {
  height: 10px;
  background: var(--m-divider-svg-thick) repeat-x;
  background-size: 40px 10px;
  border: none;
}

/* === kira: グラデーションライン === */
[data-theme="kira"] .m-divider {
  height: 2px;
  border: none;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--m-color-accent-mint) 15%,
    var(--m-color-accent-lavender) 50%,
    var(--m-color-accent-pink) 85%,
    transparent 100%
  );
  opacity: 0.6;
}

/* === nemu: ほぼ消えかけの霞ライン === */
[data-theme="nemu"] .m-divider {
  height: 0;
  border: none;
  border-top: 1px solid var(--m-divider-border-color);
  opacity: 0.25;
}
</style>
