<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MAlert from './MAlert.vue'

const variants = ['success', 'warning', 'error', 'info'] as const
const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

function initState() {
  return {
    variant: 'info' as string,
    closable: false,
  }
}
</script>

<template>
  <Story title="Feedback/MAlert">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
          <MProvider :theme="theme">
            <div
              class="mru:p-6 mru:flex mru:flex-col mru:gap-4"
              :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            >
              <p class="story-heading">{{ mode }}</p>
              <section>
                <h3 class="story-heading">playground</h3>
                <MAlert :variant="state.variant as any" :closable="state.closable">
                  This is a {{ state.variant }} alert message.
                </MAlert>
              </section>

              <section v-for="variant in variants" :key="variant">
                <h3 class="story-heading">{{ variant }}</h3>
                <MAlert :variant="variant">
                  This is a {{ variant }} alert message.
                </MAlert>
              </section>

              <section>
                <h3 class="story-heading">closable</h3>
                <div class="mru:flex mru:flex-col mru:gap-3">
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
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.variant"
          title="variant"
          :options="[...variants]"
        />
        <HstCheckbox v-model="state.closable" title="closable" />
      </template>
    </Variant>
  </Story>
</template>
