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
    class="mru:inline-flex mru:items-center mru:cursor-pointer"
    :class="disabled ? 'mru:opacity-50 mru:cursor-not-allowed' : ''"
  >
    <input
      type="checkbox"
      class="mru:sr-only"
      :checked="modelValue"
      :disabled="disabled"
      role="switch"
      :aria-checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="mru:relative mru:w-11 mru:h-6 mru:rounded-button mru:transition-colors mru:transition-theme"
      :class="modelValue ? 'mru:bg-primary-200' : 'mru:bg-gray-300'"
    >
      <span
        class="mru:absolute mru:top-0.5 mru:left-0.5 mru:size-5 mru:rounded-button
               mru:bg-white mru:shadow-theme-sm mru:transition-transform mru:transition-theme"
        :class="modelValue ? 'mru:translate-x-5' : ''"
      />
    </span>
  </label>
</template>
