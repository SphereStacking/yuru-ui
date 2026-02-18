<script setup lang="ts">
defineProps<{
  modelValue?: boolean
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const colorMap: Record<string, string> = {
  mint: 'var(--m-color-accent-mint)',
  pink: 'var(--m-color-accent-pink)',
  lavender: 'var(--m-color-accent-lavender)',
  peach: 'var(--m-color-accent-peach)',
  sky: 'var(--m-color-accent-sky)',
  lemon: 'var(--m-color-accent-lemon)',
}

const textColorMap: Record<string, string> = {
  mint: 'var(--m-color-accent-mint-text)',
  pink: 'var(--m-color-accent-pink-text)',
  lavender: 'var(--m-color-accent-lavender-text)',
  peach: 'var(--m-color-accent-peach-text)',
  sky: 'var(--m-color-accent-sky-text)',
  lemon: 'var(--m-color-accent-lemon-text)',
}
</script>

<template>
  <label
    class="m-checkbox"
    :class="{ 'm-checkbox--disabled': disabled }"
  >
    <input
      type="checkbox"
      class="m-checkbox__input"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="m-checkbox__box"
      :style="{
        backgroundColor: modelValue
          ? colorMap[color ?? 'mint']
          : 'transparent',
        borderColor: modelValue
          ? colorMap[color ?? 'mint']
          : 'var(--m-color-gray-400)',
      }"
    >
      <svg
        class="m-checkbox__check"
        :class="{ 'm-checkbox__check--visible': modelValue }"
        viewBox="0 0 16 16"
        fill="none"
        :style="{ stroke: modelValue ? textColorMap[color ?? 'mint'] : 'transparent' }"
      >
        <polyline
          points="3.5 8.5 6.5 11.5 12.5 4.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-if="$slots.default" class="m-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<style scoped>
.m-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--m-space-xs, 8px);
  cursor: pointer;
}

.m-checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.m-checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.m-checkbox__box {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: var(--m-radius-button, 4px);
  border: var(--m-border-width, 1.5px) solid var(--m-color-gray-400);
  flex-shrink: 0;
  transition:
    background-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    border-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-checkbox__check {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-checkbox__check--visible {
  stroke-dashoffset: 0;
}

.m-checkbox__label {
  font-size: 0.9375rem;
  color: var(--m-color-text-main, inherit);
  letter-spacing: var(--m-letter-spacing, 0);
}
</style>

<!-- テーマ別オーバーライド -->
<style>
/* === toge: 角ばったチェックボックス、アニメーションなし === */
[data-theme="toge"] .m-checkbox__box {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
  transition: none;
}
[data-theme="toge"] .m-checkbox__check {
  stroke-dasharray: none;
  stroke-dashoffset: 0;
  transition: none;
}
[data-theme="toge"] .m-checkbox__check:not(.m-checkbox__check--visible) {
  opacity: 0;
}
[data-theme="toge"] .m-checkbox__check--visible {
  opacity: 1;
}

/* === moko: 丸みのあるバウンスチェック === */
[data-theme="moko"] .m-checkbox__box {
  border-radius: 6px;
  filter: var(--m-filter-button);
}
[data-theme="moko"] .m-checkbox__input:checked + .m-checkbox__box {
  animation: moko-checkbox-bounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes moko-checkbox-bounce {
  0% { transform: scale(1); }
  40% { transform: scale(1.2); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* === kira: グラデーション＆グロウ === */
[data-theme="kira"] .m-checkbox__input:checked + .m-checkbox__box {
  background-image: var(--m-gradient-primary);
  background-color: transparent;
  border-color: transparent;
  box-shadow: var(--m-shadow-md);
}

/* === nemu: ゆっくりフェード === */
[data-theme="nemu"] .m-checkbox {
  opacity: 0.75;
}
[data-theme="nemu"] .m-checkbox__box {
  transition:
    background-color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="nemu"] .m-checkbox__check {
  transition: stroke-dashoffset 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
