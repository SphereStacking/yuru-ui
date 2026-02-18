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
    success: 'mru:bg-success mru:text-success-text mru:border-l-success-text',
    warning: 'mru:bg-warning mru:text-warning-text mru:border-l-warning-text',
    error: 'mru:bg-error mru:text-error-text mru:border-l-error-text',
    info: 'mru:bg-info mru:text-info-text mru:border-l-info-text',
  }
  return map[props.variant ?? 'info']
})
</script>

<template>
  <div
    v-if="isVisible"
    class="mru:flex mru:items-start mru:rounded-default mru:border-l-4 mru:border-l-solid
           mru:px-lg mru:py-md mru:font-body mru:leading-relaxed
           mru:transition-all mru:transition-theme"
    :class="variantClass"
    role="alert"
  >
    <div class="mru:flex-1">
      <slot />
    </div>
    <button
      v-if="closable"
      class="mru:shrink-0 mru:ml-sm mru:bg-transparent mru:border-none mru:text-current
             mru:text-xl mru:leading-none mru:cursor-pointer mru:opacity-60
             mru:hover:opacity-100 mru:px-2xs mru:transition-opacity mru:transition-theme"
      aria-label="Close"
      @click="handleClose"
    >
      &times;
    </button>
  </div>
</template>
