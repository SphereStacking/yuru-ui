<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from '../provider/YRProvider.vue'
import YRCheckbox from './YRCheckbox.vue'

const themes = ['hoyo', 'pishi'] as const

function initState() {
  return {
    disabled: false,
  }
}

const playgroundValue = ref(false)
</script>

<template>
  <Story title="Form/YRCheckbox">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">playground</h3>
              <YRCheckbox
                v-model="playgroundValue"
                :disabled="state.disabled"
                name="playground-checkbox"
              >
                Check me
              </YRCheckbox>
            </section>

            <section>
              <h3 class="story-heading">states</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRCheckbox :model-value="false">
                  Unchecked
                </YRCheckbox>
                <YRCheckbox :model-value="true">
                  Checked
                </YRCheckbox>
              </div>
            </section>

            <section>
              <h3 class="story-heading">disabled</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRCheckbox :model-value="false" disabled>
                  Unchecked disabled
                </YRCheckbox>
                <YRCheckbox :model-value="true" disabled>
                  Checked disabled
                </YRCheckbox>
              </div>
            </section>

            <section>
              <h3 class="story-heading">with name</h3>
              <YRCheckbox :model-value="true" name="terms" id="terms-checkbox">
                利用規約に同意する
              </YRCheckbox>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>
    </Variant>
  </Story>
</template>
