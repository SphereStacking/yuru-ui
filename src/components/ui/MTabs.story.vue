<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTabs from './MTabs.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const

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
</script>

<template>
  <Story title="MTabs">
    <Variant v-for="(theme, i) in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px;">
          <MTabs
            v-model="activeKeys[theme].value"
            :tabs="tabs"
            :color="colors[i]"
          >
            <p>{{ panelContent[activeKeys[theme].value] }}</p>
          </MTabs>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
