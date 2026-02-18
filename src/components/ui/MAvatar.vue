<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  fallback?: string
}>()

const sizeMap: Record<string, string> = {
  sm: '32px',
  md: '40px',
  lg: '56px',
}

const sizeValue = computed(() => sizeMap[props.size ?? 'md'])

const fontSizeMap: Record<string, string> = {
  sm: '0.75rem',
  md: '0.875rem',
  lg: '1.125rem',
}

const fontSize = computed(() => fontSizeMap[props.size ?? 'md'])
</script>

<template>
  <div
    class="m-avatar"
    :style="{
      width: sizeValue,
      height: sizeValue,
    }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt ?? ''"
      class="m-avatar__img"
    />
    <span
      v-else
      class="m-avatar__fallback"
      :style="{ fontSize }"
    >
      {{ fallback ?? '' }}
    </span>
  </div>
</template>

<style scoped>
.m-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.m-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.m-avatar__fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--m-color-primary-200);
  color: var(--m-color-primary-700);
  font-weight: var(--m-font-weight-heading);
}
</style>
