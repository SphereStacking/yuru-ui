<script setup lang="ts">
import { ref } from 'vue'
import { useClickOutside } from '../../composables/useClickOutside'

defineProps<{
  align?: 'left' | 'right'
}>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

useClickOutside(wrapperRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="wrapperRef" class="mru:relative mru:inline-block">
    <div class="mru:cursor-pointer" @click="toggle">
      <slot name="trigger" />
    </div>
    <div
      v-if="isOpen"
      class="m-dropdown-menu mru:absolute mru:top-[calc(100%+4px)] mru:min-w-40
             mru:bg-white mru:rounded-card mru:shadow-theme-md
             mru:border-theme mru:border-solid mru:border-gray-200
             mru:py-xs mru:z-[100]
             mru:dark:bg-gray-900 mru:dark:border-gray-700"
      :class="align === 'right' ? 'mru:right-0' : 'mru:left-0'"
    >
      <slot />
    </div>
  </div>
</template>

<style>
.m-dropdown-menu {
  animation: m-dropdown-enter 0.15s ease;
}
@keyframes m-dropdown-enter {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
