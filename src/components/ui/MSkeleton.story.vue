<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MSkeleton from './MSkeleton.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const variants = ['text', 'circle', 'rect'] as const

function initState() {
  return {
    variant: 'text' as string,
  }
}
</script>

<template>
  <Story title="Feedback/MSkeleton">
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
                <MSkeleton :variant="state.variant as any" />
              </section>

              <section>
                <h3 class="story-heading">text</h3>
                <div class="mru:flex mru:flex-col mru:gap-2">
                  <MSkeleton variant="text" />
                  <MSkeleton variant="text" width="75%" />
                  <MSkeleton variant="text" width="50%" />
                </div>
              </section>

              <section>
                <h3 class="story-heading">circle</h3>
                <div class="mru:flex mru:gap-3 mru:items-center">
                  <MSkeleton variant="circle" />
                  <MSkeleton variant="circle" width="56px" height="56px" />
                  <MSkeleton variant="circle" width="72px" height="72px" />
                </div>
              </section>

              <section>
                <h3 class="story-heading">rect</h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
                  <MSkeleton variant="rect" height="120px" />
                  <MSkeleton variant="rect" width="200px" height="80px" />
                </div>
              </section>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...variants]" />
      </template>
    </Variant>
  </Story>
</template>
