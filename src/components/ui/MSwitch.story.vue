<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MSwitch from './MSwitch.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

function initState() {
  return {
    disabled: false,
  }
}

const playgroundValue = ref(false)
const onValue = ref(true)
</script>

<template>
  <Story title="Form/MSwitch">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">playground</h3>
                <MSwitch
                  v-model="playgroundValue"
                  :disabled="state.disabled"
                />
              </section>

              <section>
                <h3 class="story-heading">states</h3>
                <div class="mru:flex mru:gap-4 mru:items-center">
                  <div class="mru:flex mru:flex-col mru:items-center mru:gap-1">
                    <MSwitch :model-value="false" />
                    <span class="mru:text-xs" style="color: var(--m-color-text-sub);">off</span>
                  </div>
                  <div class="mru:flex mru:flex-col mru:items-center mru:gap-1">
                    <MSwitch v-model="onValue" />
                    <span class="mru:text-xs" style="color: var(--m-color-text-sub);">on</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 class="story-heading">disabled</h3>
                <div class="mru:flex mru:gap-4 mru:items-center">
                  <MSwitch :model-value="false" disabled />
                  <MSwitch :model-value="true" disabled />
                </div>
              </section>
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
