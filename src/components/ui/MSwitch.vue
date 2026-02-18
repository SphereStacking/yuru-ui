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
</script>

<template>
  <label
    class="m-switch"
    :class="{ 'm-switch--disabled': disabled }"
  >
    <input
      type="checkbox"
      class="m-switch__input"
      :checked="modelValue"
      :disabled="disabled"
      role="switch"
      :aria-checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <span
      class="m-switch__track"
      :style="{
        backgroundColor: modelValue
          ? colorMap[color ?? 'mint']
          : 'var(--m-color-gray-300)',
      }"
    >
      <span
        class="m-switch__thumb"
        :class="{ 'm-switch__thumb--on': modelValue }"
      />
    </span>
  </label>
</template>

<style scoped>
.m-switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.m-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.m-switch__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.m-switch__track {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: var(--m-radius-button, 20px);
  transition:
    background-color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: var(--m-radius-button, 20px);
  background-color: #fff;
  box-shadow: var(--m-shadow-sm);
  transition:
    transform var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-switch__thumb--on {
  transform: translateX(20px);
}
</style>

<!-- テーマ別オーバーライド -->
<style>
/* === toge: 角ばった硬質スイッチ === */
[data-theme="toge"] .m-switch__track {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
  transition: background-color 0.08s ease-out;
}
[data-theme="toge"] .m-switch__thumb {
  border-radius: 0;
  transition: transform 0.08s ease-out;
}

/* === moko: ぷにっとバウンス === */
[data-theme="moko"] .m-switch__thumb {
  width: 22px;
  height: 22px;
  top: 1px;
  left: 1px;
  filter: var(--m-filter-button);
}
[data-theme="moko"] .m-switch__track {
  filter: var(--m-filter-button);
}
[data-theme="moko"] .m-switch__thumb--on {
  transform: translateX(20px) scale(1.1);
}

/* === kira: グラデーション＆グロウ === */
[data-theme="kira"] .m-switch__track--on,
[data-theme="kira"] .m-switch .m-switch__input:checked + .m-switch__track {
  background-image: var(--m-gradient-primary);
  background-color: transparent;
  box-shadow: var(--m-shadow-md);
}

/* === nemu: ゆっくりまどろみ === */
[data-theme="nemu"] .m-switch {
  opacity: 0.75;
}
[data-theme="nemu"] .m-switch__track {
  transition: background-color 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="nemu"] .m-switch__thumb {
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
