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
    class="m-tooltip mru:relative mru:inline-block"
    :aria-describedby="tooltipId"
  >
    <slot />
    <span
      :id="tooltipId"
      role="tooltip"
      class="m-tooltip__popup mru:absolute mru:z-[1000] mru:opacity-0 mru:invisible mru:pointer-events-none
             mru:bg-gray-800 mru:text-white mru:px-sm mru:py-1.5 mru:text-xs mru:leading-snug
             mru:rounded-default mru:shadow-theme-sm mru:max-w-[200px] mru:w-max
             mru:transition-all mru:transition-theme"
      :class="positionClass"
    >
      {{ content }}
    </span>
  </span>
</template>

<style scoped>
/* Arrow */
.m-tooltip__popup::before {
  content: '';
  position: absolute;
  border: 5px solid transparent;
}

/* Positions */
.m-tooltip__popup--top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}
.m-tooltip__popup--top::before {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--color-gray-800);
}

.m-tooltip__popup--bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
}
.m-tooltip__popup--bottom::before {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--color-gray-800);
}

.m-tooltip__popup--left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(4px);
}
.m-tooltip__popup--left::before {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--color-gray-800);
}

.m-tooltip__popup--right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) translateX(-4px);
}
.m-tooltip__popup--right::before {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--color-gray-800);
}

/* Show on hover/focus */
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
