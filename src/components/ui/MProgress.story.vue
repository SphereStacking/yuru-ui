<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MProgress from './MProgress.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
const sizes = ['sm', 'md', 'lg'] as const
const values = [0, 25, 50, 75, 100] as const
</script>

<template>
  <Story title="UI/MProgress">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              values (0% - 100%)
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div v-for="v in values" :key="v">
                <span style="font-size: 0.75rem; color: var(--m-color-gray-500); display: block; margin-bottom: 4px;">
                  {{ v }}%
                </span>
                <MProgress :value="v" />
              </div>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              colors
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div v-for="color in colors" :key="color">
                <span style="font-size: 0.75rem; color: var(--m-color-gray-500); display: block; margin-bottom: 4px;">
                  {{ color }}
                </span>
                <MProgress :value="65" :color="color" />
              </div>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div v-for="size in sizes" :key="size">
                <span style="font-size: 0.75rem; color: var(--m-color-gray-500); display: block; margin-bottom: 4px;">
                  {{ size }}
                </span>
                <MProgress :value="50" :size="size" />
              </div>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
