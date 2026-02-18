<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRProgress from './YRProgress.vue'

const themes = ['hoyo', 'pishi'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
const sizes = ['sm', 'md', 'lg'] as const
const values = [0, 25, 50, 75, 100] as const

function initState() {
  return {
    value: 50,
    color: 'mint' as string,
    size: 'md' as string,
  }
}
</script>

<template>
  <Story title="Feedback/YRProgress">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">
                playground
              </h3>
              <YRProgress :value="state.value" :color="state.color as any" :size="state.size as any" />
            </section>

            <section>
              <h3 class="story-heading">
                values (0% - 100%)
              </h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <div v-for="v in values" :key="v">
                  <span class="yr:text-xs yr:block yr:mb-1 yr:text-gray-500 yr:dark:text-gray-400">
                    {{ v }}%
                  </span>
                  <YRProgress :value="v" />
                </div>
              </div>
            </section>

            <section>
              <h3 class="story-heading">
                colors
              </h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <div v-for="color in colors" :key="color">
                  <span class="yr:text-xs yr:block yr:mb-1 yr:text-gray-500 yr:dark:text-gray-400">
                    {{ color }}
                  </span>
                  <YRProgress :value="65" :color="color" />
                </div>
              </div>
            </section>

            <section>
              <h3 class="story-heading">
                sizes
              </h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <div v-for="size in sizes" :key="size">
                  <span class="yr:text-xs yr:block yr:mb-1 yr:text-gray-500 yr:dark:text-gray-400">
                    {{ size }}
                  </span>
                  <YRProgress :value="50" :size="size" />
                </div>
              </div>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSlider v-model="state.value" title="value" :min="0" :max="100" :step="1" />
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
        <HstSelect v-model="state.size" title="size" :options="[...sizes]" />
      </template>
    </Variant>
  </Story>
</template>
