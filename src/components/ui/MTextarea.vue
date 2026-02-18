<script setup lang="ts">
defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  rows?: number
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <textarea
    class="m-textarea"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows ?? 3"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<style scoped>
.m-textarea {
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
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.m-textarea::placeholder {
  color: var(--m-color-gray-400);
}

.m-textarea:focus {
  border-color: var(--m-color-primary-200);
  box-shadow: 0 0 0 3px rgba(176, 255, 196, 0.3);
}

.m-textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--m-color-gray-100);
}
</style>
