<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; href?: string }>
}>()

const emit = defineEmits<{
  navigate: [item: { label: string; href?: string }, index: number]
}>()

function handleClick(event: Event, item: { label: string; href?: string }, index: number) {
  event.preventDefault()
  emit('navigate', item, index)
}
</script>

<template>
  <nav class="yr-breadcrumb" aria-label="Breadcrumb">
    <ol class="yr:flex yr:items-center yr:gap-xs yr:list-none yr:m-0 yr:p-0">
      <template v-for="(item, index) in items" :key="index">
        <li v-if="index > 0" class="yr-breadcrumb__separator yr:text-gray-400 yr:select-none" aria-hidden="true">
          <slot name="separator">/</slot>
        </li>
        <li>
          <span
            v-if="index === items.length - 1"
            class="yr:text-gray-700 yr:font-body yr:dark:text-gray-200"
            aria-current="page"
          >
            {{ item.label }}
          </span>
          <a
            v-else
            class="yr-breadcrumb__link yr:text-primary-500 yr:no-underline
                   yr:transition-all yr:transition-theme"
            :href="item.href ?? '#'"
            @click="handleClick($event, item, index)"
          >
            {{ item.label }}
          </a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<style>
/* hoyo: ~ separator, animated underline */
[data-theme="hoyo"] .yr-breadcrumb__separator {
  font-size: 0;
}
[data-theme="hoyo"] .yr-breadcrumb__separator::before {
  content: '~';
  font-size: 1rem;
}
[data-theme="hoyo"] .yr-breadcrumb__link {
  position: relative;
}
[data-theme="hoyo"] .yr-breadcrumb__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: var(--color-accent-mint);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}
[data-theme="hoyo"] .yr-breadcrumb__link:hover::after {
  transform: scaleX(1);
}
[data-theme="hoyo"] .yr-breadcrumb__link:hover {
  text-decoration: none;
}

/* pishi: border-bottom hover */
[data-theme="pishi"] .yr-breadcrumb__link {
  padding-bottom: 1px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.12s ease-out, color 0.12s ease-out;
}
[data-theme="pishi"] .yr-breadcrumb__link:hover {
  text-decoration: none;
  border-bottom-color: var(--color-primary-500);
}
</style>
