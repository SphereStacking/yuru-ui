<script setup lang="ts">
import { watch, onMounted, onUnmounted, inject, computed, type ComputedRef } from 'vue'

const props = defineProps<{
  modelValue: boolean
  persistent?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const injectedTheme = inject<ComputedRef<string>>('m-theme')
const theme = computed(() => injectedTheme?.value)

function close() {
  if (!props.persistent) {
    emit('update:modelValue', false)
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    close()
  }
}

watch(
  () => props.modelValue,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
  { immediate: true }
)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="m-modal">
      <div
        v-if="modelValue"
        class="mru:fixed mru:inset-0 mru:bg-black/50 mru:z-[9999]
               mru:flex mru:items-center mru:justify-center"
        :data-theme="theme"
        @click.self="close"
      >
        <div
          class="m-modal mru:bg-white mru:rounded-card mru:shadow-theme-lg
                 mru:p-lg mru:max-w-[480px] mru:w-[90%] mru:max-h-[80vh] mru:overflow-y-auto
                 mru:dark:bg-gray-900"
          role="dialog"
          aria-modal="true"
        >
          <div v-if="$slots.header" class="mru:font-heading mru:text-lg mru:mb-md">
            <slot name="header" />
          </div>
          <div>
            <slot />
          </div>
          <div v-if="$slots.footer" class="mru:mt-md mru:flex mru:gap-sm mru:justify-end">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.m-modal-enter-active {
  transition: opacity 0.2s ease;
}
.m-modal-enter-active .m-modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.m-modal-enter-from {
  opacity: 0;
}
.m-modal-enter-from .m-modal {
  transform: scale(0.95);
  opacity: 0;
}
</style>
