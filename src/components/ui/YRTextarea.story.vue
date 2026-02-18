<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRTextarea from './YRTextarea.vue'

const themes = ['hoyo', 'pishi'] as const
const text = ref('こんにちは！これはテキストエリアの入力例です。')

function initState() {
  return {
    placeholder: 'ここにメッセージを入力してね...',
    disabled: false,
    label: 'メッセージ',
    error: '',
    required: false,
    helperText: '',
  }
}
</script>

<template>
  <Story title="Form/YRTextarea">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div
            class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900"
            style="max-width: 480px;"
          >
            <section>
              <h3 class="story-heading">playground</h3>
              <YRTextarea
                :placeholder="state.placeholder"
                :disabled="state.disabled"
                :label="state.label"
                :error="state.error"
                :required="state.required"
                :helper-text="state.helperText"
              />
            </section>

            <section>
              <h3 class="story-heading">バリデーション例</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRTextarea label="自己紹介" placeholder="あなたのことを教えてね" helper-text="200文字以内で書いてね" />
                <YRTextarea label="コメント" required error="コメントを入力してください" />
                <YRTextarea model-value="この入力欄は無効です" disabled />
              </div>
            </section>

            <section>
              <h3 class="story-heading">入力済み</h3>
              <YRTextarea v-model="text" label="ノート" :rows="4" />
              <p class="yr:text-sm yr:text-gray-500 yr:dark:text-gray-400 yr:mt-1">
                入力値: {{ text }}
              </p>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="label" />
        <HstText v-model="state.placeholder" title="placeholder" />
        <HstText v-model="state.error" title="error" />
        <HstText v-model="state.helperText" title="helperText" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
      </template>
    </Variant>
  </Story>
</template>
