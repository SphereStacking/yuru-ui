<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MNavbar from './MNavbar.vue'
import MButton from '../ui/MButton.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Layout/MNavbar">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:pb-2"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading mru:px-4 mru:pt-2">{{ mode }}</p>
            <MNavbar>
              <template #brand>まるUI</template>
              <a href="#" style="color: var(--m-color-text-main); text-decoration: none;">ホーム</a>
              <a href="#" style="color: var(--m-color-text-main); text-decoration: none;">コンポーネント</a>
              <a href="#" style="color: var(--m-color-text-main); text-decoration: none;">テーマ</a>
              <template #actions>
                <MButton size="sm">ログイン</MButton>
              </template>
            </MNavbar>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
