<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MSelect from './MSelect.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

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
  }
}
</script>

<template>
  <Story title="Form/MSelect">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div class="mru:p-6 mru:flex mru:flex-col mru:gap-4 mru:max-w-sm"
                 :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
              <p class="story-heading">{{ mode }}</p>
              <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" :disabled="state.disabled" />
              <MSelect :options="fruits" placeholder="disabled" disabled />
              <p class="mru:text-sm" style="color: var(--m-color-text-sub);">
                選択値: {{ selected || '(未選択)' }}
              </p>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>
    </Variant>
  </Story>
</template>
