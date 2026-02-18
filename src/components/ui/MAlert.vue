<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  variant?: 'success' | 'warning' | 'error' | 'info'
  closable?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const isVisible = ref(true)

function handleClose() {
  isVisible.value = false
  emit('close')
}

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  success: { bg: 'var(--m-color-success)', border: 'var(--m-color-success-text)', text: 'var(--m-color-success-text)' },
  warning: { bg: 'var(--m-color-warning)', border: 'var(--m-color-warning-text)', text: 'var(--m-color-warning-text)' },
  error: { bg: 'var(--m-color-error)', border: 'var(--m-color-error-text)', text: 'var(--m-color-error-text)' },
  info: { bg: 'var(--m-color-info)', border: 'var(--m-color-info-text)', text: 'var(--m-color-info-text)' },
}
</script>

<template>
  <div
    v-if="isVisible"
    class="m-alert"
    role="alert"
    :style="{
      backgroundColor: colorMap[variant ?? 'info'].bg,
      borderLeftColor: colorMap[variant ?? 'info'].border,
      color: colorMap[variant ?? 'info'].text,
    }"
  >
    <div class="m-alert__content">
      <slot />
    </div>
    <button
      v-if="closable"
      class="m-alert__close"
      aria-label="Close"
      @click="handleClose"
    >
      &times;
    </button>
  </div>
</template>

<style scoped>
.m-alert {
  display: flex;
  align-items: flex-start;
  border-radius: var(--m-radius-default);
  border-left: 4px solid;
  padding: var(--m-space-md) var(--m-space-lg);
  font-weight: var(--m-font-weight-body);
  line-height: 1.6;
  transition:
    opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-alert__content {
  flex: 1;
}

.m-alert__close {
  flex-shrink: 0;
  margin-left: var(--m-space-sm);
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.6;
  padding: 0 var(--m-space-2xs);
  transition: opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-alert__close:hover {
  opacity: 1;
}
</style>

<!-- テーマ別オーバーライド -->
<style>
/* === toge: 角丸0、太い左ボーダー、太字 === */
[data-theme="toge"] .m-alert {
  border-left-width: 6px;
  font-weight: var(--m-font-weight-heading);
}

/* === moko: 大角丸、wobbly filter、ぽってりパディング === */
[data-theme="moko"] .m-alert {
  filter: var(--m-filter-default);
  padding: var(--m-space-lg) var(--m-space-xl);
}

/* === kira: グラデーション左ボーダー、グロウシャドウ === */
[data-theme="kira"] .m-alert {
  border-left-color: transparent;
  position: relative;
  box-shadow: var(--m-shadow-md);
  overflow: hidden;
}
[data-theme="kira"] .m-alert::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--m-gradient-primary);
}

/* === nemu: ミュートされたopacity、薄いボーダー === */
[data-theme="nemu"] .m-alert {
  opacity: 0.8;
  border-left-width: 3px;
}
</style>
