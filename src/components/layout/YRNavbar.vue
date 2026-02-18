<script setup lang="ts">
defineProps<{
  sticky?: boolean
}>()
</script>

<template>
  <nav
    class="yr:flex yr:items-center yr:px-lg yr:py-sm
           yr:bg-white yr:border-b yr:border-theme yr:border-gray-200
           yr:shadow-theme-sm yr:transition-all yr:transition-theme
           yr:dark:bg-gray-900 yr:dark:border-gray-700"
    :class="sticky ? 'yr:sticky yr:top-0 yr:z-[100]' : ''"
  >
    <div class="yr:font-heading yr:text-lg yr:mr-lg">
      <slot name="brand" />
    </div>
    <div class="yr:flex-1 yr:flex yr:items-center yr:gap-md">
      <slot />
    </div>
    <div class="yr:flex yr:items-center yr:gap-sm">
      <slot name="actions" />
    </div>
  </nav>
</template>
