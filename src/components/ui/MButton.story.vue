<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'

const colors = ['mint', 'pink', 'lavender', 'peach', 'sky', 'lemon'] as const
const variants = ['primary', 'outline', 'ghost'] as const
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <Story title="MButton">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <section v-for="variant in variants" :key="variant">
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              {{ variant }}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton
                v-for="color in colors"
                :key="color"
                :variant="variant"
                :color="color"
              >
                {{ color }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              sizes
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton v-for="size in sizes" :key="size" :size="size">
                {{ size }}
              </MButton>
            </div>
          </section>

          <section>
            <h3 style="margin-bottom: 12px; font-weight: 500; color: var(--m-color-gray-600);">
              disabled
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <MButton disabled>disabled</MButton>
              <MButton variant="outline" disabled>disabled</MButton>
              <MButton variant="ghost" disabled>disabled</MButton>
            </div>
          </section>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
