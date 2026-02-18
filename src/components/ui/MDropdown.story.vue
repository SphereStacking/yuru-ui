<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MDropdown from './MDropdown.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="Overlay/MDropdown" :layout="{ type: 'single', iframe: true }">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:px-30 mru:py-10 mru:flex mru:gap-8"
               :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
               style="position: relative;">
            <p class="story-heading" style="position: absolute; top: 8px; left: 16px;">{{ mode }}</p>
            <MDropdown>
              <template #trigger>
                <MButton>Menu</MButton>
              </template>
              <div style="padding: 4px 0;">
                <button class="m-dropdown-item">Profile</button>
                <button class="m-dropdown-item">Settings</button>
                <button class="m-dropdown-item">Logout</button>
              </div>
            </MDropdown>
            <MDropdown align="right">
              <template #trigger>
                <MButton variant="outline">Right align</MButton>
              </template>
              <div style="padding: 4px 0;">
                <button class="m-dropdown-item">Option A</button>
                <button class="m-dropdown-item">Option B</button>
                <button class="m-dropdown-item">Option C</button>
              </div>
            </MDropdown>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>

<style>
.m-dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  color: inherit;
  font-family: inherit;
}
.m-dropdown-item:hover {
  background: var(--color-gray-100);
}
</style>
