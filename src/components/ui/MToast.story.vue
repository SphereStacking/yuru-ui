<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MToast from './MToast.vue'
import { useToast } from '../../composables/useToast'

const { addToast } = useToast()

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const variants = ['success', 'warning', 'error', 'info'] as const

const variantLabels: Record<string, string> = {
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
}

function showToast(variant: 'success' | 'warning' | 'error' | 'info') {
  addToast({
    message: `${variantLabels[variant]} toast message`,
    variant,
  })
}
</script>

<template>
  <Story title="Feedback/MToast">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <MToast />
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <h3 class="mru:text-lg" style="font-weight: var(--m-font-weight-heading);">
              トーストを表示
            </h3>
            <div class="mru:flex mru:flex-wrap mru:gap-2">
              <MButton
                v-for="variant in variants"
                :key="variant"
                size="sm"
                @click="showToast(variant)"
              >
                {{ variantLabels[variant] }}
              </MButton>
            </div>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
