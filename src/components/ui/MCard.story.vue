<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MCard from './MCard.vue'
</script>

<template>
  <Story title="General/MCard">
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

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">とげとげカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              角丸ゼロ、シャープなシャドウでかっちりした印象。
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

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">もこもこカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              超おおきな角丸とゆらぎフィルターで、雲みたいなもこもこ感。
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

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">きらきらカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              グロウ感のあるシャドウで、キラキラ華やかなリッチスタイル。
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

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <MCard>
            <h3 style="font-weight: var(--m-font-weight-heading); margin-bottom: 8px;">ねむねむカード</h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              淡いシャドウと軽いウェイトで、目に優しい夜向けスタイル。
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
