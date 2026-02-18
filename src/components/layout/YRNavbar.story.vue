<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRNavbar from './YRNavbar.vue'
import YRButton from '../ui/YRButton.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Layout/YRNavbar">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:pb-2 yr:bg-gray-50 yr:dark:bg-gray-900">
            <YRNavbar>
              <template #brand>ゆるUI</template>
              <a href="#" class="yr:text-gray-700 yr:dark:text-gray-200 yr:no-underline">ホーム</a>
              <a href="#" class="yr:text-gray-700 yr:dark:text-gray-200 yr:no-underline">コンポーネント</a>
              <a href="#" class="yr:text-gray-700 yr:dark:text-gray-200 yr:no-underline">テーマ</a>
              <template #actions>
                <YRButton size="sm">ログイン</YRButton>
              </template>
            </YRNavbar>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
