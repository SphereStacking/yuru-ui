<script setup lang="ts">
defineProps<{
  variant?: 'success' | 'warning' | 'error' | 'info' | 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
}>()

const colorMap: Record<string, { bg: string; text: string }> = {
  success: { bg: 'var(--m-color-success)', text: 'var(--m-color-success-text)' },
  warning: { bg: 'var(--m-color-warning)', text: 'var(--m-color-warning-text)' },
  error: { bg: 'var(--m-color-error)', text: 'var(--m-color-error-text)' },
  info: { bg: 'var(--m-color-info)', text: 'var(--m-color-info-text)' },
  mint: { bg: 'var(--m-color-accent-mint)', text: 'var(--m-color-accent-mint-text)' },
  pink: { bg: 'var(--m-color-accent-pink)', text: 'var(--m-color-accent-pink-text)' },
  lavender: { bg: 'var(--m-color-accent-lavender)', text: 'var(--m-color-accent-lavender-text)' },
  peach: { bg: 'var(--m-color-accent-peach)', text: 'var(--m-color-accent-peach-text)' },
  sky: { bg: 'var(--m-color-accent-sky)', text: 'var(--m-color-accent-sky-text)' },
  lemon: { bg: 'var(--m-color-accent-lemon)', text: 'var(--m-color-accent-lemon-text)' },
}
</script>

<template>
  <span
    class="m-badge"
    :style="{
      backgroundColor: colorMap[variant ?? 'mint'].bg,
      color: colorMap[variant ?? 'mint'].text,
    }"
  >
    <slot />
  </span>
</template>

<style scoped>
.m-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: var(--m-font-weight-body);
  letter-spacing: var(--m-letter-spacing, 0);
  line-height: 1.5;
  border-radius: var(--m-radius-button, 20px);
  padding: 4px 12px;
  white-space: nowrap;
}
</style>

<style>
/* toge: 角ばったバッジにボーダー追加 */
[data-theme="toge"] .m-badge {
  border: 1px solid var(--m-color-gray-600);
  font-weight: var(--m-font-weight-heading);
  text-transform: uppercase;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
}

/* nemu: 薄くミュート */
[data-theme="nemu"] .m-badge {
  opacity: var(--m-opacity-muted, 0.6);
}

/* kira: ちょっと光沢感 */
[data-theme="kira"] .m-badge {
  box-shadow: 0 1px 4px rgba(176, 255, 196, 0.15), 0 1px 2px rgba(224, 212, 255, 0.1);
}
</style>
