<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MTooltip from './MTooltip.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Feedback/MTooltip">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6 mru:flex mru:flex-col mru:gap-6"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <p class="story-heading">{{ mode }}</p>
            <div class="mru:flex mru:flex-wrap mru:gap-8 mru:items-center">
              <MTooltip content="上のツールチップ" position="top">
                <MButton>Top</MButton>
              </MTooltip>
              <MTooltip content="下のツールチップ" position="bottom">
                <MButton>Bottom</MButton>
              </MTooltip>
              <MTooltip content="左のツールチップ" position="left">
                <MButton>Left</MButton>
              </MTooltip>
              <MTooltip content="右のツールチップ" position="right">
                <MButton>Right</MButton>
              </MTooltip>
            </div>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
