<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRButton from './YRButton.vue'
import YRToast from './YRToast.vue'
import { useToast } from '../../composables/useToast'

const { addToast } = useToast()

const themes = ['hoyo', 'pishi'] as const
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
  <Story title="Feedback/YRToast">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <YRToast />
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900">
          <h3 class="yr:text-lg" style="font-weight: var(--yr-font-weight-heading);">
            トーストを表示
          </h3>
          <div class="yr:flex yr:flex-wrap yr:gap-2">
            <YRButton
              v-for="variant in variants"
              :key="variant"
              size="sm"
              @click="showToast(variant)"
            >
              {{ variantLabels[variant] }}
            </YRButton>
          </div>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
