<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTextarea from './MTextarea.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const text = ref('こんにちは！これはテキストエリアの入力例です。')
</script>

<template>
  <Story title="Form/MTextarea">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
          <section>
            <h3 style="margin-bottom: 8px; font-weight: 500; color: var(--m-color-gray-600);">
              placeholder
            </h3>
            <MTextarea placeholder="ここにメッセージを入力してね..." />
          </section>

          <section>
            <h3 style="margin-bottom: 8px; font-weight: 500; color: var(--m-color-gray-600);">
              入力済み
            </h3>
            <MTextarea v-model="text" :rows="4" />
            <p style="margin-top: 4px; font-size: 0.875rem; color: var(--m-color-gray-500);">
              入力値: {{ text }}
            </p>
          </section>

          <section>
            <h3 style="margin-bottom: 8px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <MTextarea model-value="この入力欄は無効です" disabled />
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
