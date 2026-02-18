<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRTabs from './YRTabs.vue'

const themes = ['hoyo', 'pishi'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const

const tabs = [
  { key: 'profile', label: 'プロフィール' },
  { key: 'settings', label: '設定' },
  { key: 'notifications', label: '通知' },
]

const activeKeys = Object.fromEntries(
  themes.map((t) => [t, ref('profile')])
)

const panelContent: Record<string, string> = {
  profile: 'ユーザープロフィールの内容がここに表示されます。',
  settings: 'アプリの設定項目がここに表示されます。',
  notifications: '通知の一覧がここに表示されます。',
}

function initState() {
  return {
    color: 'mint' as string,
  }
}
</script>

<template>
  <Story title="Navigation/YRTabs">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <YRTabs
              v-model="activeKeys[theme].value"
              :tabs="tabs"
              :color="state.color as any"
            >
              <p>{{ panelContent[activeKeys[theme].value] }}</p>
            </YRTabs>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
      </template>
    </Variant>
  </Story>
</template>
