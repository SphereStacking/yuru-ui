<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRButton from './YRButton.vue'
import YRTooltip from './YRTooltip.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Feedback/YRTooltip">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
          <div class="yr:flex yr:flex-wrap yr:gap-8 yr:items-center">
            <YRTooltip content="上のツールチップ" position="top">
              <YRButton>Top</YRButton>
            </YRTooltip>
            <YRTooltip content="下のツールチップ" position="bottom">
              <YRButton>Bottom</YRButton>
            </YRTooltip>
            <YRTooltip content="左のツールチップ" position="left">
              <YRButton>Left</YRButton>
            </YRTooltip>
            <YRTooltip content="右のツールチップ" position="right">
              <YRButton>Right</YRButton>
            </YRTooltip>
          </div>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
