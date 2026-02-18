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
  cursor: pointer;
  border: var(--m-border-width) solid transparent;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
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
