<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
const variants = ['primary', 'secondary', 'tertiary', 'outline', 'ghost'] as const
const sizes = ['sm', 'md', 'lg'] as const

function initState() {
  return {
    variant: 'primary' as string,
    size: 'md' as string,
    disabled: false,
  }
}
</script>

<template>
  <Story title="General/MButton">
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
                <MButton :variant="state.variant as any" :size="state.size as any" :disabled="state.disabled">
                  {{ state.variant }}
                </MButton>
              </section>

              <section>
                <h3 class="story-heading">All variants</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-3 mru:items-center">
                  <MButton v-for="v in variants" :key="v" :variant="v">{{ v }}</MButton>
                </div>
              </section>

              <section>
                <h3 class="story-heading">Sizes</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-3 mru:items-center">
                  <MButton v-for="s in sizes" :key="s" :size="s">{{ s }}</MButton>
                </div>
              </section>

              <section>
                <h3 class="story-heading">Disabled</h3>
                <div class="mru:flex mru:flex-wrap mru:gap-3 mru:items-center">
                  <MButton disabled>disabled</MButton>
                  <MButton variant="outline" disabled>disabled</MButton>
                  <MButton variant="ghost" disabled>disabled</MButton>
                </div>
              </section>
            </div>
          </MProvider>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="variant" :options="[...variants]" />
        <HstSelect v-model="state.size" title="size" :options="[...sizes]" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>
    </Variant>
  </Story>
</template>
