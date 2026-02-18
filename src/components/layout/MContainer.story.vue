<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MContainer from './MContainer.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="Layout/MContainer">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="background: var(--m-color-gray-50); padding: var(--m-space-md);">
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
              <h2 style="font-weight: var(--m-font-weight-heading); font-size: 1.375rem; margin-bottom: 8px;">
                MContainer ({{ theme }})
              </h2>
              <p style="font-weight: var(--m-font-weight-body); line-height: 1.8;">
                maxWidth: 960px, padding: var(--m-space-lg) がデフォルト。コンテンツを中央寄せで配置します。
              </p>
            </div>
          </MContainer>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
