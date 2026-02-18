<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MStack from './MStack.vue'
</script>

<template>
  <Story title="Layout/MStack">
    <Variant title="hoyo - vertical">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg);">
          <MStack>
            <div
              v-for="i in 3"
              :key="i"
              style="
                background: var(--m-color-primary-100);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-md);
                filter: var(--m-filter-default);
              "
            >
              アイテム {{ i }}
            </div>
          </MStack>
        </div>
      </MProvider>
    </Variant>

    <Variant title="hoyo - horizontal">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg);">
          <MStack direction="horizontal" align="center">
            <div
              v-for="i in 3"
              :key="i"
              style="
                background: var(--m-color-accent-pink);
                color: var(--m-color-accent-pink-text);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-md) var(--m-space-lg);
                filter: var(--m-filter-default);
              "
            >
              アイテム {{ i }}
            </div>
          </MStack>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi - vertical">
      <MProvider theme="pishi">
        <div style="padding: var(--m-space-lg);">
          <MStack>
            <div
              v-for="i in 3"
              :key="i"
              style="
                background: var(--m-color-primary-100);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-md);
                filter: var(--m-filter-default);
              "
            >
              アイテム {{ i }}
            </div>
          </MStack>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi - horizontal">
      <MProvider theme="pishi">
        <div style="padding: var(--m-space-lg);">
          <MStack direction="horizontal" align="center">
            <div
              v-for="i in 3"
              :key="i"
              style="
                background: var(--m-color-accent-lavender);
                color: var(--m-color-accent-lavender-text);
                border-radius: var(--m-radius-default);
                padding: var(--m-space-md) var(--m-space-lg);
                filter: var(--m-filter-default);
              "
            >
              アイテム {{ i }}
            </div>
          </MStack>
        </div>
      </MProvider>
    </Variant>

    <Variant title="align バリエーション">
      <MProvider theme="hoyo">
        <div style="padding: var(--m-space-lg); display: flex; flex-direction: column; gap: var(--m-space-xl);">
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">align: start</p>
            <MStack direction="horizontal" align="start" gap="var(--m-space-sm)">
              <div style="background: var(--m-color-accent-mint); border-radius: var(--m-radius-default); padding: var(--m-space-sm) var(--m-space-md); filter: var(--m-filter-default);">
                小さい
              </div>
              <div style="background: var(--m-color-accent-mint); border-radius: var(--m-radius-default); padding: var(--m-space-lg) var(--m-space-md); filter: var(--m-filter-default);">
                大きい
              </div>
            </MStack>
          </div>
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">align: center</p>
            <MStack direction="horizontal" align="center" gap="var(--m-space-sm)">
              <div style="background: var(--m-color-accent-pink); color: var(--m-color-accent-pink-text); border-radius: var(--m-radius-default); padding: var(--m-space-sm) var(--m-space-md); filter: var(--m-filter-default);">
                小さい
              </div>
              <div style="background: var(--m-color-accent-pink); color: var(--m-color-accent-pink-text); border-radius: var(--m-radius-default); padding: var(--m-space-lg) var(--m-space-md); filter: var(--m-filter-default);">
                大きい
              </div>
            </MStack>
          </div>
          <div>
            <p style="font-weight: var(--m-font-weight-heading); margin-bottom: var(--m-space-xs);">align: end</p>
            <MStack direction="horizontal" align="end" gap="var(--m-space-sm)">
              <div style="background: var(--m-color-accent-lavender); color: var(--m-color-accent-lavender-text); border-radius: var(--m-radius-default); padding: var(--m-space-sm) var(--m-space-md); filter: var(--m-filter-default);">
                小さい
              </div>
              <div style="background: var(--m-color-accent-lavender); color: var(--m-color-accent-lavender-text); border-radius: var(--m-radius-default); padding: var(--m-space-lg) var(--m-space-md); filter: var(--m-filter-default);">
                大きい
              </div>
            </MStack>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
