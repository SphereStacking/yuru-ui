<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  tabs: Array<{ key: string; label: string }>
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const accentColor = computed(() => `var(--color-accent-${props.color ?? 'mint'})`)

const strokeColorMap: Record<string, string> = {
  mint: '%23b0ffc4',
  pink: '%23ffd4e8',
  lavender: '%23e0d4ff',
  peach: '%23ffe4cc',
  sky: '%23ccedff',
  lemon: '%23fff6d5',
}

const wavySvg = computed(() => {
  const stroke = strokeColorMap[props.color ?? 'mint']
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 8'%3E%3Cpath d='M0 4c5 0 5-3 10-3s5 6 10 6 5-6 10-6 5 3 10 3' fill='none' stroke='${stroke}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`
})

const activeIndex = computed(() =>
  props.tabs.findIndex((t) => t.key === props.modelValue)
)
</script>

<template>
  <div
    class="m-tabs mru:w-full"
    :style="{
      '--m-tabs-accent': accentColor,
      '--m-tabs-wavy-svg': wavySvg,
    } as Record<string, string>"
  >
    <div class="m-tabs__list mru:flex mru:relative mru:border-b mru:border-gray-200" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="m-tabs__tab mru:flex-1 mru:px-md mru:py-xs mru:font-sans mru:text-base mru:font-body
               mru:text-gray-700 mru:bg-transparent mru:border-none mru:cursor-pointer
               mru:transition-all mru:transition-theme mru:dark:text-gray-200"
        :class="modelValue === tab.key ? 'm-tabs__tab--active mru:font-heading' : ''"
        :style="modelValue === tab.key ? { color: accentColor } : {}"
        role="tab"
        :aria-selected="modelValue === tab.key"
        :tabindex="modelValue === tab.key ? 0 : -1"
        @click="emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}
      </button>
      <div
        class="m-tabs__indicator mru:absolute mru:bottom-0 mru:left-0 mru:transition-transform mru:transition-theme"
        :style="{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
          backgroundColor: accentColor,
        }"
      />
    </div>
    <div class="mru:py-md" role="tabpanel">
      <slot />
    </div>
  </div>
</template>

<style>
/* default indicator */
.m-tabs__indicator {
  height: 2px;
}

/* hoyo: wavy indicator */
[data-theme="hoyo"] .m-tabs__indicator {
  height: 8px;
  bottom: -3px;
  background: none !important;
  background-image: var(--m-tabs-wavy-svg) !important;
  background-repeat: repeat-x;
  background-size: 40px 8px;
}

[data-theme="hoyo"] .m-tabs__tab:hover:not(.m-tabs__tab--active) {
  background-color: var(--color-gray-50);
}

[data-theme="pishi"] .m-tabs__tab:hover:not(.m-tabs__tab--active) {
  color: var(--color-primary-500);
}
</style>
