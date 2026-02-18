<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRButton from './YRButton.vue'

const themes = ['hoyo', 'pishi'] as const
const variants = ['primary', 'secondary', 'tertiary', 'outline', 'ghost'] as const
const sizes = ['sm', 'md', 'lg'] as const

function initState() {
  return {
    variant: 'primary' as string,
    size: 'md' as string,
    disabled: false,
    loading: false,
    fullWidth: false,
  }
}
</script>

<template>
  <Story title="General/YRButton">
    <Variant v-for="theme in themes" :key="theme" :title="theme" :init-state="initState">
      <template #default="{ state }">
        <YRProvider :theme="theme">
          <div class="yr:p-6 yr:flex yr:flex-col yr:gap-6 yr:bg-gray-50 yr:dark:bg-gray-900">
            <section>
              <h3 class="story-heading">playground</h3>
              <YRButton :variant="state.variant as any" :size="state.size as any" :disabled="state.disabled" :loading="state.loading" :full-width="state.fullWidth">
                {{ state.variant }}
              </YRButton>
            </section>

            <section>
              <h3 class="story-heading">All variants</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-3 yr:items-center">
                <YRButton v-for="v in variants" :key="v" :variant="v">{{ v }}</YRButton>
              </div>
            </section>

            <section>
              <h3 class="story-heading">Sizes</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-3 yr:items-center">
                <YRButton v-for="s in sizes" :key="s" :size="s">{{ s }}</YRButton>
              </div>
            </section>

            <section>
              <h3 class="story-heading">Disabled</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-3 yr:items-center">
                <YRButton disabled>disabled</YRButton>
                <YRButton variant="outline" disabled>disabled</YRButton>
                <YRButton variant="ghost" disabled>disabled</YRButton>
              </div>
            </section>

            <section>
              <h3 class="story-heading">Loading</h3>
              <div class="yr:flex yr:flex-wrap yr:gap-3 yr:items-center">
                <YRButton loading>primary</YRButton>
                <YRButton variant="secondary" loading>secondary</YRButton>
                <YRButton variant="outline" loading>outline</YRButton>
                <YRButton variant="ghost" loading>ghost</YRButton>
              </div>
            </section>

            <section>
              <h3 class="story-heading">Full Width</h3>
              <div class="yr:flex yr:flex-col yr:gap-3">
                <YRButton full-width>full width primary</YRButton>
                <YRButton variant="secondary" full-width>full width secondary</YRButton>
              </div>
            </section>
          </div>
        </YRProvider>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...variants]" />
        <HstSelect v-model="state.size" title="size" :options="[...sizes]" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.loading" title="loading" />
        <HstCheckbox v-model="state.fullWidth" title="fullWidth" />
      </template>
    </Variant>
  </Story>
</template>
