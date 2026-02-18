<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MContainer from './MContainer.vue'
</script>

<template>
  <Story title="Layout/MContainer">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="background: var(--m-color-gray-50); padding: var(--m-space-md);">
          <MContainer>
            <div
              style="
                background: var(--m-color-card-bg);
                border-radius: var(--m-radius-card);
                box-shadow: var(--m-shadow-md);
                filter: var(--m-filter-card);
                border: var(--m-border-width) solid var(--m-color-border);
                padding: var(--m-space-lg);
              "
            >
              <h2 style="font-weight: var(--m-font-weight-heading); font-size: 1.375rem; margin-bottom: 8px;">
                MContainer (hoyo)
              </h2>
              <p style="font-weight: var(--m-font-weight-body); line-height: 1.8;">
                maxWidth: 960px, padding: var(--m-space-lg) がデフォルト。コンテンツを中央寄せで配置します。
              </p>
            </div>
          </MContainer>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="background: var(--m-color-gray-50); padding: var(--m-space-md);">
          <MContainer>
            <div
              style="
                background: var(--m-color-card-bg);
                border-radius: var(--m-radius-card);
                box-shadow: var(--m-shadow-md);
                filter: var(--m-filter-card);
                border: var(--m-border-width) solid var(--m-color-border);
                padding: var(--m-space-lg);
              "
            >
              <h2 style="font-weight: var(--m-font-weight-heading); font-size: 1.375rem; margin-bottom: 8px;">
                MContainer (pishi)
              </h2>
              <p style="font-weight: var(--m-font-weight-body); line-height: 1.8;">
                maxWidth: 960px, padding: var(--m-space-lg) がデフォルト。コンテンツを中央寄せで配置します。
              </p>
            </div>
          </MContainer>
        </div>
      </MProvider>
    </Variant>

    <Variant title="カスタム幅">
      <MProvider theme="hoyo">
        <div style="background: var(--m-color-gray-50); padding: var(--m-space-md);">
          <MContainer max-width="600px" padding="var(--m-space-xl)">
            <div
              style="
                background: var(--m-color-accent-mint);
                color: var(--m-color-accent-mint-text);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-lg);
                filter: var(--m-filter-default);
              "
            >
              <p style="font-weight: var(--m-font-weight-heading);">
                maxWidth: 600px / padding: var(--m-space-xl) に変更
              </p>
            </div>
          </MContainer>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
