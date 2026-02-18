<script setup lang="ts">
defineProps<{
  padding?: string
}>()
</script>

<template>
  <div
    class="m-card"
    :style="{ padding: padding ?? 'var(--m-space-lg)' }"
  >
    <slot />
  </div>
</template>

<style scoped>
.m-card {
  border-radius: var(--m-radius-card);
  box-shadow: var(--m-shadow-md);
  filter: var(--m-filter-card);
  border: var(--m-border-width) solid var(--m-border-color, var(--m-color-gray-200));
  background-color: var(--m-color-card-bg);
  transition:
    box-shadow var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}
</style>

<!-- テーマ別のカード表情 -->
<style>
/* === toge: くっきり直線、ホバーで影がズレる === */
[data-theme="toge"] .m-card {
  border-color: var(--m-color-gray-700);
}
[data-theme="toge"] .m-card:hover {
  box-shadow: var(--m-shadow-lg);
  transform: translate(-1px, -1px);
}

/* === kira: グラデーションボーダーを擬似要素で再現 === */
[data-theme="kira"] .m-card {
  position: relative;
  border-color: transparent;
  background-clip: padding-box;
}
[data-theme="kira"] .m-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: var(--m-gradient-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}
[data-theme="kira"] .m-card:hover::before {
  opacity: 0.85;
}

/* === nemu: 霞むボーダー、ホバーもほぼ変わらない === */
[data-theme="nemu"] .m-card {
  border-color: rgba(175, 217, 184, 0.15);
  opacity: 0.92;
}
[data-theme="nemu"] .m-card:hover {
  opacity: 1;
}

/* === moko: ぽってりボーダー === */
[data-theme="moko"] .m-card {
  border-color: rgba(176, 255, 196, 0.25);
}
</style>
