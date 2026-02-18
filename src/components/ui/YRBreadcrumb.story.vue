<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRBreadcrumb from './YRBreadcrumb.vue'

const themes = ['hoyo', 'pishi'] as const

const items = [
  { label: 'ホーム', href: '/' },
  { label: 'ドキュメント', href: '/docs' },
  { label: 'コンポーネント', href: '/docs/components' },
  { label: 'YRBreadcrumb' },
]

function onNavigate(item: { label: string; href?: string }, index: number) {
  console.log('navigate:', item, index)
}
</script>

<template>
  <Story title="Navigation/YRBreadcrumb">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="yr:mb-3 story-heading">
                default
              </h3>
              <YRBreadcrumb :items="items" @navigate="onNavigate" />
            </section>

            <section>
              <h3 class="yr:mb-3 story-heading">
                short (2 items)
              </h3>
              <YRBreadcrumb
                :items="[{ label: 'ホーム', href: '/' }, { label: '設定' }]"
                @navigate="onNavigate"
              />
            </section>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
