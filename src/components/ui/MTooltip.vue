<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}>()

const tooltipId = computed(() => `m-tooltip-${Math.random().toString(36).slice(2, 9)}`)
const positionClass = computed(() => `m-tooltip__popup--${props.position ?? 'top'}`)
</script>

<template>
  <span
    class="m-tooltip"
    :aria-describedby="tooltipId"
  >
    <slot />
    <span
      :id="tooltipId"
      role="tooltip"
      class="m-tooltip__popup"
      :class="positionClass"
    >
      {{ content }}
    </span>
  </span>
</template>

<style scoped>
.m-tooltip {
  position: relative;
  display: inline-block;
}

.m-tooltip__popup {
  position: absolute;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background: var(--m-color-gray-800);
  color: #fff;
  padding: 6px 12px;
  font-size: 0.75rem;
  line-height: 1.4;
  border-radius: var(--m-radius-default, 8px);
  max-width: 200px;
  width: max-content;
  white-space: normal;
  transition:
    opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    visibility var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

/* Arrow */
.m-tooltip__popup::before {
  content: '';
  position: absolute;
  border: 5px solid transparent;
}

/* Position: top */
.m-tooltip__popup--top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}
.m-tooltip__popup--top::before {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--m-color-gray-800);
}

/* Position: bottom */
.m-tooltip__popup--bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
}
.m-tooltip__popup--bottom::before {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--m-color-gray-800);
}

/* Position: left */
.m-tooltip__popup--left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(4px);
}
.m-tooltip__popup--left::before {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--m-color-gray-800);
}

/* Position: right */
.m-tooltip__popup--right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(-4px);
}
.m-tooltip__popup--right::before {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--m-color-gray-800);
}

/* Show on hover / focus-within */
.m-tooltip:hover .m-tooltip__popup,
.m-tooltip:focus-within .m-tooltip__popup {
  opacity: 1;
  visibility: visible;
}

.m-tooltip:hover .m-tooltip__popup--top,
.m-tooltip:focus-within .m-tooltip__popup--top {
  transform: translateX(-50%) translateY(0);
}

.m-tooltip:hover .m-tooltip__popup--bottom,
.m-tooltip:focus-within .m-tooltip__popup--bottom {
  transform: translateX(-50%) translateY(0);
}

.m-tooltip:hover .m-tooltip__popup--left,
.m-tooltip:focus-within .m-tooltip__popup--left {
  transform: translateY(-50%) translateX(0);
}

.m-tooltip:hover .m-tooltip__popup--right,
.m-tooltip:focus-within .m-tooltip__popup--right {
  transform: translateY(-50%) translateX(0);
}
</style>

<!-- Theme overrides -->
<style>
/* === toge: 角ばった硬質ツールチップ、ボーダー付き、矢印なし === */
[data-theme="toge"] .m-tooltip__popup {
  border-radius: 0;
  border: 1px solid #fff;
}
[data-theme="toge"] .m-tooltip__popup::before {
  display: none;
}

/* === moko: ぽってり丸みツールチップ、wobblyフィルター、スケールアップ === */
[data-theme="moko"] .m-tooltip__popup {
  border-radius: 12px;
  filter: var(--m-filter-default);
  transform-origin: center;
}
[data-theme="moko"] .m-tooltip__popup--top {
  transform: translateX(-50%) translateY(4px) scale(0.9);
}
[data-theme="moko"] .m-tooltip__popup--bottom {
  transform: translateX(-50%) translateY(-4px) scale(0.9);
}
[data-theme="moko"] .m-tooltip__popup--left {
  transform: translateY(-50%) translateX(4px) scale(0.9);
}
[data-theme="moko"] .m-tooltip__popup--right {
  transform: translateY(-50%) translateX(-4px) scale(0.9);
}
[data-theme="moko"] .m-tooltip:hover .m-tooltip__popup--top,
[data-theme="moko"] .m-tooltip:focus-within .m-tooltip__popup--top {
  transform: translateX(-50%) translateY(0) scale(1);
}
[data-theme="moko"] .m-tooltip:hover .m-tooltip__popup--bottom,
[data-theme="moko"] .m-tooltip:focus-within .m-tooltip__popup--bottom {
  transform: translateX(-50%) translateY(0) scale(1);
}
[data-theme="moko"] .m-tooltip:hover .m-tooltip__popup--left,
[data-theme="moko"] .m-tooltip:focus-within .m-tooltip__popup--left {
  transform: translateY(-50%) translateX(0) scale(1);
}
[data-theme="moko"] .m-tooltip:hover .m-tooltip__popup--right,
[data-theme="moko"] .m-tooltip:focus-within .m-tooltip__popup--right {
  transform: translateY(-50%) translateX(0) scale(1);
}

/* === kira: グラデーション背景、グロー === */
[data-theme="kira"] .m-tooltip__popup {
  background: var(--m-gradient-primary);
  box-shadow: 0 0 12px rgba(176, 255, 196, 0.3), 0 0 4px rgba(224, 212, 255, 0.2);
}
[data-theme="kira"] .m-tooltip__popup--top::before {
  border-top-color: transparent;
  display: none;
}
[data-theme="kira"] .m-tooltip__popup--bottom::before {
  border-bottom-color: transparent;
  display: none;
}
[data-theme="kira"] .m-tooltip__popup--left::before {
  border-left-color: transparent;
  display: none;
}
[data-theme="kira"] .m-tooltip__popup--right::before {
  border-right-color: transparent;
  display: none;
}

/* === nemu: 霞むように薄く、ゆっくり表示 === */
[data-theme="nemu"] .m-tooltip__popup {
  opacity: 0;
  transition:
    opacity 0.45s var(--m-transition-ease, ease),
    visibility 0.45s var(--m-transition-ease, ease),
    transform 0.45s var(--m-transition-ease, ease);
}
[data-theme="nemu"] .m-tooltip:hover .m-tooltip__popup,
[data-theme="nemu"] .m-tooltip:focus-within .m-tooltip__popup {
  opacity: 0.8;
}
</style>
