<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MSwitch from './MSwitch.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const

const states = ref<Record<string, Record<string, boolean>>>({})

function getState(theme: string, color: string) {
  if (!states.value[theme]) states.value[theme] = {}
  return states.value[theme][color] ?? false
}

function setState(theme: string, color: string, val: boolean) {
  if (!states.value[theme]) states.value[theme] = {}
  states.value[theme][color] = val
}
</script>

<template>
  <Story title="Form/MSwitch">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              colors
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
              <div v-for="color in colors" :key="color" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <MSwitch
                  :color="color"
                  :model-value="getState(theme, color)"
                  @update:model-value="setState(theme, color, $event)"
                />
                <span style="font-size: 0.75rem; color: var(--m-color-gray-500);">{{ color }}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; gap: 16px; align-items: center;">
              <MSwitch color="mint" :model-value="false" disabled />
              <MSwitch color="pink" :model-value="true" disabled />
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
