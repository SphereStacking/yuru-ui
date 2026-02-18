<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MDivider from './MDivider.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
</script>

<template>
  <Story title="General/MDivider">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div
            class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
            :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
          >
            <p class="story-heading">{{ mode }}</p>
            <div v-for="color in colors" :key="color">
              <p class="mru:mb-2" style="font-size: 0.75rem; color: var(--m-color-text-sub);">{{ color }}</p>
              <MDivider :color="color" />
            </div>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
