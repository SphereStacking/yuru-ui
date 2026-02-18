<script setup lang="ts">
import { computed, useId } from 'vue'

const props = defineProps<{
  modelValue?: boolean
  disabled?: boolean
  id?: string
  name?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const generatedId = useId()
const checkboxId = computed(() => props.id ?? generatedId)
</script>

<template>
  <label
    class="yr:inline-flex yr:items-center yr:gap-xs yr:cursor-pointer"
    :class="disabled ? 'yr:opacity-50 yr:cursor-not-allowed' : ''"
  >
    <input
      :id="checkboxId"
      type="checkbox"
      class="yr:sr-only yr:peer"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="yr:relative yr:size-5 yr:rounded-button yr:border-theme yr:border-solid yr:shrink-0
             yr:transition-all yr:transition-theme
             yr:peer-focus-visible:outline-none yr:peer-focus-visible:ring-2 yr:peer-focus-visible:ring-primary-200/50 yr:peer-focus-visible:ring-offset-2"
      :class="modelValue
        ? 'yr:bg-primary-200 yr:border-primary-200'
        : 'yr:bg-transparent yr:border-gray-400'"
    >
      <svg
        class="yr:absolute yr:inset-0 yr:size-full yr:transition-all yr:transition-theme"
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
    <span v-if="$slots.default" class="yr:text-[0.9375rem] yr:tracking-theme yr:text-gray-700 yr:dark:text-gray-200">
      <slot />
    </span>
  </label>
</template>
