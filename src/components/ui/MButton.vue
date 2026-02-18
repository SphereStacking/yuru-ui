<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'outline' | 'ghost'
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="m-button"
    :class="[
      `m-button--${variant ?? 'primary'}`,
      `m-button--${color ?? 'mint'}`,
      `m-button--${size ?? 'md'}`,
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.m-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--m-space-xs);
  border-radius: var(--m-radius-button);
  filter: var(--m-filter-button);
  font-family: inherit;
  font-weight: var(--m-font-weight-heading);
  letter-spacing: var(--m-letter-spacing, 0);
  cursor: pointer;
  border: var(--m-border-width) solid transparent;
  transition:
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    box-shadow var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    background-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--m-shadow-md);
}

.m-button:active:not(:disabled) {
  transform: translateY(0px);
  box-shadow: var(--m-shadow-sm);
}

.m-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* --- Size --- */
.m-button--sm {
  padding: var(--m-space-2xs) var(--m-space-sm);
  font-size: 0.875rem;
}

.m-button--md {
  padding: var(--m-space-xs) var(--m-space-md);
  font-size: 1rem;
}

.m-button--lg {
  padding: var(--m-space-sm) var(--m-space-lg);
  font-size: 1.125rem;
}

/* --- Primary variant colors --- */
.m-button--primary.m-button--mint {
  background-color: var(--m-color-accent-mint);
  color: var(--m-color-accent-mint-text);
}

.m-button--primary.m-button--pink {
  background-color: var(--m-color-accent-pink);
  color: var(--m-color-accent-pink-text);
}

.m-button--primary.m-button--lavender {
  background-color: var(--m-color-accent-lavender);
  color: var(--m-color-accent-lavender-text);
}

.m-button--primary.m-button--peach {
  background-color: var(--m-color-accent-peach);
  color: var(--m-color-accent-peach-text);
}

.m-button--primary.m-button--sky {
  background-color: var(--m-color-accent-sky);
  color: var(--m-color-accent-sky-text);
}

.m-button--primary.m-button--lemon {
  background-color: var(--m-color-accent-lemon);
  color: var(--m-color-accent-lemon-text);
}

/* --- Outline variant colors --- */
.m-button--outline {
  background-color: transparent;
}

.m-button--outline.m-button--mint {
  border-color: var(--m-color-accent-mint);
  color: var(--m-color-accent-mint-text);
}

.m-button--outline.m-button--pink {
  border-color: var(--m-color-accent-pink);
  color: var(--m-color-accent-pink-text);
}

.m-button--outline.m-button--lavender {
  border-color: var(--m-color-accent-lavender);
  color: var(--m-color-accent-lavender-text);
}

.m-button--outline.m-button--peach {
  border-color: var(--m-color-accent-peach);
  color: var(--m-color-accent-peach-text);
}

.m-button--outline.m-button--sky {
  border-color: var(--m-color-accent-sky);
  color: var(--m-color-accent-sky-text);
}

.m-button--outline.m-button--lemon {
  border-color: var(--m-color-accent-lemon);
  color: var(--m-color-accent-lemon-text);
}

.m-button--outline:hover:not(:disabled) {
  background-color: var(--m-color-gray-50);
}

/* --- Ghost variant colors --- */
.m-button--ghost {
  background-color: transparent;
  border-color: transparent;
}

.m-button--ghost.m-button--mint {
  color: var(--m-color-accent-mint-text);
}

.m-button--ghost.m-button--pink {
  color: var(--m-color-accent-pink-text);
}

.m-button--ghost.m-button--lavender {
  color: var(--m-color-accent-lavender-text);
}

.m-button--ghost.m-button--peach {
  color: var(--m-color-accent-peach-text);
}

.m-button--ghost.m-button--sky {
  color: var(--m-color-accent-sky-text);
}

.m-button--ghost.m-button--lemon {
  color: var(--m-color-accent-lemon-text);
}

.m-button--ghost:hover:not(:disabled) {
  background-color: var(--m-color-gray-100);
}
</style>

<!-- テーマ別の「触り心地」— scoped外で data-theme セレクタを使う -->
<style>
/* === toge: カチッと硬質。hover時も上に浮かず横にズレる === */
[data-theme="toge"] .m-button:hover:not(:disabled) {
  transform: translate(-1px, -1px);
  box-shadow: var(--m-shadow-lg);
}
[data-theme="toge"] .m-button:active:not(:disabled) {
  transform: translate(1px, 1px);
  box-shadow: none;
}
[data-theme="toge"] .m-button--outline {
  border-color: var(--m-color-gray-700);
}

/* === moko: ぷにっとバウンス。hover時にぽわっと膨らむ === */
[data-theme="moko"] .m-button:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.03);
  box-shadow: var(--m-shadow-lg);
}
[data-theme="moko"] .m-button:active:not(:disabled) {
  transform: translateY(1px) scale(0.98);
  box-shadow: var(--m-shadow-sm);
}

/* === kira: プライマリボタンにグラデーション背景、ホバーでシマー === */
[data-theme="kira"] .m-button--primary {
  background-image: var(--m-gradient-primary);
  background-size: 200% 100%;
  background-position: 0% 50%;
  position: relative;
  overflow: hidden;
}
[data-theme="kira"] .m-button--primary:hover:not(:disabled) {
  transform: translateY(-2px);
  background-position: 100% 50%;
  box-shadow: var(--m-shadow-lg);
}
[data-theme="kira"] .m-button--primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--m-gradient-shimmer, linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%));
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
[data-theme="kira"] .m-button--primary:hover::after {
  opacity: 1;
  animation: kira-shimmer 0.8s ease-out;
}
@keyframes kira-shimmer {
  0% { background-position: 200% 50%; }
  100% { background-position: -200% 50%; }
}
[data-theme="kira"] .m-button--outline {
  border-color: rgba(176, 255, 196, 0.4);
}

/* === nemu: ゆっくり、ふわっ。hover時もほんの少しだけ === */
[data-theme="nemu"] .m-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--m-shadow-md);
  opacity: var(--m-opacity-hover, 0.85);
}
[data-theme="nemu"] .m-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: none;
  opacity: 0.7;
}
[data-theme="nemu"] .m-button--primary {
  opacity: 0.85;
}
[data-theme="nemu"] .m-button--outline {
  border-color: rgba(175, 217, 184, 0.3);
}
[data-theme="nemu"] .m-button--ghost {
  opacity: 0.7;
}
</style>
