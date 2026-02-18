<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MCheckbox from './MCheckbox.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

function initState() {
  return {
    disabled: false,
  }
}

const playgroundValue = ref(false)
</script>

<template>
  <Story title="Form/MCheckbox">
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
                <MCheckbox
                  v-model="playgroundValue"
                  :disabled="state.disabled"
                >
                  Check me
                </MCheckbox>
              </section>

              <section>
                <h3 class="story-heading">states</h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <MCheckbox :model-value="false">
                    Unchecked
                  </MCheckbox>
                  <MCheckbox :model-value="true">
                    Checked
                  </MCheckbox>
                </div>
              </section>

              <section>
                <h3 class="story-heading">disabled</h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <MCheckbox :model-value="false" disabled>
                    Unchecked disabled
                  </MCheckbox>
                  <MCheckbox :model-value="true" disabled>
                    Checked disabled
                  </MCheckbox>
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
