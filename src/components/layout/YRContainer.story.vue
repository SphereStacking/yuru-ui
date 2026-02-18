<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRContainer from './YRContainer.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Layout/YRContainer">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
          <YRContainer>
              <div
                style="
                  background: var(--yr-color-card-bg);
                  border-radius: var(--yr-radius-card);
                  box-shadow: var(--yr-shadow-md);
                  filter: var(--yr-filter-card);
                  border: var(--yr-border-width) solid var(--yr-color-border);
                  padding: var(--yr-space-lg);
                "
              >
                <h2 class="yr:text-xl yr:mb-2" style="font-weight: var(--yr-font-weight-heading);">
                  YRContainer ({{ theme }})
                </h2>
                <p style="font-weight: var(--yr-font-weight-body); line-height: 1.8;">
                  maxWidth: 960px, padding: var(--yr-space-lg) がデフォルト。コンテンツを中央寄せで配置します。
                </p>
              </div>
          </YRContainer>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
