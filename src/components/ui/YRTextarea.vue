<script setup lang="ts">
import { computed, useId } from 'vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  rows?: number
  id?: string
  name?: string
  label?: string
  error?: string
  required?: boolean
  helperText?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const generatedId = useId()
const inputId = computed(() => props.id || generatedId)
const errorId = computed(() => `${inputId.value}-error`)
const helperId = computed(() => `${inputId.value}-helper`)

const describedBy = computed(() => {
  if (props.error) return errorId.value
  if (props.helperText) return helperId.value
  return undefined
})

const errorClass = computed(() =>
  props.error
    ? 'yr:border-secondary-300 yr:dark:border-secondary-400 yr:focus:border-secondary-400'
    : ''
)
</script>

<template>
  <div class="yr:w-full">
    <label
      v-if="label"
      :for="inputId"
      class="yr:block yr:text-sm yr:font-body yr:text-gray-700 yr:dark:text-gray-300 yr:mb-1"
    >
      {{ label }}
      <span v-if="required" class="yr:text-secondary-500 yr:ml-0.5">*</span>
    </label>
    <textarea
      :id="inputId"
      :name="name"
      :aria-invalid="!!error"
      :aria-describedby="describedBy"
      :aria-required="required || undefined"
      :class="[
        'yr:block yr:w-full yr:px-md yr:py-xs yr:font-sans yr:text-base yr:font-body',
        'yr:text-gray-700 yr:bg-white yr:border-theme yr:border-solid yr:border-gray-200',
        'yr:rounded-input yr:outline-none yr:resize-y yr:transition-all yr:transition-theme',
        'yr:placeholder:text-gray-400',
        'yr:focus:border-primary-300 yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-2',
        'yr:disabled:opacity-50 yr:disabled:cursor-not-allowed yr:disabled:bg-gray-100',
        'yr:dark:text-gray-200 yr:dark:bg-gray-800 yr:dark:border-gray-600',
        'yr:dark:placeholder:text-gray-500',
        'yr:dark:focus:border-primary-400 yr:dark:focus-visible:ring-primary-400/30 yr:dark:ring-offset-gray-900',
        'yr:dark:disabled:bg-gray-800/50',
        errorClass,
      ]"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows ?? 3"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <p
      v-if="error"
      :id="errorId"
      role="alert"
      class="yr:mt-1 yr:text-xs yr:text-error-text"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helperText"
      :id="helperId"
      class="yr:mt-1 yr:text-xs yr:text-gray-500 yr:dark:text-gray-400"
    >
      {{ helperText }}
    </p>
  </div>
</template>
