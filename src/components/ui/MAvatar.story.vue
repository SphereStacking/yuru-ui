<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MAvatar from './MAvatar.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="General/MAvatar">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div
            class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
            :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
          >
            <p class="story-heading">{{ mode }}</p>
            <section>
              <h3 class="story-heading">サイズ</h3>
              <div class="mru:flex mru:items-center mru:gap-3">
                <MAvatar size="sm" fallback="S" />
                <MAvatar size="md" fallback="M" />
                <MAvatar size="lg" fallback="L" />
              </div>
            </section>

            <section>
              <h3 class="story-heading">画像あり</h3>
              <div class="mru:flex mru:items-center mru:gap-3">
                <MAvatar
                  size="sm"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru1"
                  alt="avatar sm"
                />
                <MAvatar
                  size="md"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru2"
                  alt="avatar md"
                />
                <MAvatar
                  size="lg"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru3"
                  alt="avatar lg"
                />
              </div>
            </section>

            <section>
              <h3 class="story-heading">フォールバック（イニシャル）</h3>
              <div class="mru:flex mru:items-center mru:gap-3">
                <MAvatar size="md" fallback="A" />
                <MAvatar size="md" fallback="B" />
                <MAvatar size="md" fallback="C" />
              </div>
            </section>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
