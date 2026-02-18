<script setup lang="ts">
import MProvider from './MProvider.vue'
</script>

<template>
  <Story title="MProvider">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h2 style="font-weight: 500; font-size: 1.375rem;">ほよテーマ</h2>
          <p style="font-size: 1rem; line-height: 1.8;">
            ゆるくてやわらかい、デフォルトのテーマです。非対称な角丸とSVGフィルターによるゆらぎが特徴。
          </p>
          <div style="display: flex; gap: 12px;">
            <div
              style="
                padding: 16px 24px;
                background: var(--m-color-primary-200);
                color: var(--m-color-primary-btn-text);
                border-radius: var(--m-radius-button);
                filter: var(--m-filter-default);
                font-weight: var(--m-font-weight-heading);
              "
            >
              ほよボタン
            </div>
            <div
              style="
                padding: 16px 24px;
                background: var(--m-color-accent-pink);
                color: var(--m-color-accent-pink-text);
                border-radius: var(--m-radius-button);
                filter: var(--m-filter-default);
                font-weight: var(--m-font-weight-heading);
              "
            >
              ぴんく
            </div>
          </div>
          <div
            style="
              padding: 24px;
              background: var(--m-color-card-bg);
              border-radius: var(--m-radius-card);
              box-shadow: var(--m-shadow-md);
              filter: var(--m-filter-card);
              border: var(--m-border-width) solid var(--m-color-border);
            "
          >
            <p style="font-weight: var(--m-font-weight-body);">ほよほよカード。ゆらぎフィルターがかかっています。</p>
          </div>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h2 style="font-weight: 600; font-size: 1.375rem;">ぴしテーマ</h2>
          <p style="font-size: 1rem; line-height: 1.8;">
            かちっとすっきりしたテーマです。均一な角丸でフィルターなし。
          </p>
          <div style="display: flex; gap: 12px;">
            <div
              style="
                padding: 16px 24px;
                background: var(--m-color-primary-200);
                color: var(--m-color-primary-btn-text);
                border-radius: var(--m-radius-button);
                filter: var(--m-filter-default);
                font-weight: var(--m-font-weight-heading);
              "
            >
              ぴしボタン
            </div>
            <div
              style="
                padding: 16px 24px;
                background: var(--m-color-accent-pink);
                color: var(--m-color-accent-pink-text);
                border-radius: var(--m-radius-button);
                filter: var(--m-filter-default);
                font-weight: var(--m-font-weight-heading);
              "
            >
              ぴんく
            </div>
          </div>
          <div
            style="
              padding: 24px;
              background: var(--m-color-card-bg);
              border-radius: var(--m-radius-card);
              box-shadow: var(--m-shadow-md);
              filter: var(--m-filter-card);
              border: var(--m-border-width) solid var(--m-color-border);
            "
          >
            <p style="font-weight: var(--m-font-weight-body);">ぴしっとカード。フィルターなし、均一な角丸。</p>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
