<script setup lang="ts">
import { ref } from 'vue'
import { useClickOutside } from '../../composables/useClickOutside'

defineProps<{
  align?: 'left' | 'right'
}>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

useClickOutside(wrapperRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="wrapperRef" class="m-dropdown">
    <div class="m-dropdown__trigger" @click="toggle">
      <slot name="trigger" />
    </div>
    <div
      v-if="isOpen"
      class="m-dropdown__menu"
      :class="[`m-dropdown__menu--${align ?? 'left'}`]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.m-dropdown {
  position: relative;
  display: inline-block;
}

.m-dropdown__trigger {
  cursor: pointer;
}

.m-dropdown__menu {
  position: absolute;
  top: calc(100% + 4px);
  min-width: 160px;
  background: var(--m-color-card-bg);
  border-radius: var(--m-radius-card);
  box-shadow: var(--m-shadow-md);
  border: var(--m-border-width) solid var(--m-color-gray-200);
  padding: var(--m-space-xs) 0;
  z-index: 100;
  opacity: 1;
  transform: translateY(0);
  animation: m-dropdown-enter var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-dropdown__menu--left {
  left: 0;
}

.m-dropdown__menu--right {
  right: 0;
}

@keyframes m-dropdown-enter {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<!-- Theme overrides -->
<style>
/* === toge: 角ばった硬質メニュー、オフセットシャドウ === */
[data-theme="toge"] .m-dropdown__menu {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
  box-shadow: 4px 4px 0 var(--m-color-gray-900);
}

/* === moko: ぽってり丸み、wobblyフィルター、スケールイン === */
[data-theme="moko"] .m-dropdown__menu {
  border-radius: var(--m-radius-card);
  filter: var(--m-filter-default);
  animation: m-dropdown-enter-moko var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease);
}
@keyframes m-dropdown-enter-moko {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* === kira: グラデーションボーダー風、グローシャドウ === */
[data-theme="kira"] .m-dropdown__menu {
  border-color: rgba(176, 255, 196, 0.4);
  box-shadow:
    var(--m-shadow-md),
    0 0 12px rgba(176, 255, 196, 0.15),
    0 0 4px rgba(224, 212, 255, 0.1);
}

/* === nemu: 霞む透明感、ゆっくりトランジション === */
[data-theme="nemu"] .m-dropdown__menu {
  opacity: 0.9;
  border-color: rgba(175, 217, 184, 0.15);
  animation: m-dropdown-enter-nemu 0.35s var(--m-transition-ease, ease);
}
@keyframes m-dropdown-enter-nemu {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}
</style>
