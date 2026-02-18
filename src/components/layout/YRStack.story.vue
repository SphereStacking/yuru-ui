<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRStack from './YRStack.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Layout/YRStack">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-8 yr:bg-gray-50 yr:dark:bg-gray-900">
            <div>
              <p style="font-weight: var(--yr-font-weight-heading); margin-bottom: var(--yr-space-xs);">vertical</p>
              <YRStack>
                <div
                  v-for="i in 3"
                  :key="i"
                  style="
                    background: var(--color-primary-100);
                    border-radius: var(--yr-radius-default);
                    padding: var(--yr-space-md);
                    filter: var(--yr-filter-default);
                  "
                >
                  アイテム {{ i }}
                </div>
              </YRStack>
            </div>
            <div>
              <p style="font-weight: var(--yr-font-weight-heading); margin-bottom: var(--yr-space-xs);">horizontal</p>
              <YRStack direction="horizontal" align="center">
                <div
                  v-for="i in 3"
                  :key="i"
                  style="
                    background: var(--color-accent-pink);
                    color: var(--color-accent-pink-text);
                    border-radius: var(--yr-radius-default);
                    padding: var(--yr-space-md) var(--yr-space-lg);
                    filter: var(--yr-filter-default);
                  "
                >
                  アイテム {{ i }}
                </div>
              </YRStack>
            </div>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
