<script setup lang="ts">
import YRProvider from '../provider/YRProvider.vue'
import YRButton from './YRButton.vue'
import YRDropdown from './YRDropdown.vue'

const themes = ['hoyo', 'pishi'] as const
</script>

<template>
  <Story title="Overlay/YRDropdown" :layout="{ type: 'single', iframe: true }">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div class="yr:px-30 yr:py-10 yr:flex yr:gap-8 yr:bg-gray-50 yr:dark:bg-gray-900"
             style="position: relative;">
          <YRDropdown>
            <template #trigger>
              <YRButton>Menu</YRButton>
            </template>
            <div style="padding: 4px 0;">
              <button class="yr-dropdown-item">Profile</button>
              <button class="yr-dropdown-item">Settings</button>
              <button class="yr-dropdown-item">Logout</button>
            </div>
          </YRDropdown>
          <YRDropdown align="right">
            <template #trigger>
              <YRButton variant="outline">Right align</YRButton>
            </template>
            <div style="padding: 4px 0;">
              <button class="yr-dropdown-item">Option A</button>
              <button class="yr-dropdown-item">Option B</button>
              <button class="yr-dropdown-item">Option C</button>
            </div>
          </YRDropdown>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>

<style>
.yr-dropdown-item {
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
.yr-dropdown-item:hover {
  background: var(--color-gray-100);
}
.yr-dark .yr-dropdown-item:hover {
  background: var(--color-gray-800);
}
</style>
