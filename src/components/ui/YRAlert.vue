<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  variant?: 'success' | 'warning' | 'error' | 'info'
  closable?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const isVisible = ref(true)

function handleClose() {
  isVisible.value = false
  emit('close')
}

const variantClass = computed(() => {
  const map: Record<string, string> = {
    success: 'yr:bg-success yr:text-success-text yr:border-l-success-text',
    warning: 'yr:bg-warning yr:text-warning-text yr:border-l-warning-text',
    error: 'yr:bg-error yr:text-error-text yr:border-l-error-text',
    info: 'yr:bg-info yr:text-info-text yr:border-l-info-text',
  }
  return map[props.variant ?? 'info']
})
</script>

<template>
  <div
    v-if="isVisible"
    class="yr:flex yr:items-start yr:rounded-default yr:border-l-4 yr:border-l-solid
           yr:px-lg yr:py-md yr:font-body yr:leading-relaxed
           yr:transition-all yr:transition-theme"
    :class="variantClass"
    role="alert"
  >
    <div class="yr:flex-1">
      <slot />
    </div>
    <button
      v-if="closable"
      class="yr:shrink-0 yr:ml-sm yr:bg-transparent yr:border-none yr:text-current
             yr:text-xl yr:leading-none yr:cursor-pointer yr:opacity-60
             yr:hover:opacity-100 yr:px-2xs yr:transition-opacity yr:transition-theme
             yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-1"
      aria-label="Close"
      @click="handleClose"
    >
      &times;
    </button>
  </div>
</template>
