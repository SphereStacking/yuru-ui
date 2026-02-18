<script setup lang="ts">
import { watch, onMounted, onUnmounted, inject, computed, type ComputedRef } from 'vue'

const props = defineProps<{
  modelValue: boolean
  persistent?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const injectedTheme = inject<ComputedRef<string>>('yr-theme')
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
    <Transition name="yr-modal">
      <div
        v-if="modelValue"
        class="yr:fixed yr:inset-0 yr:bg-black/50 yr:z-[9999]
               yr:flex yr:items-center yr:justify-center"
        :data-theme="theme"
        @click.self="close"
      >
        <div
          class="yr-modal yr:bg-white yr:rounded-card yr:shadow-theme-lg
                 yr:p-lg yr:max-w-[480px] yr:w-[90%] yr:max-h-[80vh] yr:overflow-y-auto
                 yr:dark:bg-gray-900"
          role="dialog"
          aria-modal="true"
        >
          <div v-if="$slots.header" class="yr:font-heading yr:text-lg yr:mb-md">
            <slot name="header" />
          </div>
          <div>
            <slot />
          </div>
          <div v-if="$slots.footer" class="yr:mt-md yr:flex yr:gap-sm yr:justify-end">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.yr-modal-enter-active {
  transition: opacity 0.2s ease;
}
.yr-modal-enter-active .yr-modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.yr-modal-enter-from {
  opacity: 0;
}
.yr-modal-enter-from .yr-modal {
  transform: scale(0.95);
  opacity: 0;
}
.yr-modal-leave-active {
  transition: opacity 0.15s ease;
}
.yr-modal-leave-active .yr-modal {
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.yr-modal-leave-to {
  opacity: 0;
}
.yr-modal-leave-to .yr-modal {
  transform: scale(0.95);
  opacity: 0;
}
</style>
