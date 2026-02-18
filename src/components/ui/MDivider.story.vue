<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MDivider from './MDivider.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
</script>

<template>
  <Story title="General/MDivider">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <div v-for="color in colors" :key="color">
            <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">{{ color }}</p>
            <MDivider :color="color" />
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
