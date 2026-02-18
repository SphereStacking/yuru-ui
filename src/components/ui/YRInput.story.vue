<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRInput from './YRInput.vue'

const text = ref('')
const themes = ['hoyo', 'pishi'] as const

function initState() {
  return {
    placeholder: 'なまえを入力してね',
    disabled: false,
    label: 'おなまえ',
    error: '',
    required: false,
    helperText: '',
  }
}
</script>

<template>
  <Story title="Form/YRInput">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:max-w-sm yr:bg-gray-50 yr:dark:bg-gray-900">
            <YRInput
              v-model="text"
              :placeholder="state.placeholder"
              :disabled="state.disabled"
              :label="state.label"
              :error="state.error"
              :required="state.required"
              :helper-text="state.helperText"
            />

            <section>
              <h3 class="story-heading">バリデーション例</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRInput label="メール" placeholder="you@example.com" helper-text="確認メールを送信します" />
                <YRInput label="ユーザー名" required error="この名前は既に使われています" model-value="maruru" />
                <YRInput label="パスワード" type="password" required placeholder="8文字以上" />
                <YRInput placeholder="disabled" disabled />
              </div>
            </section>

            <p class="yr:text-sm yr:text-gray-500 yr:dark:text-gray-400">
              入力値: {{ text }}
            </p>
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
