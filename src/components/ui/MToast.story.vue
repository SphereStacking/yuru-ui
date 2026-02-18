<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MToast from './MToast.vue'
import { useToast } from '../../composables/useToast'

const { addToast } = useToast()

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const variants = ['success', 'warning', 'error', 'info'] as const

const variantLabels: Record<string, string> = {
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
}

const variantColors: Record<string, string> = {
  success: 'mint',
  warning: 'lemon',
  error: 'pink',
  info: 'sky',
}

function showToast(variant: 'success' | 'warning' | 'error' | 'info') {
  addToast({
    message: `${variantLabels[variant]} toast message`,
    variant,
  })
}
</script>

<template>
  <Story title="UI/MToast">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <MToast />
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            トーストを表示
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MButton
              v-for="variant in variants"
              :key="variant"
              :color="variantColors[variant] as any"
              size="sm"
              @click="showToast(variant)"
            >
              {{ variantLabels[variant] }}
            </MButton>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
