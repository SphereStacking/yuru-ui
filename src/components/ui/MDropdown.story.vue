<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MDropdown from './MDropdown.vue'
</script>

<template>
  <Story title="UI/MDropdown">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 40px 120px; display: flex; gap: 32px;">
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
  background: var(--m-color-gray-100);
}
</style>
