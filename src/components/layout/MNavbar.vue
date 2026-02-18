<script setup lang="ts">
defineProps<{
  sticky?: boolean
}>()
</script>

<template>
  <nav
    class="mru:flex mru:items-center mru:px-lg mru:py-sm
           mru:bg-white mru:border-b mru:border-theme mru:border-gray-200
           mru:shadow-theme-sm mru:transition-all mru:transition-theme
           mru:dark:bg-gray-900 mru:dark:border-gray-700"
    :class="sticky ? 'mru:sticky mru:top-0 mru:z-[100]' : ''"
  >
    <div class="mru:font-heading mru:text-lg mru:mr-lg">
      <slot name="brand" />
    </div>
    <div class="mru:flex-1 mru:flex mru:items-center mru:gap-md">
      <slot />
    </div>
    <div class="mru:flex mru:items-center mru:gap-sm">
      <slot name="actions" />
    </div>
  </nav>
</template>
