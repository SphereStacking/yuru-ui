<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MBreadcrumb from './MBreadcrumb.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const

const items = [
  { label: 'ホーム', href: '/' },
  { label: 'ドキュメント', href: '/docs' },
  { label: 'コンポーネント', href: '/docs/components' },
  { label: 'MBreadcrumb' },
]

function onNavigate(item: { label: string; href?: string }, index: number) {
  console.log('navigate:', item, index)
}
</script>

<template>
  <Story title="MBreadcrumb">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              default
            </h3>
            <MBreadcrumb :items="items" @navigate="onNavigate" />
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              short (2 items)
            </h3>
            <MBreadcrumb
              :items="[{ label: 'ホーム', href: '/' }, { label: '設定' }]"
              @navigate="onNavigate"
            />
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
