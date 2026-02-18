<script setup lang="ts">
defineProps<{
  sticky?: boolean
}>()
</script>

<template>
  <nav class="m-navbar" :class="{ 'm-navbar--sticky': sticky }">
    <div class="m-navbar__brand"><slot name="brand" /></div>
    <div class="m-navbar__center"><slot /></div>
    <div class="m-navbar__actions"><slot name="actions" /></div>
  </nav>
</template>

<style scoped>
.m-navbar {
  display: flex;
  align-items: center;
  padding: var(--m-space-sm) var(--m-space-lg);
  background-color: var(--m-color-card-bg);
  border-bottom: var(--m-border-width) solid var(--m-color-gray-200);
  box-shadow: var(--m-shadow-sm);
  transition:
    box-shadow var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    border-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-navbar--sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}

.m-navbar__brand {
  font-weight: var(--m-font-weight-display, var(--m-font-weight-heading));
  font-size: 1.125rem;
  margin-right: var(--m-space-lg);
}

.m-navbar__center {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--m-space-md);
}

.m-navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--m-space-sm);
}
</style>

<!-- Theme overrides -->
<style>
/* === toge: thick border, no shadow, uppercase brand === */
[data-theme="toge"] .m-navbar {
  border-bottom: 2px solid var(--m-color-gray-700);
  box-shadow: none;
}
[data-theme="toge"] .m-navbar__brand {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* === moko: larger padding, wobbly filter, rounded bottom === */
[data-theme="moko"] .m-navbar {
  padding: var(--m-space-md) var(--m-space-xl);
  filter: var(--m-filter-default);
  border-radius: 0 0 24px 24px;
}

/* === kira: gradient bottom border via ::after, subtle glow === */
[data-theme="kira"] .m-navbar {
  position: relative;
  border-bottom-color: transparent;
  box-shadow: var(--m-shadow-sm), 0 2px 12px rgba(176, 255, 196, 0.15);
}
[data-theme="kira"] .m-navbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--m-gradient-primary);
  pointer-events: none;
}

/* === nemu: faint border, muted shadow, slight transparency === */
[data-theme="nemu"] .m-navbar {
  border-bottom-color: rgba(175, 217, 184, 0.2);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  opacity: 0.95;
}
</style>
