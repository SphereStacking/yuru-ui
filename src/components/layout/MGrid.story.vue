<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MGrid from './MGrid.vue'
</script>

<template>
  <Story title="Layout/MGrid">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg);">
          <MGrid>
            <div
              v-for="i in 6"
              :key="i"
              style="
                background: var(--m-color-primary-100);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-lg);
                text-align: center;
                filter: var(--m-filter-default);
              "
            >
              {{ i }}
            </div>
          </MGrid>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: var(--m-space-lg);">
          <MGrid>
            <div
              v-for="i in 6"
              :key="i"
              style="
                background: var(--m-color-primary-100);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-lg);
                text-align: center;
                filter: var(--m-filter-default);
              "
            >
              {{ i }}
            </div>
          </MGrid>
        </div>
      </MProvider>
    </Variant>

    <Variant title="2カラム">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg);">
          <MGrid :cols="2" gap="var(--m-space-lg)">
            <div
              v-for="i in 4"
              :key="i"
              style="
                background: var(--m-color-accent-peach);
                color: var(--m-color-accent-peach-text);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-lg);
                text-align: center;
                filter: var(--m-filter-default);
              "
            >
              {{ i }}
            </div>
          </MGrid>
        </div>
      </MProvider>
    </Variant>

    <Variant title="4カラム">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg);">
          <MGrid :cols="4" gap="var(--m-space-sm)">
            <div
              v-for="i in 8"
              :key="i"
              style="
                background: var(--m-color-accent-sky);
                color: var(--m-color-accent-sky-text);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-md);
                text-align: center;
                filter: var(--m-filter-default);
              "
            >
              {{ i }}
            </div>
          </MGrid>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
