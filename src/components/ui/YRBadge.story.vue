<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRBadge from './YRBadge.vue'

const themes = ['hoyo', 'pishi'] as const
const allVariants = ['primary', 'secondary', 'tertiary', 'mint', 'pink', 'lavender', 'peach', 'sky', 'lemon', 'success', 'warning', 'error', 'info'] as const

function initState() {
  return {
    variant: 'primary' as string,
  }
}
</script>

<template>
  <Story title="General/YRBadge">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">playground</h3>
              <YRBadge :variant="state.variant as any">{{ state.variant }}</YRBadge>
            </section>

            <section>
              <h3 class="story-heading">バリアント</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRBadge variant="primary">primary</YRBadge>
                <YRBadge variant="secondary">secondary</YRBadge>
                <YRBadge variant="tertiary">tertiary</YRBadge>
              </div>
            </section>

            <section>
              <h3 class="story-heading">アクセントカラー</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRBadge variant="mint">mint</YRBadge>
                <YRBadge variant="pink">pink</YRBadge>
                <YRBadge variant="lavender">lavender</YRBadge>
                <YRBadge variant="peach">peach</YRBadge>
                <YRBadge variant="sky">sky</YRBadge>
                <YRBadge variant="lemon">lemon</YRBadge>
              </div>
            </section>

            <section>
              <h3 class="story-heading">セマンティックカラー</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRBadge variant="success">success</YRBadge>
                <YRBadge variant="warning">warning</YRBadge>
                <YRBadge variant="error">error</YRBadge>
                <YRBadge variant="info">info</YRBadge>
              </div>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...allVariants]" />
      </template>
    </Variant>
  </Story>
</template>
