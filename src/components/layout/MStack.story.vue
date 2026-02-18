<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MStack from './MStack.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Layout/MStack">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-8"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <div>
              <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">vertical</p>
              <MStack>
                <div
                  v-for="i in 3"
                  :key="i"
                  style="
                    background: var(--color-primary-100);
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
                    background: var(--color-accent-pink);
                    color: var(--color-accent-pink-text);
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
      </div>
    </Variant>
  </Story>
</template>
