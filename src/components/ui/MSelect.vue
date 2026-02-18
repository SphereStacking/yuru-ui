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
  <div
    ref="wrapperRef"
    class="mru:relative mru:inline-block mru:w-full"
    :class="disabled ? 'mru:opacity-50 mru:cursor-not-allowed' : ''"
  >
    <button
      type="button"
      class="mru:flex mru:items-center mru:justify-between mru:w-full
             mru:px-md mru:py-xs mru:font-sans mru:text-base mru:font-body
             mru:text-gray-700 mru:bg-white mru:border-theme mru:border-solid mru:border-gray-200
             mru:rounded-input mru:outline-none mru:cursor-pointer
             mru:transition-all mru:transition-theme
             mru:focus:border-primary-200 mru:focus:ring-3 mru:focus:ring-primary-200/30
             mru:dark:text-gray-200 mru:dark:bg-gray-900 mru:dark:border-gray-700"
      :disabled="disabled"
      @click="toggle"
    >
      <span v-if="selectedLabel">{{ selectedLabel }}</span>
      <span v-else class="mru:text-gray-400">{{ placeholder }}</span>
      <svg
        class="mru:shrink-0 mru:text-gray-400 mru:transition-transform mru:duration-200"
        :class="isOpen ? 'mru:rotate-180' : ''"
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
    <div
      v-if="isOpen"
      class="m-select-dropdown mru:absolute mru:top-[calc(100%+4px)] mru:left-0 mru:right-0
             mru:bg-white mru:rounded-card mru:border-theme mru:border-solid mru:border-gray-200
             mru:shadow-theme-md mru:max-h-[200px] mru:overflow-y-auto mru:z-[100]
             mru:dark:bg-gray-900 mru:dark:border-gray-700"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="mru:px-md mru:py-xs mru:cursor-pointer mru:transition-colors mru:duration-100
               mru:hover:bg-gray-100 mru:dark:hover:bg-gray-800"
        :class="option.value === modelValue ? 'mru:font-heading mru:text-primary-500' : ''"
        @click="select(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style>
.m-select-dropdown {
  animation: m-select-enter 0.15s ease;
}
@keyframes m-select-enter {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
