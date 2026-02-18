<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MAlert from './MAlert.vue'

const variants = ['success', 'warning', 'error', 'info'] as const
const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="Feedback/MAlert">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 8px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <MAlert :variant="variant">
              This is a {{ variant }} alert message.
            </MAlert>
          </section>

          <section>
            <h3 style="margin-bottom: 8px; font-weight: 500; color: var(--m-color-gray-600);">
              closable
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <MAlert
                v-for="variant in variants"
                :key="variant"
                :variant="variant"
                closable
              >
                Closable {{ variant }} alert. Click &times; to dismiss.
              </MAlert>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
