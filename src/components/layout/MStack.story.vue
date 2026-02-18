<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MStack from './MStack.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="Layout/MStack">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: var(--m-space-lg); display: flex; flex-direction: column; gap: var(--m-space-xl);">
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">vertical</p>
            <MStack>
              <div
                v-for="i in 3"
                :key="i"
                style="
                  background: var(--m-color-primary-100);
                  border-radius: var(--m-radius-default);
                  padding: var(--m-space-md);
                  filter: var(--m-filter-default);
                "
              >
                アイテム {{ i }}
              </div>
            </MStack>
          </div>
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">horizontal</p>
            <MStack direction="horizontal" align="center">
              <div
                v-for="i in 3"
                :key="i"
                style="
                  background: var(--m-color-accent-pink);
                  color: var(--m-color-accent-pink-text);
                  border-radius: var(--m-radius-default);
                  padding: var(--m-space-md) var(--m-space-lg);
                  filter: var(--m-filter-default);
                "
              >
                アイテム {{ i }}
              </div>
            </MStack>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
