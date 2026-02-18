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
    class="yr-tabs yr:w-full"
    :style="{
      '--yr-tabs-accent': accentColor,
      '--yr-tabs-wavy-svg': wavySvg,
    } as Record<string, string>"
  >
    <div class="yr-tabs__list yr:flex yr:relative yr:border-b yr:border-gray-200" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="yr-tabs__tab yr:flex-1 yr:px-md yr:py-xs yr:font-sans yr:text-base yr:font-body
               yr:text-gray-700 yr:bg-transparent yr:border-none yr:cursor-pointer
               yr:transition-all yr:transition-theme yr:dark:text-gray-200
               yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-2"
        :class="modelValue === tab.key ? 'yr-tabs__tab--active yr:font-heading' : ''"
        :style="modelValue === tab.key ? { color: accentColor } : {}"
        role="tab"
        :aria-selected="modelValue === tab.key"
        :tabindex="modelValue === tab.key ? 0 : -1"
        @click="emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}
      </button>
      <div
        class="yr-tabs__indicator yr:absolute yr:bottom-0 yr:left-0 yr:transition-transform yr:transition-theme"
        :style="{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
          backgroundColor: accentColor,
        }"
      />
    </div>
    <div class="yr:py-md" role="tabpanel">
      <slot />
    </div>
  </div>
</template>

<style>
/* default indicator */
.yr-tabs__indicator {
  height: 2px;
}

/* hoyo: wavy indicator */
[data-theme="hoyo"] .yr-tabs__indicator {
  height: 8px;
  bottom: -3px;
  background: none !important;
  background-image: var(--yr-tabs-wavy-svg) !important;
  background-repeat: repeat-x;
  background-size: 40px 8px;
}

[data-theme="hoyo"] .yr-tabs__tab:hover:not(.yr-tabs__tab--active) {
  background-color: var(--color-gray-50);
}

[data-theme="pishi"] .yr-tabs__tab:hover:not(.yr-tabs__tab--active) {
  color: var(--color-primary-500);
}
</style>
