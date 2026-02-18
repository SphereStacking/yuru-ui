<script setup lang="ts">
defineProps<{
  modelValue?: boolean
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label
    class="mru:inline-flex mru:items-center mru:gap-xs mru:cursor-pointer"
    :class="disabled ? 'mru:opacity-50 mru:cursor-not-allowed' : ''"
  >
    <input
      type="checkbox"
      class="mru:sr-only"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="mru:relative mru:size-5 mru:rounded-button mru:border-theme mru:border-solid mru:shrink-0
             mru:transition-all mru:transition-theme"
      :class="modelValue
        ? 'mru:bg-primary-200 mru:border-primary-200'
        : 'mru:bg-transparent mru:border-gray-400'"
    >
      <svg
        class="mru:absolute mru:inset-0 mru:size-full mru:transition-all mru:transition-theme"
        viewBox="0 0 16 16"
        fill="none"
        :style="{ stroke: modelValue ? 'var(--color-primary-700)' : 'transparent', strokeDasharray: 20, strokeDashoffset: modelValue ? 0 : 20 }"
      >
        <polyline
          points="3.5 8.5 6.5 11.5 12.5 4.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-if="$slots.default" class="mru:text-[0.9375rem] mru:tracking-theme mru:text-gray-700 mru:dark:text-gray-200">
      <slot />
    </span>
  </label>
</template>
