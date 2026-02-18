<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  modelValue: boolean
  persistent?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

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
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
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
        class="m-modal-backdrop"
        @click.self="close"
      >
        <div
          class="m-modal"
          role="dialog"
          aria-modal="true"
        >
          <div v-if="$slots.header" class="m-modal__header">
            <slot name="header" />
          </div>
          <div class="m-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="m-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.m-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-modal {
  background: var(--m-color-card-bg);
  border-radius: var(--m-radius-card);
  box-shadow: var(--m-shadow-lg);
  padding: var(--m-space-lg);
  max-width: 480px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.m-modal__header {
  font-weight: var(--m-font-weight-heading);
  font-size: 1.125rem;
  margin-bottom: var(--m-space-md);
}

.m-modal__footer {
  margin-top: var(--m-space-md);
  display: flex;
  gap: var(--m-space-sm);
  justify-content: flex-end;
}

/* Transition */
.m-modal-enter-active {
  transition:
    opacity var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease);
}
.m-modal-enter-active .m-modal {
  transition:
    transform var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease),
    opacity var(--m-transition-speed, 0.2s) var(--m-transition-ease, ease);
}

.m-modal-enter-from {
  opacity: 0;
}
.m-modal-enter-from .m-modal {
  transform: scale(0.95);
  opacity: 0;
}
</style>

<!-- Theme overrides -->
<style>
/* === toge: 角丸ゼロ、太ボーダー、オフセットシャドウ === */
[data-theme="toge"] .m-modal {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
  box-shadow: 4px 4px 0 var(--m-color-gray-700);
}

/* === moko: 大きめ角丸、ゆらぎフィルター、バウンス入場 === */
[data-theme="moko"] .m-modal {
  border-radius: 24px;
  filter: var(--m-filter-default);
}
[data-theme="moko"] .m-modal-enter-active .m-modal {
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}
[data-theme="moko"] .m-modal-enter-from .m-modal {
  transform: scale(0.9);
}

/* === kira: グラデーションボーダー、グロウシャドウ === */
[data-theme="kira"] .m-modal {
  position: relative;
  border: none;
  background-clip: padding-box;
  box-shadow:
    0 0 20px rgba(176, 255, 196, 0.2),
    0 0 8px rgba(224, 212, 255, 0.15),
    var(--m-shadow-lg);
}
[data-theme="kira"] .m-modal::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: var(--m-gradient-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.6;
}

/* === nemu: 薄い背景、モーダル透過、ゆっくり表示 === */
[data-theme="nemu"] .m-modal-backdrop {
  background: rgba(0, 0, 0, 0.3);
}
[data-theme="nemu"] .m-modal {
  opacity: 0.95;
}
[data-theme="nemu"] .m-modal-enter-active {
  transition: opacity 0.45s var(--m-transition-ease, ease);
}
[data-theme="nemu"] .m-modal-enter-active .m-modal {
  transition:
    transform 0.45s var(--m-transition-ease, ease),
    opacity 0.45s var(--m-transition-ease, ease);
}
</style>
