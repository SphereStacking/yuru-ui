<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MBadge from './MBadge.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const allVariants = ['primary', 'secondary', 'tertiary', 'mint', 'pink', 'lavender', 'peach', 'sky', 'lemon', 'success', 'warning', 'error', 'info'] as const

function initState() {
  return {
    variant: 'primary' as string,
  }
}
</script>

<template>
  <Story title="General/MBadge">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">playground</h3>
                <MBadge :variant="state.variant as any">{{ state.variant }}</MBadge>
              </section>

              <section>
                <h3 class="story-heading">バリアント</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-2">
                  <MBadge variant="primary">primary</MBadge>
                  <MBadge variant="secondary">secondary</MBadge>
                  <MBadge variant="tertiary">tertiary</MBadge>
                </div>
              </section>

              <section>
                <h3 class="story-heading">アクセントカラー</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-2">
                  <MBadge variant="mint">mint</MBadge>
                  <MBadge variant="pink">pink</MBadge>
                  <MBadge variant="lavender">lavender</MBadge>
                  <MBadge variant="peach">peach</MBadge>
                  <MBadge variant="sky">sky</MBadge>
                  <MBadge variant="lemon">lemon</MBadge>
                </div>
              </section>

              <section>
                <h3 class="story-heading">セマンティックカラー</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-2">
                  <MBadge variant="success">success</MBadge>
                  <MBadge variant="warning">warning</MBadge>
                  <MBadge variant="error">error</MBadge>
                  <MBadge variant="info">info</MBadge>
                </div>
              </section>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...allVariants]" />
      </template>
    </Variant>
  </Story>
</template>
