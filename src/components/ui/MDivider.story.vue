<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MDivider from './MDivider.vue'
</script>

<template>
  <Story title="UI/MDivider">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            なみなみ区切り線（hoyo）
          </h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">mint (default)</p>
              <MDivider color="mint" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">pink</p>
              <MDivider color="pink" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">lavender</p>
              <MDivider color="lavender" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">peach</p>
              <MDivider color="peach" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">sky</p>
              <MDivider color="sky" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">lemon</p>
              <MDivider color="lemon" />
            </div>
          </div>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            直線区切り線（pishi）
          </h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">mint (default)</p>
              <MDivider color="mint" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">pink</p>
              <MDivider color="pink" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">lavender</p>
              <MDivider color="lavender" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">peach</p>
              <MDivider color="peach" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">sky</p>
              <MDivider color="sky" />
            </div>
            <div>
              <p style="font-size: 0.75rem; color: var(--m-color-text-sub); margin-bottom: 8px;">lemon</p>
              <MDivider color="lemon" />
            </div>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
