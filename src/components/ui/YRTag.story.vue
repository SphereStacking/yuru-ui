<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRTag from './YRTag.vue'

const themes = ['hoyo', 'pishi'] as const
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

function initState() {
  return {
    color: 'mint' as string,
    removable: false,
  }
}
</script>

<template>
  <Story title="General/YRTag">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div
            class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900"
          >
            <section>
              <h3 class="story-heading">playground</h3>
              <YRTag :color="state.color as any" :removable="state.removable">
                {{ state.color }}
              </YRTag>
            </section>

            <section>
              <h3 class="story-heading">colors</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRTag v-for="color in colors" :key="color" :color="color">
                  {{ color }}
                </YRTag>
              </div>
            </section>

            <section>
              <h3 class="story-heading">removable</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRTag
                  v-for="color in colors"
                  v-show="!isRemoved(theme, color)"
                  :key="color"
                  :color="color"
                  removable
                  @remove="handleRemove(theme, color)"
                >
                  {{ color }}
                </YRTag>
              </div>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
        <HstCheckbox v-model="state.removable" title="removable" />
      </template>
    </Variant>
  </Story>
</template>
