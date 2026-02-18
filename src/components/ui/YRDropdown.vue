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
  <div ref="wrapperRef" class="yr:relative yr:inline-block">
    <div
      class="yr:cursor-pointer yr:rounded-button
             yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-2"
      tabindex="0"
      role="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      @click="toggle"
      @keydown.enter="toggle"
      @keydown.space.prevent="toggle"
      @keydown.escape="isOpen && (isOpen = false)"
    >
      <slot name="trigger" />
    </div>
    <div
      v-if="isOpen"
      role="menu"
      class="yr:animate-dropdown-in yr:absolute yr:top-[calc(100%+4px)] yr:min-w-40
             yr:bg-white yr:rounded-card yr:shadow-theme-md
             yr:border-theme yr:border-solid yr:border-gray-200
             yr:py-xs yr:z-[100]
             yr:dark:bg-gray-900 yr:dark:border-gray-700"
      :class="align === 'right' ? 'yr:right-0' : 'yr:left-0'"
    >
      <slot />
    </div>
  </div>
</template>
