<script setup lang="ts">
defineProps<{
  variant?: 'text' | 'circle' | 'rect'
  width?: string
  height?: string
}>()
</script>

<template>
  <div
    class="m-skeleton"
    :class="[`m-skeleton--${variant ?? 'text'}`]"
    :style="{
      width: width ?? undefined,
      height: height ?? undefined,
    }"
  />
</template>

<style scoped>
.m-skeleton {
  background: linear-gradient(
    90deg,
    var(--m-color-gray-200) 25%,
    var(--m-color-gray-100) 50%,
    var(--m-color-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: m-skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes m-skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* --- text: full width, 1em height, pill radius --- */
.m-skeleton--text {
  width: 100%;
  height: 1em;
  border-radius: var(--m-radius-button, 20px);
}

/* --- circle: 40px square, border-radius 50% --- */
.m-skeleton--circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* --- rect: user-specified width/height, card radius --- */
.m-skeleton--rect {
  width: 100%;
  height: 100px;
  border-radius: var(--m-radius-card, 16px);
}
</style>

<!-- テーマ別オーバーライド -->
<style>
/* === toge: パルスなし、静的グレーブロック、角丸0 === */
[data-theme="toge"] .m-skeleton {
  animation: none;
  background: var(--m-color-gray-300);
  border-radius: 0;
}

/* === moko: 超大角丸、wobbly filter、ゆっくりパルス === */
[data-theme="moko"] .m-skeleton {
  filter: var(--m-filter-default);
  animation-duration: 2.5s;
}
[data-theme="moko"] .m-skeleton--text {
  border-radius: 30px;
}
[data-theme="moko"] .m-skeleton--rect {
  border-radius: var(--m-radius-card);
}

/* === kira: 虹色のシマーグラデーション === */
[data-theme="kira"] .m-skeleton {
  background: linear-gradient(
    90deg,
    var(--m-color-accent-mint) 0%,
    var(--m-color-accent-sky) 25%,
    var(--m-color-accent-lavender) 50%,
    var(--m-color-accent-pink) 75%,
    var(--m-color-accent-mint) 100%
  );
  background-size: 300% 100%;
  animation: m-skeleton-kira-shimmer 2s ease-in-out infinite;
}
@keyframes m-skeleton-kira-shimmer {
  0% { background-position: 300% 0; }
  100% { background-position: -300% 0; }
}

/* === nemu: 超スローパルス（3s）、低コントラスト === */
[data-theme="nemu"] .m-skeleton {
  background: linear-gradient(
    90deg,
    var(--m-color-gray-100) 25%,
    var(--m-color-gray-50) 50%,
    var(--m-color-gray-100) 75%
  );
  background-size: 200% 100%;
  animation-duration: 3s;
  opacity: 0.6;
}
</style>
