<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MSelect from './MSelect.vue'

const selected = ref<string>('')

const fruits = [
  { value: 'apple', label: 'りんご' },
  { value: 'orange', label: 'みかん' },
  { value: 'grape', label: 'ぶどう' },
  { value: 'strawberry', label: 'いちご' },
]
</script>

<template>
  <Story title="UI/MSelect">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MSelect v-model="selected" :options="fruits" placeholder="フルーツを選んでね" />
          <MSelect :options="fruits" placeholder="disabled" disabled />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            選択値: {{ selected || '(未選択)' }}
          </p>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
