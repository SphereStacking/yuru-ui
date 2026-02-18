<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MGrid from './MGrid.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Layout/MGrid">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <div>
              <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">3カラム（デフォルト）</p>
              <MGrid>
                <div
                  v-for="i in 6"
                  :key="i"
                  class="mru:text-center"
                  style="
                    background: var(--color-primary-100);
                    border-radius: var(--m-radius-default);
                    padding: var(--m-space-lg);
                    filter: var(--m-filter-default);
                  "
                >
                  {{ i }}
                </div>
              </MGrid>
            </div>
            <div>
              <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">2カラム</p>
              <MGrid :cols="2" gap="var(--m-space-lg)">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="mru:text-center"
                  style="
                    background: var(--color-accent-peach);
                    color: var(--color-accent-peach-text);
                    border-radius: var(--m-radius-default);
                    padding: var(--m-space-lg);
                    filter: var(--m-filter-default);
                  "
                >
                  {{ i }}
                </div>
              </MGrid>
            </div>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
