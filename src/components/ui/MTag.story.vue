<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTag from './MTag.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const

const removedTags = ref<Record<string, Set<string>>>({})

function handleRemove(theme: string, color: string) {
  if (!removedTags.value[theme]) {
    removedTags.value[theme] = new Set()
  }
  removedTags.value[theme].add(color)
}

function isRemoved(theme: string, color: string) {
  return removedTags.value[theme]?.has(color) ?? false
}
</script>

<template>
  <Story title="UI/MTag">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              colors
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <MTag v-for="color in colors" :key="color" :color="color">
                {{ color }}
              </MTag>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              removable
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <MTag
                v-for="color in colors"
                v-show="!isRemoved(theme, color)"
                :key="color"
                :color="color"
                removable
                @remove="handleRemove(theme, color)"
              >
                {{ color }}
              </MTag>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
