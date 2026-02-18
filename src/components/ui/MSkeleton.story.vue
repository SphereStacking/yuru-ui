<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MSkeleton from './MSkeleton.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
</script>

<template>
  <Story title="Feedback/MSkeleton">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              text
            </h3>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <MSkeleton variant="text" />
              <MSkeleton variant="text" width="75%" />
              <MSkeleton variant="text" width="50%" />
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              circle
            </h3>
            <div style="display: flex; gap: 12px; align-items: center;">
              <MSkeleton variant="circle" />
              <MSkeleton variant="circle" width="56px" height="56px" />
              <MSkeleton variant="circle" width="72px" height="72px" />
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              rect
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <MSkeleton variant="rect" height="120px" />
              <MSkeleton variant="rect" width="200px" height="80px" />
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
