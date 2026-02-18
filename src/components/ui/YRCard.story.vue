<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRCard from './YRCard.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="General/YRCard">
    <Variant
      v-for="theme in themes"
      :key="theme"
      :title="theme"
    >
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:max-w-md yr:bg-gray-50 yr:dark:bg-gray-900">
          <YRCard>
            <h3 style="font-weight: var(--yr-font-weight-heading); margin-bottom: 8px;">{{ theme }} カード</h3>
            <p class="yr:text-gray-500 yr:dark:text-gray-400 yr:leading-relaxed">
              テーマごとに角丸・シャドウ・フィルターが変わるカードコンポーネントです。
            </p>
          </YRCard>

          <YRCard padding="xl">
            <h3 style="font-weight: var(--yr-font-weight-heading); margin-bottom: 8px;">大きめパディング</h3>
            <p class="yr:text-gray-500 yr:dark:text-gray-400 yr:leading-relaxed">
              padding prop でカスタムできます。
            </p>
          </YRCard>

          <YRCard padding="sm">
            <p class="yr:text-gray-500 yr:dark:text-gray-400">小さめパディング</p>
          </YRCard>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
