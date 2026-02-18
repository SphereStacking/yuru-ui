<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRSelect from './YRSelect.vue'

const themes = ['hoyo', 'pishi'] as const

const selected = ref<string>('')

const fruits = [
  { value: 'apple', label: 'りんご' },
  { value: 'orange', label: 'みかん' },
  { value: 'grape', label: 'ぶどう' },
  { value: 'strawberry', label: 'いちご' },
]

function initState() {
  return {
    disabled: false,
    label: 'フルーツ',
    error: '',
    required: false,
    helperText: 'お好きなフルーツを選んでください',
  }
}
</script>

<template>
  <Story title="Form/YRSelect">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:max-w-sm yr:bg-gray-50 yr:dark:bg-gray-900">
            <YRSelect
              v-model="selected"
              :options="fruits"
              placeholder="フルーツを選んでね"
              :disabled="state.disabled"
              :label="state.label"
              :error="state.error"
              :required="state.required"
              :helper-text="state.helperText"
            />
            <YRSelect :options="fruits" placeholder="disabled" disabled label="無効" />

            <section>
              <h3 class="story-heading">validation</h3>
              <YRSelect
                :options="fruits"
                placeholder="選択してください"
                label="必須フルーツ"
                error="フルーツを選択してください"
                required
              />
            </section>

            <p class="yr:text-sm yr:text-gray-500 yr:dark:text-gray-400">
              選択値: {{ selected || '(未選択)' }}
            </p>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstText v-model="state.label" title="label" />
        <HstText v-model="state.error" title="error" />
        <HstCheckbox v-model="state.required" title="required" />
        <HstText v-model="state.helperText" title="helperText" />
      </template>
    </Variant>
  </Story>
</template>
