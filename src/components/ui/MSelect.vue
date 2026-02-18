<script setup lang="ts">
import { ref, computed } from 'vue'
import { useClickOutside } from '../../composables/useClickOutside'

const props = defineProps<{
  modelValue?: string | number
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue)
  return found?.label
})

function toggle() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

function select(value: string | number) {
  emit('update:modelValue', value)
  isOpen.value = false
}

useClickOutside(wrapperRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="wrapperRef" class="m-select" :class="{ 'm-select--disabled': disabled }">
    <button
      type="button"
      class="m-select__trigger"
      :disabled="disabled"
      @click="toggle"
    >
      <span v-if="selectedLabel" class="m-select__value">{{ selectedLabel }}</span>
      <span v-else class="m-select__placeholder">{{ placeholder }}</span>
      <svg
        class="m-select__chevron"
        :class="{ 'm-select__chevron--open': isOpen }"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div v-if="isOpen" class="m-select__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        class="m-select__option"
        :class="{ 'm-select__option--selected': option.value === modelValue }"
        @click="select(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.m-select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.m-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--m-space-xs) var(--m-space-md);
  font-family: inherit;
  font-size: 1rem;
  font-weight: var(--m-font-weight-body);
  color: var(--m-color-text-main);
  background: var(--m-color-card-bg);
  border: var(--m-border-width) solid var(--m-color-gray-200);
  border-radius: var(--m-radius-input);
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.m-select__trigger:focus {
  border-color: var(--m-color-primary-200);
  box-shadow: 0 0 0 3px rgba(176, 255, 196, 0.3);
}

.m-select__placeholder {
  color: var(--m-color-gray-400);
}

.m-select__chevron {
  flex-shrink: 0;
  transition: transform 0.2s ease;
  color: var(--m-color-gray-400);
}

.m-select__chevron--open {
  transform: rotate(180deg);
}

.m-select__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--m-color-card-bg);
  border-radius: var(--m-radius-card);
  border: var(--m-border-width) solid var(--m-color-gray-200);
  box-shadow: var(--m-shadow-md);
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  animation: m-select-enter var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-select__option {
  padding: var(--m-space-xs) var(--m-space-md);
  cursor: pointer;
  transition: background-color 0.1s;
}

.m-select__option:hover {
  background-color: var(--m-color-gray-100);
}

.m-select__option--selected {
  font-weight: var(--m-font-weight-heading);
  color: var(--m-color-primary-500);
}

.m-select--disabled .m-select__trigger {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--m-color-gray-100);
}

@keyframes m-select-enter {
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
/* === toge: 角ばった硬質セレクト、オフセットシャドウ === */
[data-theme="toge"] .m-select__trigger {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
}
[data-theme="toge"] .m-select__dropdown {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
  box-shadow: 4px 4px 0 var(--m-color-gray-900);
}

/* === moko: ぽってり丸み、wobblyフィルター、スケールイン === */
[data-theme="moko"] .m-select__dropdown {
  border-radius: var(--m-radius-card);
  filter: var(--m-filter-default);
  animation: m-select-enter-moko var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease);
}
@keyframes m-select-enter-moko {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* === kira: グラデーションアクセント、グローシャドウ === */
[data-theme="kira"] .m-select__option--selected {
  background: var(--m-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
[data-theme="kira"] .m-select__dropdown {
  border-color: rgba(176, 255, 196, 0.4);
  box-shadow:
    var(--m-shadow-md),
    0 0 12px rgba(176, 255, 196, 0.15),
    0 0 4px rgba(224, 212, 255, 0.1);
}

/* === nemu: 霞む透明感、ゆっくりトランジション === */
[data-theme="nemu"] .m-select__trigger {
  border-color: rgba(175, 217, 184, 0.15);
}
[data-theme="nemu"] .m-select__dropdown {
  opacity: 0.9;
  border-color: rgba(175, 217, 184, 0.15);
  animation: m-select-enter-nemu 0.35s var(--m-transition-ease, ease);
}
@keyframes m-select-enter-nemu {
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
