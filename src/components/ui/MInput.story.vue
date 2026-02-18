<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MInput from './MInput.vue'

const text = ref('')
const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

function initState() {
  return {
    placeholder: 'なまえを入力してね',
    disabled: false,
  }
}
</script>

<template>
  <Story title="Form/MInput">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-4 mru:max-w-sm"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <MInput v-model="text" :placeholder="state.placeholder" :disabled="state.disabled" />
              <MInput placeholder="disabled" disabled />
              <MInput type="password" placeholder="パスワード" />
              <p class="mru:text-sm" style="color: var(--m-color-text-sub);">
                入力値: {{ text }}
              </p>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.placeholder" title="placeholder" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>
    </Variant>
  </Story>
</template>
