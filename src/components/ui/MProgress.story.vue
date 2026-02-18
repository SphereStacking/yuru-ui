<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MProgress from './MProgress.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
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
  <Story title="Feedback/MProgress">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
                 :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">
                  playground
                </h3>
                <MProgress :value="state.value" :color="state.color as any" :size="state.size as any" />
              </section>

              <section>
                <h3 class="story-heading">
                  values (0% - 100%)
                </h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <div v-for="v in values" :key="v">
                    <span class="mru:text-xs mru:block mru:mb-1" style="color: var(--m-color-text-sub);">
                      {{ v }}%
                    </span>
                    <MProgress :value="v" />
                  </div>
                </div>
              </section>

              <section>
                <h3 class="story-heading">
                  colors
                </h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <div v-for="color in colors" :key="color">
                    <span class="mru:text-xs mru:block mru:mb-1" style="color: var(--m-color-text-sub);">
                      {{ color }}
                    </span>
                    <MProgress :value="65" :color="color" />
                  </div>
                </div>
              </section>

              <section>
                <h3 class="story-heading">
                  sizes
                </h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <div v-for="size in sizes" :key="size">
                    <span class="mru:text-xs mru:block mru:mb-1" style="color: var(--m-color-text-sub);">
                      {{ size }}
                    </span>
                    <MProgress :value="50" :size="size" />
                  </div>
                </div>
              </section>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSlider v-model="state.value" title="value" :min="0" :max="100" :step="1" />
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
        <HstSelect v-model="state.size" title="size" :options="[...sizes]" />
      </template>
    </Variant>
  </Story>
</template>
