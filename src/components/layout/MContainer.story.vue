<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MContainer from './MContainer.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Layout/MContainer">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <MContainer>
              <div
                style="
                  background: var(--m-color-card-bg);
                  border-radius: var(--m-radius-card);
                  box-shadow: var(--m-shadow-md);
                  filter: var(--m-filter-card);
                  border: var(--m-border-width) solid var(--m-color-border);
                  padding: var(--m-space-lg);
                "
              >
                <h2 class="mru:text-xl mru:mb-2" style="font-weight: var(--m-font-weight-heading);">
                  MContainer ({{ theme }})
                </h2>
                <p style="font-weight: var(--m-font-weight-body); line-height: 1.8;">
                  maxWidth: 960px, padding: var(--m-space-lg) がデフォルト。コンテンツを中央寄せで配置します。
                </p>
              </div>
            </MContainer>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
