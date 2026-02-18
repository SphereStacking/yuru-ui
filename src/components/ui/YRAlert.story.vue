<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRAlert from './YRAlert.vue'

const variants = ['success', 'warning', 'error', 'info'] as const
const themes = ['hoyo', 'pishi'] as const

function initState() {
  return {
    variant: 'info' as string,
    closable: false,
  }
}
</script>

<template>
  <Story title="Feedback/YRAlert">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div
            class="yr:p-6 yr:flex yr:flex-col yr:gap-4 yr:bg-gray-50 yr:dark:bg-gray-900"
          >
            <section>
              <h3 class="story-heading">playground</h3>
              <YRAlert :variant="state.variant as any" :closable="state.closable">
                This is a {{ state.variant }} alert message.
              </YRAlert>
            </section>

            <section v-for="variant in variants" :key="variant">
              <h3 class="story-heading">{{ variant }}</h3>
              <YRAlert :variant="variant">
                This is a {{ variant }} alert message.
              </YRAlert>
            </section>

            <section>
              <h3 class="story-heading">closable</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRAlert
                  v-for="variant in variants"
                  :key="variant"
                  :variant="variant"
                  closable
                >
                  Closable {{ variant }} alert. Click &times; to dismiss.
                </YRAlert>
              </div>
            </section>
          </div>
        </YRProvider>
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
