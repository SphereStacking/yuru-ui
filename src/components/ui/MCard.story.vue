<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MCard from './MCard.vue'
</script>

<template>
  <Story title="MCard">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">ほよほよカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              ゆらぎフィルターと非対称な角丸で、やわらかい雰囲気になります。
            </p>
          </MCard>

          <MCard padding="var(--m-space-xl)">
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">大きめパディング</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              padding prop でカスタムできます。
            </p>
          </MCard>

          <MCard padding="var(--m-space-sm)">
            <p style="color: var(--m-color-gray-600);">小さめパディング</p>
          </MCard>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">ぴしっとカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              フィルターなし、均一な角丸ですっきりした見た目。
            </p>
          </MCard>

          <MCard padding="var(--m-space-xl)">
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">大きめパディング</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              padding prop でカスタムできます。
            </p>
          </MCard>

          <MCard padding="var(--m-space-sm)">
            <p style="color: var(--m-color-gray-600);">小さめパディング</p>
          </MCard>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
