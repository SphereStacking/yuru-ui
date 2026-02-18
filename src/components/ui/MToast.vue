<script setup lang="ts">
import { computed, inject, type ComputedRef } from 'vue'
import { useToast } from '../../composables/useToast'

const { toasts, removeToast } = useToast()

const injectedTheme = inject<ComputedRef<string>>('m-theme')
const theme = computed(() => injectedTheme?.value)

const variantClassMap: Record<string, string> = {
  success: 'mru:bg-success mru:text-success-text',
  warning: 'mru:bg-warning mru:text-warning-text',
  error: 'mru:bg-error mru:text-error-text',
  info: 'mru:bg-info mru:text-info-text',
}
</script>

<template>
  <Teleport to="body">
    <TransitionGroup
      name="m-toast"
      tag="div"
      class="mru:fixed mru:top-md mru:right-md mru:z-[10000] mru:flex mru:flex-col mru:gap-xs mru:max-w-[360px]"
      :data-theme="theme"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="mru:px-md mru:py-sm mru:rounded-default mru:shadow-theme-md
               mru:text-sm mru:flex mru:items-center mru:gap-xs"
        :class="variantClassMap[toast.variant]"
        role="alert"
      >
        <span class="mru:flex-1">{{ toast.message }}</span>
        <button
          class="mru:shrink-0 mru:bg-transparent mru:border-none mru:text-current
                 mru:text-xl mru:leading-none mru:cursor-pointer mru:opacity-60
                 mru:hover:opacity-100 mru:px-0.5 mru:transition-opacity mru:transition-theme"
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
.m-toast-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.m-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.m-toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.m-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.m-toast-move {
  transition: transform 0.3s ease;
}
</style>
