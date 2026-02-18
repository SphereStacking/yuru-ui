<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MModal from './MModal.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const opens = ref<Record<string, boolean>>({})

function openKey(theme: string, mode: string) {
  return `${theme}-${mode}`
}

function initState() {
  return {
    persistent: false,
  }
}
</script>

<template>
  <Story title="Overlay/MModal" :layout="{ type: 'single', iframe: true }">
    <Variant
      v-for="theme in themes"
      :key="theme"
      :title="theme"
      :init-state="initState"
    >
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
                 :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
              <p class="story-heading">{{ mode }}</p>
              <MButton @click="opens[openKey(theme, mode)] = true">モーダルを開く</MButton>
              <MModal v-model="opens[openKey(theme, mode)]" :persistent="state.persistent">
                <template #header>{{ theme }} モーダル ({{ mode }})</template>
                <p style="color: var(--m-color-text-sub); line-height: 1.8;">
                  テーマごとに角丸・シャドウ・アニメーションが変わるモーダルダイアログです。背景をクリックするか Esc キーで閉じられます。
                </p>
                <template #footer>
                  <MButton variant="ghost" @click="opens[openKey(theme, mode)] = false">キャンセル</MButton>
                  <MButton @click="opens[openKey(theme, mode)] = false">OK</MButton>
                </template>
              </MModal>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.persistent" title="persistent" />
      </template>
    </Variant>
  </Story>
</template>
