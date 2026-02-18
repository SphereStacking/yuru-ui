<script setup lang="ts">
defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  type?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    class="mru:block mru:w-full mru:px-md mru:py-xs mru:font-sans mru:text-base mru:font-body
           mru:text-gray-700 mru:bg-white mru:border-theme mru:border-solid mru:border-gray-200
           mru:rounded-input mru:outline-none mru:transition-all mru:transition-theme
           mru:placeholder:text-gray-400
           mru:focus:border-primary-200 mru:focus:ring-3 mru:focus:ring-primary-200/30
           mru:disabled:opacity-50 mru:disabled:cursor-not-allowed mru:disabled:bg-gray-100
           mru:dark:text-gray-200 mru:dark:bg-gray-900 mru:dark:border-gray-700"
    :type="type ?? 'text'"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
