<script setup lang="ts">
defineProps<{
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
  removable?: boolean
}>()

defineEmits<{
  remove: []
}>()

const colorMap: Record<string, { bg: string; text: string }> = {
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
    class="m-tag"
    :style="{
      backgroundColor: colorMap[color ?? 'mint'].bg,
      color: colorMap[color ?? 'mint'].text,
    }"
  >
    <slot />
    <button
      v-if="removable"
      class="m-tag__close"
      type="button"
      aria-label="Remove"
      @click="$emit('remove')"
    >
      &times;
    </button>
  </span>
</template>

<style scoped>
.m-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--m-space-2xs);
  border-radius: var(--m-radius-button, 20px);
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: var(--m-font-weight-body);
  letter-spacing: var(--m-letter-spacing, 0);
  line-height: 1.5;
  white-space: nowrap;
}

.m-tag__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1;
  opacity: 0.7;
  transition: opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-tag__close:hover {
  opacity: 1;
}
</style>

<!-- Theme overrides (unscoped) -->
<style>
/* === toge: 角丸なし、ボーダー追加、uppercase === */
[data-theme="toge"] .m-tag {
  border-radius: 0;
  border: 1px solid var(--m-color-gray-600);
  text-transform: uppercase;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  font-weight: var(--m-font-weight-heading);
}

/* === moko: 大角丸、ぽってりpadding === */
[data-theme="moko"] .m-tag {
  padding: 6px 16px;
}

/* === kira: グロウシャドウ === */
[data-theme="kira"] .m-tag {
  box-shadow: 0 1px 4px rgba(176, 255, 196, 0.15), 0 1px 2px rgba(224, 212, 255, 0.1);
}

/* === nemu: opacity低下 === */
[data-theme="nemu"] .m-tag {
  opacity: var(--m-opacity-muted, 0.6);
}
</style>
