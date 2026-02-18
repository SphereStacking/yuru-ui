<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MBadge from './MBadge.vue'
</script>

<template>
  <Story title="UI/MBadge">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            アクセントカラー
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MBadge variant="mint">mint</MBadge>
            <MBadge variant="pink">pink</MBadge>
            <MBadge variant="lavender">lavender</MBadge>
            <MBadge variant="peach">peach</MBadge>
            <MBadge variant="sky">sky</MBadge>
            <MBadge variant="lemon">lemon</MBadge>
          </div>
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            セマンティックカラー
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MBadge variant="success">success</MBadge>
            <MBadge variant="warning">warning</MBadge>
            <MBadge variant="error">error</MBadge>
            <MBadge variant="info">info</MBadge>
          </div>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            アクセントカラー
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MBadge variant="mint">mint</MBadge>
            <MBadge variant="pink">pink</MBadge>
            <MBadge variant="lavender">lavender</MBadge>
            <MBadge variant="peach">peach</MBadge>
            <MBadge variant="sky">sky</MBadge>
            <MBadge variant="lemon">lemon</MBadge>
          </div>
          <h3 style="font-weight: var(--m-font-weight-heading); font-size: 1.125rem;">
            セマンティックカラー
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MBadge variant="success">success</MBadge>
            <MBadge variant="warning">warning</MBadge>
            <MBadge variant="error">error</MBadge>
            <MBadge variant="info">info</MBadge>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
