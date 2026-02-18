<script setup lang="ts">
import { computed, useId } from 'vue'

const props = defineProps<{
  modelValue?: boolean
  disabled?: boolean
  id?: string
  name?: string
  label?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const generatedId = useId()
const switchId = computed(() => props.id ?? generatedId)
</script>

<template>
  <label
    class="yr:inline-flex yr:items-center yr:cursor-pointer"
    :class="disabled ? 'yr:opacity-50 yr:cursor-not-allowed' : ''"
  >
    <input
      :id="switchId"
      type="checkbox"
      class="yr:sr-only yr:peer"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      role="switch"
      :aria-checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="yr:relative yr:w-11 yr:h-6 yr:rounded-button yr:transition-colors yr:transition-theme
             yr:peer-focus-visible:outline-none yr:peer-focus-visible:ring-2 yr:peer-focus-visible:ring-primary-200/50 yr:peer-focus-visible:ring-offset-2"
      :class="modelValue ? 'yr:bg-primary-200' : 'yr:bg-gray-300'"
    >
      <span
        class="yr:absolute yr:top-0.5 yr:left-0.5 yr:size-5 yr:rounded-button
               yr:bg-white yr:shadow-theme-sm yr:transition-transform yr:transition-theme"
        :class="modelValue ? 'yr:translate-x-5' : ''"
      />
    </span>
    <span v-if="label" class="yr:text-[0.9375rem] yr:tracking-theme yr:text-gray-700 yr:dark:text-gray-200 yr:ml-xs">
      {{ label }}
    </span>
  </label>
</template>
