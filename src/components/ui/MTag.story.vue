<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTag from './MTag.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
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
  <Story title="General/MTag">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">playground</h3>
                <MTag :color="state.color as any" :removable="state.removable">
                  {{ state.color }}
                </MTag>
              </section>

              <section>
                <h3 class="story-heading">colors</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-2">
                  <MTag v-for="color in colors" :key="color" :color="color">
                    {{ color }}
                  </MTag>
                </div>
              </section>

              <section>
                <h3 class="story-heading">removable</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-2">
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
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
        <HstCheckbox v-model="state.removable" title="removable" />
      </template>
    </Variant>
  </Story>
</template>
