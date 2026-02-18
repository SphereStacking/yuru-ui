<script setup lang="ts">
defineProps<{
  padding?: string
}>()
</script>

<template>
  <div
    class="m-card mru:rounded-card mru:shadow-theme-md mru:filter-card
           mru:border-theme mru:border-solid mru:border-gray-200
           mru:bg-white mru:transition-all mru:transition-theme
           mru:dark:bg-gray-900 mru:dark:border-gray-700"
    :style="{ padding: padding ?? '24px' }"
  >
    <slot />
  </div>
</template>

<style>
/* hoyo: float up on hover */
[data-theme="hoyo"] .m-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--m-shadow-lg);
}

/* pishi: border highlight on hover */
[data-theme="pishi"] .m-card:hover {
  box-shadow: var(--m-shadow-md);
  border-color: var(--color-primary-300);
}
</style>
