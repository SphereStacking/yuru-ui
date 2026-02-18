<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRDivider from './YRDivider.vue'

const themes = ['hoyo', 'pishi'] as const
const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
</script>

<template>
  <Story title="General/YRDivider">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900">
            <div v-for="color in colors" :key="color">
              <p class="yr:mb-2 yr:text-xs yr:text-gray-500 yr:dark:text-gray-400">{{ color }}</p>
              <YRDivider :color="color" />
            </div>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
