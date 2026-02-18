<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRSwitch from './YRSwitch.vue'

const themes = ['hoyo', 'pishi'] as const

function initState() {
  return {
    disabled: false,
    label: '通知を受け取る',
  }
}

const playgroundValue = ref(false)
const onValue = ref(true)
</script>

<template>
  <Story title="Form/YRSwitch">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">playground</h3>
              <YRSwitch
                v-model="playgroundValue"
                :disabled="state.disabled"
                :label="state.label"
                name="notifications"
              />
            </section>

            <section>
              <h3 class="story-heading">states</h3>
              <div class="yr:flex yr:gap-4 yr:items-center">
                <div class="yr:flex yr:flex-col yr:items-center yr:gap-1">
                  <YRSwitch :model-value="false" label="off" />
                </div>
                <div class="yr:flex yr:flex-col yr:items-center yr:gap-1">
                  <YRSwitch v-model="onValue" label="on" />
                </div>
              </div>
            </section>

            <section>
              <h3 class="story-heading">disabled</h3>
              <div class="yr:flex yr:gap-4 yr:items-center">
                <YRSwitch :model-value="false" disabled label="無効 off" />
                <YRSwitch :model-value="true" disabled label="無効 on" />
              </div>
            </section>

            <section>
              <h3 class="story-heading">without label</h3>
              <YRSwitch :model-value="true" />
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstText v-model="state.label" title="label" />
      </template>
    </Variant>
  </Story>
</template>
