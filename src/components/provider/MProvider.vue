<script setup lang="ts">
import { computed, provide } from 'vue'

const props = defineProps<{
  theme?: 'hoyo' | 'pishi' | 'toge' | 'moko' | 'kira' | 'nemu'
}>()

const resolvedTheme = computed(() => props.theme ?? 'hoyo')
provide('m-theme', resolvedTheme)
</script>

<template>
  <div :data-theme="theme ?? 'hoyo'" class="m-provider">
    <!-- SVGフィルター（hoyoテーマで使用） -->
    <svg style="position:absolute;width:0;height:0" aria-hidden="true">
      <defs>
        <filter id="wobbly">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" seed="2" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly-light">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" seed="5" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly-subtle">
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="8" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly-moko">
          <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="3" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
    <slot />
  </div>
</template>

<style>
.m-provider {
  position: relative;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
