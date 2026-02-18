<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MInput from './MInput.vue'

const text = ref('')
</script>

<template>
  <Story title="Form/MInput">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MInput v-model="text" placeholder="なまえを入力してね" />
          <MInput placeholder="disabled" disabled />
          <MInput type="password" placeholder="パスワード" />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            入力値: {{ text }}
          </p>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <MInput v-model="text" placeholder="なまえを入力してね" />
          <MInput placeholder="disabled" disabled />
          <MInput type="password" placeholder="パスワード" />
          <p style="font-size: 0.875rem; color: var(--m-color-gray-500);">
            入力値: {{ text }}
          </p>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
