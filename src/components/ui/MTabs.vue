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

const accentColor = computed(() => `var(--m-color-accent-${props.color ?? 'mint'})`)

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
    class="m-tabs"
    :class="[`m-tabs--${color ?? 'mint'}`]"
    :style="{
      '--m-tabs-accent': accentColor,
      '--m-tabs-wavy-svg': wavySvg,
    } as Record<string, string>"
  >
    <div class="m-tabs__list" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key"
        class="m-tabs__tab"
        :class="{ 'm-tabs__tab--active': modelValue === tab.key }"
        role="tab"
        :aria-selected="modelValue === tab.key"
        :tabindex="modelValue === tab.key ? 0 : -1"
        @click="emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}
      </button>
      <div
        class="m-tabs__indicator"
        :style="{
          '--m-tabs-count': tabs.length,
          '--m-tabs-index': activeIndex,
        } as Record<string, string | number>"
      />
    </div>
    <div class="m-tabs__panel" role="tabpanel">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.m-tabs {
  width: 100%;
}

.m-tabs__list {
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--m-color-gray-200);
}

.m-tabs__tab {
  flex: 1;
  padding: var(--m-space-xs) var(--m-space-md);
  font-family: inherit;
  font-size: 1rem;
  font-weight: var(--m-font-weight-body);
  color: var(--m-color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
  transition:
    color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    background-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-tabs__tab--active {
  font-weight: var(--m-font-weight-heading);
  color: var(--m-tabs-accent);
}

.m-tabs__indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: calc(100% / var(--m-tabs-count));
  transform: translateX(calc(var(--m-tabs-index) * 100%));
  background-color: var(--m-tabs-accent);
  transition:
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-tabs__panel {
  padding: var(--m-space-md) 0;
}
</style>

<!-- テーマ別スタイル -->
<style>
/* === hoyo: なみなみインジケーター、ホバー背景 === */
[data-theme="hoyo"] .m-tabs__indicator {
  height: 8px;
  bottom: -3px;
  background: none;
  background-image: var(--m-tabs-wavy-svg);
  background-repeat: repeat-x;
  background-size: 40px 8px;
}
[data-theme="hoyo"] .m-tabs__tab:hover:not(.m-tabs__tab--active) {
  background-color: var(--m-color-gray-50);
}

/* === toge: 角なし、太い3pxインジケーター、大文字、強い下線 === */
[data-theme="toge"] .m-tabs__list {
  border-bottom: 2px solid var(--m-color-gray-700);
}
[data-theme="toge"] .m-tabs__tab {
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}
[data-theme="toge"] .m-tabs__indicator {
  height: 3px;
}

/* === moko: ピル型背景インジケーター、バウンシー === */
[data-theme="moko"] .m-tabs__list {
  border-bottom: none;
  background-color: var(--m-color-gray-100);
  border-radius: var(--m-radius-button);
  padding: var(--m-space-2xs);
  gap: var(--m-space-2xs);
}
[data-theme="moko"] .m-tabs__tab {
  border-radius: var(--m-radius-button);
  position: relative;
  z-index: 1;
}
[data-theme="moko"] .m-tabs__indicator {
  height: calc(100% - var(--m-space-2xs) * 2);
  top: var(--m-space-2xs);
  bottom: auto;
  background-color: var(--m-color-bg);
  border-radius: var(--m-radius-button);
  box-shadow: var(--m-shadow-sm);
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
[data-theme="moko"] .m-tabs__tab--active {
  color: var(--m-tabs-accent);
}

/* === kira: グラデーションインジケーター、テキストグロウ === */
[data-theme="kira"] .m-tabs__indicator {
  background: var(--m-gradient-primary);
  background-color: transparent;
}
[data-theme="kira"] .m-tabs__tab--active {
  text-shadow:
    0 0 8px rgba(176, 255, 196, 0.5),
    0 0 16px rgba(224, 212, 255, 0.3);
}

/* === nemu: 細い1pxインジケーター、非活性ミュート、遅い遷移 === */
[data-theme="nemu"] .m-tabs__indicator {
  height: 1px;
  transition:
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="nemu"] .m-tabs__tab {
  opacity: var(--m-opacity-muted, 0.5);
  transition:
    color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="nemu"] .m-tabs__tab--active {
  opacity: 1;
}
</style>
