<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: number
  color?: 'mint' | 'pink' | 'lavender' | 'peach' | 'sky' | 'lemon'
  size?: 'sm' | 'md' | 'lg'
}>()

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value ?? 0)))

const barColorMap: Record<string, string> = {
  mint: 'var(--m-color-accent-mint)',
  pink: 'var(--m-color-accent-pink)',
  lavender: 'var(--m-color-accent-lavender)',
  peach: 'var(--m-color-accent-peach)',
  sky: 'var(--m-color-accent-sky)',
  lemon: 'var(--m-color-accent-lemon)',
}
</script>

<template>
  <div
    class="m-progress"
    :class="[`m-progress--${size ?? 'md'}`]"
    role="progressbar"
    :aria-valuenow="clampedValue"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="m-progress__track">
      <div
        class="m-progress__bar"
        :style="{
          width: `${clampedValue}%`,
          backgroundColor: barColorMap[color ?? 'mint'],
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.m-progress__track {
  width: 100%;
  background-color: var(--m-color-gray-100);
  border-radius: 50px;
  overflow: hidden;
}

.m-progress__bar {
  height: 100%;
  border-radius: 50px;
  transition: width var(--m-transition-speed, 0.3s) var(--m-transition-ease, ease);
}

/* --- Size --- */
.m-progress--sm .m-progress__track {
  height: 6px;
}

.m-progress--md .m-progress__track {
  height: 10px;
}

.m-progress--lg .m-progress__track {
  height: 16px;
}
</style>

<!-- Theme overrides (unscoped) -->
<style>
/* === toge: 角丸なし、太ボーダー === */
[data-theme="toge"] .m-progress__track {
  border-radius: 0;
  border: 2px solid var(--m-color-gray-700);
}
[data-theme="toge"] .m-progress__bar {
  border-radius: 0;
}

/* === moko: 超丸、太めtrack、wobbly === */
[data-theme="moko"] .m-progress__track {
  border-radius: 50px;
  filter: var(--m-filter-button);
}
[data-theme="moko"] .m-progress--sm .m-progress__track {
  height: 10px;
}
[data-theme="moko"] .m-progress--md .m-progress__track {
  height: 14px;
}
[data-theme="moko"] .m-progress--lg .m-progress__track {
  height: 20px;
}

/* === kira: bar にグラデーション === */
[data-theme="kira"] .m-progress__bar {
  background: var(--m-gradient-primary) !important;
}

/* === nemu: 低opacity、ゆっくりtransition === */
[data-theme="nemu"] .m-progress {
  opacity: 0.7;
}
[data-theme="nemu"] .m-progress__bar {
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
