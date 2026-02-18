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
    class="m-input"
    :type="type ?? 'text'"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.m-input {
  display: block;
  width: 100%;
  padding: var(--m-space-xs) var(--m-space-md);
  font-family: inherit;
  font-size: 1rem;
  font-weight: var(--m-font-weight-body);
  color: var(--m-color-text-main);
  background-color: var(--m-color-card-bg);
  border: var(--m-border-width) solid var(--m-color-gray-200);
  border-radius: var(--m-radius-input);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.m-input::placeholder {
  color: var(--m-color-gray-400);
}

.m-input:focus {
  border-color: var(--m-color-primary-200);
  box-shadow: 0 0 0 3px rgba(176, 255, 196, 0.3);
}

.m-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--m-color-gray-100);
}
</style>
