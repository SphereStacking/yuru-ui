<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MAvatar from './MAvatar.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="General/MAvatar">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            サイズ
          </h3>
          <div style="display: flex; align-items: center; gap: 12px;">
            <MAvatar size="sm" fallback="S" />
            <MAvatar size="md" fallback="M" />
            <MAvatar size="lg" fallback="L" />
          </div>
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            画像あり
          </h3>
          <div style="display: flex; align-items: center; gap: 12px;">
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
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            フォールバック（イニシャル）
          </h3>
          <div style="display: flex; align-items: center; gap: 12px;">
            <MAvatar size="md" fallback="A" />
            <MAvatar size="md" fallback="B" />
            <MAvatar size="md" fallback="C" />
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
