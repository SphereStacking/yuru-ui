<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MGrid from './MGrid.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="Layout/MGrid">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: var(--m-space-lg); display: flex; flex-direction: column; gap: var(--m-space-lg);">
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">3カラム（デフォルト）</p>
            <MGrid>
              <div
                v-for="i in 6"
                :key="i"
                style="
                  background: var(--m-color-primary-100);
                  border-radius: var(--m-radius-default);
                  padding: var(--m-space-lg);
                  text-align: center;
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
                style="
                  background: var(--m-color-accent-peach);
                  color: var(--m-color-accent-peach-text);
                  border-radius: var(--m-radius-default);
                  padding: var(--m-space-lg);
                  text-align: center;
                  filter: var(--m-filter-default);
                "
              >
                {{ i }}
              </div>
            </MGrid>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
