<script setup lang="ts">
import { computed, provide } from 'vue'

export type MTheme = 'hoyo' | 'pishi'

const props = defineProps<{
  theme?: MTheme
}>()

const resolvedTheme = computed(() => props.theme ?? 'hoyo')
provide('m-theme', resolvedTheme)
</script>

<template>
  <div
    :data-theme="resolvedTheme"
    class="mru:relative mru:font-sans mru:font-feature-theme mru:tracking-theme mru:leading-relaxed"
  >
    <svg style="position:absolute;width:0;height:0" aria-hidden="true">
      <defs>
        <filter id="wobbly-subtle">
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="8" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" seed="2" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
    <slot />
  </div>
</template>
