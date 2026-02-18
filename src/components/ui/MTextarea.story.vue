<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MTextarea from './MTextarea.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const text = ref('こんにちは！これはテキストエリアの入力例です。')

function initState() {
  return {
    placeholder: 'ここにメッセージを入力してね...',
    disabled: false,
  }
}
</script>

<template>
  <Story title="Form/MTextarea">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
              style="max-width: 480px;"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">playground</h3>
                <MTextarea :placeholder="state.placeholder" :disabled="state.disabled" />
              </section>

              <section>
                <h3 class="story-heading">入力済み</h3>
                <MTextarea v-model="text" :rows="4" />
                <p class="mru:text-sm" style="margin-top: 4px; color: var(--m-color-text-sub);">
                  入力値: {{ text }}
                </p>
              </section>

              <section>
                <h3 class="story-heading">disabled</h3>
                <MTextarea model-value="この入力欄は無効です" disabled />
              </section>
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
