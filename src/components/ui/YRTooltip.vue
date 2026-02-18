<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}>()

const tooltipId = computed(() => `yr-tooltip-${Math.random().toString(36).slice(2, 9)}`)
const positionClass = computed(() => `yr-tooltip__popup--${props.position ?? 'top'}`)
</script>

<template>
  <span
    class="yr-tooltip yr:relative yr:inline-block"
    :aria-describedby="tooltipId"
  >
    <slot />
    <span
      :id="tooltipId"
      role="tooltip"
      class="yr-tooltip__popup yr:absolute yr:z-[1000] yr:opacity-0 yr:invisible yr:pointer-events-none
             yr:bg-gray-800 yr:text-white yr:px-sm yr:py-1.5 yr:text-xs yr:leading-snug
             yr:rounded-default yr:shadow-theme-sm yr:max-w-[200px] yr:w-max
             yr:transition-all yr:transition-theme"
      :class="positionClass"
    >
      {{ content }}
    </span>
  </span>
</template>

<style scoped>
/* Arrow */
.yr-tooltip__popup::before {
  content: '';
  position: absolute;
  border: 5px solid transparent;
}

/* Positions */
.yr-tooltip__popup--top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}
.yr-tooltip__popup--top::before {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--color-gray-800);
}

.yr-tooltip__popup--bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
}
.yr-tooltip__popup--bottom::before {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--color-gray-800);
}

.yr-tooltip__popup--left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(4px);
}
.yr-tooltip__popup--left::before {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--color-gray-800);
}

.yr-tooltip__popup--right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(-4px);
}
.yr-tooltip__popup--right::before {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--color-gray-800);
}

/* Show on hover/focus */
.yr-tooltip:hover .yr-tooltip__popup,
.yr-tooltip:focus-within .yr-tooltip__popup {
  opacity: 1;
  visibility: visible;
}
.yr-tooltip:hover .yr-tooltip__popup--top,
.yr-tooltip:focus-within .yr-tooltip__popup--top {
  transform: translateX(-50%) translateY(0);
}
.yr-tooltip:hover .yr-tooltip__popup--bottom,
.yr-tooltip:focus-within .yr-tooltip__popup--bottom {
  transform: translateX(-50%) translateY(0);
}
.yr-tooltip:hover .yr-tooltip__popup--left,
.yr-tooltip:focus-within .yr-tooltip__popup--left {
  transform: translateY(-50%) translateX(0);
}
.yr-tooltip:hover .yr-tooltip__popup--right,
.yr-tooltip:focus-within .yr-tooltip__popup--right {
  transform: translateY(-50%) translateX(0);
}
</style>
