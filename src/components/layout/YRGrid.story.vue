<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRGrid from './YRGrid.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Layout/YRGrid">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <div>
              <p style="font-weight: var(--yr-font-weight-heading); margin-bottom: var(--yr-space-xs);">3カラム（デフォルト）</p>
              <YRGrid>
                <div
                  v-for="i in 6"
                  :key="i"
                  class="yr:text-center"
                  style="
                    background: var(--color-primary-100);
                    border-radius: var(--yr-radius-default);
                    padding: var(--yr-space-lg);
                    filter: var(--yr-filter-default);
                  "
                >
                  {{ i }}
                </div>
              </YRGrid>
            </div>
            <div>
              <p style="font-weight: var(--yr-font-weight-heading); margin-bottom: var(--yr-space-xs);">2カラム</p>
              <YRGrid :cols="2" gap="var(--yr-space-lg)">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="yr:text-center"
                  style="
                    background: var(--color-accent-peach);
                    color: var(--color-accent-peach-text);
                    border-radius: var(--yr-radius-default);
                    padding: var(--yr-space-lg);
                    filter: var(--yr-filter-default);
                  "
                >
                  {{ i }}
                </div>
              </YRGrid>
            </div>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
