<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRSkeleton from './YRSkeleton.vue'

const themes = ['hoyo', 'pishi'] as const
const variants = ['text', 'circle', 'rect'] as const

function initState() {
  return {
    variant: 'text' as string,
  }
}
</script>

<template>
  <Story title="Feedback/YRSkeleton">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div
            class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900"
          >
            <section>
              <h3 class="story-heading">playground</h3>
              <YRSkeleton :variant="state.variant as any" />
            </section>

            <section>
              <h3 class="story-heading">text</h3>
              <div class="yr:flex yr:flex-col yr:gap-2">
                <YRSkeleton variant="text" />
                <YRSkeleton variant="text" width="75%" />
                <YRSkeleton variant="text" width="50%" />
              </div>
            </section>

            <section>
              <h3 class="story-heading">circle</h3>
              <div class="yr:flex yr:gap-3 yr:items-center">
                <YRSkeleton variant="circle" />
                <YRSkeleton variant="circle" width="56px" height="56px" />
                <YRSkeleton variant="circle" width="72px" height="72px" />
              </div>
            </section>

            <section>
              <h3 class="story-heading">rect</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRSkeleton variant="rect" height="120px" />
                <YRSkeleton variant="rect" width="200px" height="80px" />
              </div>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...variants]" />
      </template>
    </Variant>
  </Story>
</template>
