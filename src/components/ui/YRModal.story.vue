<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRButton from './YRButton.vue'
import YRModal from './YRModal.vue'

const themes = ['hoyo', 'pishi'] as const
const opens = ref<Record<string, boolean>>({})

function openKey(theme: string) {
  return `${theme}`
}

function initState() {
  return {
    persistent: false,
  }
}
</script>

<template>
  <Story title="Overlay/YRModal" :layout="{ type: 'single', iframe: true }">
    <Variant
      v-for="theme in themes"
      :key="theme"
      :title="theme"
      :init-state="initState"
    >
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <YRButton @click="opens[openKey(theme)] = true">モーダルを開く</YRButton>
            <YRModal v-model="opens[openKey(theme)]" :persistent="state.persistent">
              <template #header>{{ theme }} モーダル</template>
              <p class="yr:text-gray-500 yr:dark:text-gray-400 yr:leading-relaxed">
                テーマごとに角丸・シャドウ・アニメーションが変わるモーダルダイアログです。背景をクリックするか Esc キーで閉じられます。
              </p>
              <template #footer>
                <YRButton variant="ghost" @click="opens[openKey(theme)] = false">キャンセル</YRButton>
                <YRButton @click="opens[openKey(theme)] = false">OK</YRButton>
              </template>
            </YRModal>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.persistent" title="persistent" />
      </template>
    </Variant>
  </Story>
</template>
