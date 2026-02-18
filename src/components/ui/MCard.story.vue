<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MCard from './MCard.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="General/MCard">
    <Variant
      v-for="theme in themes"
      :key="theme"
      :title="theme"
    >
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div
            class="mru:p-6 mru:flex mru:flex-col mru:gap-4 mru:max-w-md"
            :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
          >
            <p class="story-heading">{{ mode }}</p>
            <MCard>
              <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">{{ theme }} カード</h3>
              <p style="color: var(--m-color-text-sub); line-height: 1.8;">
                テーマごとに角丸・シャドウ・フィルターが変わるカードコンポーネントです。
              </p>
            </MCard>

            <MCard padding="var(--m-space-xl)">
              <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">大きめパディング</h3>
              <p style="color: var(--m-color-text-sub); line-height: 1.8;">
                padding prop でカスタムできます。
              </p>
            </MCard>

            <MCard padding="var(--m-space-sm)">
              <p style="color: var(--m-color-text-sub);">小さめパディング</p>
            </MCard>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
