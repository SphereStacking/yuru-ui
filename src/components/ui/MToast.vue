<script setup lang="ts">
import { computed, inject, type ComputedRef } from 'vue'
import { useToast } from '../../composables/useToast'

const { toasts, removeToast } = useToast()

const injectedTheme = inject<ComputedRef<string>>('m-theme')
const theme = computed(() => injectedTheme?.value)

const colorMap: Record<string, { bg: string; text: string }> = {
  success: { bg: 'var(--m-color-success)', text: 'var(--m-color-success-text)' },
  warning: { bg: 'var(--m-color-warning)', text: 'var(--m-color-warning-text)' },
  error: { bg: 'var(--m-color-error)', text: 'var(--m-color-error-text)' },
  info: { bg: 'var(--m-color-info)', text: 'var(--m-color-info-text)' },
}
</script>

<template>
  <Teleport to="body">
    <TransitionGroup
      name="m-toast"
      tag="div"
      class="m-toast-container"
      :data-theme="theme"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="m-toast"
        :style="{
          backgroundColor: colorMap[toast.variant].bg,
          color: colorMap[toast.variant].text,
        }"
        role="alert"
      >
        <span class="m-toast__message">{{ toast.message }}</span>
        <button
          class="m-toast__close"
          aria-label="Close"
          @click="removeToast(toast.id)"
        >
          &times;
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<style scoped>
.m-toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 360px;
}

.m-toast {
  padding: 12px 16px;
  border-radius: var(--m-radius-default, 8px);
  box-shadow: var(--m-shadow-md);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition:
    opacity var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease),
    transform var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease);
}

.m-toast__message {
  flex: 1;
}

.m-toast__close {
  flex-shrink: 0;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.6;
  padding: 0 2px;
  transition: opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-toast__close:hover {
  opacity: 1;
}

/* Enter / Leave transitions */
.m-toast-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.m-toast-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.m-toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.m-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.m-toast-move {
  transition: transform 0.3s ease;
}
</style>

<!-- Theme overrides (unscoped) -->
<style>
/* === toge: 角丸0、ボーダー追加、アニメーション無し === */
[data-theme="toge"] .m-toast-container .m-toast {
  border-radius: 0;
  border: 1px solid var(--m-color-gray-600);
}
[data-theme="toge"] .m-toast-enter-active,
[data-theme="toge"] .m-toast-leave-active {
  transition: none;
}
[data-theme="toge"] .m-toast-enter-from {
  opacity: 1;
  transform: none;
}
[data-theme="toge"] .m-toast-leave-to {
  opacity: 0;
  transform: none;
}

/* === moko: 大角丸、wobbly filter、バウンス入場 === */
[data-theme="moko"] .m-toast-container .m-toast {
  border-radius: 16px;
  filter: var(--m-filter-default);
}
[data-theme="moko"] .m-toast-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
[data-theme="moko"] .m-toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}

/* === kira: グロウシャドウ、左にグラデーションアクセントライン === */
[data-theme="kira"] .m-toast-container .m-toast {
  box-shadow:
    0 0 12px rgba(176, 255, 196, 0.15),
    0 0 6px rgba(224, 212, 255, 0.1),
    var(--m-shadow-md);
  position: relative;
  overflow: hidden;
}
[data-theme="kira"] .m-toast-container .m-toast::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--m-gradient-primary);
}

/* === nemu: ミュートopacity、ゆっくりトランジション === */
[data-theme="nemu"] .m-toast-container .m-toast {
  opacity: 0.85;
}
[data-theme="nemu"] .m-toast-enter-active {
  transition:
    opacity 0.5s var(--m-transition-ease, ease),
    transform 0.5s var(--m-transition-ease, ease);
}
[data-theme="nemu"] .m-toast-leave-active {
  transition:
    opacity 0.4s var(--m-transition-ease, ease),
    transform 0.4s var(--m-transition-ease, ease);
}
</style>
