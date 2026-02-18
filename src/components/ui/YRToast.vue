<script setup lang="ts">
import { computed, inject, type ComputedRef } from 'vue'
import { useToast } from '../../composables/useToast'

const { toasts, removeToast } = useToast()

const injectedTheme = inject<ComputedRef<string>>('yr-theme')
const theme = computed(() => injectedTheme?.value)

const variantClassMap: Record<string, string> = {
  success: 'yr:bg-success yr:text-success-text',
  warning: 'yr:bg-warning yr:text-warning-text',
  error: 'yr:bg-error yr:text-error-text',
  info: 'yr:bg-info yr:text-info-text',
}
</script>

<template>
  <Teleport to="body">
    <TransitionGroup
      name="yr-toast"
      tag="div"
      class="yr:fixed yr:top-md yr:right-md yr:z-[10000] yr:flex yr:flex-col yr:gap-xs yr:max-w-[360px]"
      :data-theme="theme"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="yr:px-md yr:py-sm yr:rounded-default yr:shadow-theme-md
               yr:text-sm yr:flex yr:items-center yr:gap-xs"
        :class="variantClassMap[toast.variant]"
        role="alert"
      >
        <span class="yr:flex-1">{{ toast.message }}</span>
        <button
          class="yr:shrink-0 yr:bg-transparent yr:border-none yr:text-current
                 yr:text-xl yr:leading-none yr:cursor-pointer yr:opacity-60
                 yr:hover:opacity-100 yr:px-0.5 yr:transition-opacity yr:transition-theme
                 yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-1"
          aria-label="Close"
          @click="removeToast(toast.id)"
        >
          &times;
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<style>
.yr-toast-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.yr-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.yr-toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.yr-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.yr-toast-move {
  transition: transform 0.3s ease;
}
</style>
