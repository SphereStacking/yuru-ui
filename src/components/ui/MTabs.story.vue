<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTabs from './MTabs.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
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
  <Story title="Navigation/MTabs">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
                 :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
              <p class="story-heading">{{ mode }}</p>
              <MTabs
                v-model="activeKeys[theme].value"
                :tabs="tabs"
                :color="state.color as any"
              >
                <p>{{ panelContent[activeKeys[theme].value] }}</p>
              </MTabs>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.color" title="color" :options="[...colors]" />
      </template>
    </Variant>
  </Story>
</template>
