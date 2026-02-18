<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MBreadcrumb from './MBreadcrumb.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

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
  <Story title="Navigation/MBreadcrumb">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <section>
              <h3 class="mru:mb-3 story-heading">
                default
              </h3>
              <MBreadcrumb :items="items" @navigate="onNavigate" />
            </section>

            <section>
              <h3 class="mru:mb-3 story-heading">
                short (2 items)
              </h3>
              <MBreadcrumb
                :items="[{ label: 'ホーム', href: '/' }, { label: '設定' }]"
                @navigate="onNavigate"
              />
            </section>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
