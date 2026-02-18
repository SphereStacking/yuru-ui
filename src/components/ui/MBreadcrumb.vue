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
  <nav class="m-breadcrumb" aria-label="Breadcrumb">
    <ol class="m-breadcrumb__list">
      <template v-for="(item, index) in items" :key="index">
        <li v-if="index > 0" class="m-breadcrumb__separator" aria-hidden="true">
          <slot name="separator">/</slot>
        </li>
        <li class="m-breadcrumb__item">
          <span
            v-if="index === items.length - 1"
            class="m-breadcrumb__current"
            aria-current="page"
          >
            {{ item.label }}
          </span>
          <a
            v-else
            class="m-breadcrumb__link"
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

<style scoped>
.m-breadcrumb__list {
  display: flex;
  align-items: center;
  gap: var(--m-space-xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.m-breadcrumb__link {
  color: var(--m-color-primary-500);
  text-decoration: none;
  transition:
    color var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease),
    opacity var(--m-transition-speed, 0.15s) var(--m-transition-ease, ease);
}

.m-breadcrumb__link:hover {
  text-decoration: underline;
}

.m-breadcrumb__current {
  color: var(--m-color-text-main);
  font-weight: var(--m-font-weight-body);
}

.m-breadcrumb__separator {
  color: var(--m-color-gray-400);
  user-select: none;
}
</style>

<!-- テーマ別スタイル -->
<style>
/* === hoyo: セパレーター ~ 、ミント色アンダーライン === */
[data-theme="hoyo"] .m-breadcrumb__separator {
  font-size: 0;
}
[data-theme="hoyo"] .m-breadcrumb__separator::before {
  content: '~';
  font-size: 1rem;
}
[data-theme="hoyo"] .m-breadcrumb__link {
  position: relative;
}
[data-theme="hoyo"] .m-breadcrumb__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: var(--m-color-accent-mint);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}
[data-theme="hoyo"] .m-breadcrumb__link:hover::after {
  transform: scaleX(1);
}
[data-theme="hoyo"] .m-breadcrumb__link:hover {
  text-decoration: none;
}

/* === pishi: セパレーター / 、クリーン === */
[data-theme="pishi"] .m-breadcrumb__link:hover {
  text-decoration: underline;
}

/* === toge: セパレーター > 、bold、uppercase === */
[data-theme="toge"] .m-breadcrumb__separator {
  font-size: 0;
}
[data-theme="toge"] .m-breadcrumb__separator::before {
  content: '>';
  font-size: 1rem;
  font-weight: 700;
}
[data-theme="toge"] .m-breadcrumb__link {
  font-weight: 700;
  text-transform: uppercase;
}
[data-theme="toge"] .m-breadcrumb__current {
  font-weight: 700;
  text-transform: uppercase;
}

/* === moko: セパレーター ... 、丸い背景hover === */
[data-theme="moko"] .m-breadcrumb__separator {
  font-size: 0;
}
[data-theme="moko"] .m-breadcrumb__separator::before {
  content: '...';
  font-size: 1rem;
  letter-spacing: 0.1em;
}
[data-theme="moko"] .m-breadcrumb__link {
  padding: var(--m-space-2xs) var(--m-space-xs);
  border-radius: var(--m-radius-button);
  transition:
    background-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
[data-theme="moko"] .m-breadcrumb__link:hover {
  background-color: var(--m-color-gray-100);
  text-decoration: none;
}

/* === kira: セパレーター / 、hover時グロウ === */
[data-theme="kira"] .m-breadcrumb__link:hover {
  text-decoration: none;
  text-shadow:
    0 0 8px rgba(176, 255, 196, 0.5),
    0 0 16px rgba(224, 212, 255, 0.3);
}

/* === nemu: 全体ミュート、遅いhover transition === */
[data-theme="nemu"] .m-breadcrumb {
  opacity: 0.7;
}
[data-theme="nemu"] .m-breadcrumb__link {
  transition:
    color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-theme="nemu"] .m-breadcrumb__link:hover {
  opacity: 1;
}
</style>
