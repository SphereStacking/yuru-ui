<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRAvatar from './YRAvatar.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="General/YRAvatar">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">サイズ</h3>
              <div class="yr:flex yr:items-center yr:gap-3">
                <YRAvatar size="sm" fallback="S" />
                <YRAvatar size="md" fallback="M" />
                <YRAvatar size="lg" fallback="L" />
              </div>
            </section>

            <section>
              <h3 class="story-heading">画像あり</h3>
              <div class="yr:flex yr:items-center yr:gap-3">
                <YRAvatar
                  size="sm"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru1"
                  alt="avatar sm"
                />
                <YRAvatar
                  size="md"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru2"
                  alt="avatar md"
                />
                <YRAvatar
                  size="lg"
                  src="https://api.dicebear.com/7.x/thumbs/svg?seed=maru3"
                  alt="avatar lg"
                />
              </div>
            </section>

            <section>
              <h3 class="story-heading">フォールバック（イニシャル）</h3>
              <div class="yr:flex yr:items-center yr:gap-3">
                <YRAvatar size="md" fallback="A" />
                <YRAvatar size="md" fallback="B" />
                <YRAvatar size="md" fallback="C" />
              </div>
            </section>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
