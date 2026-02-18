<script setup lang="ts">
import MProvider from './provider/MProvider.vue'
import MButton from './ui/MButton.vue'
import MCard from './ui/MCard.vue'
import MBadge from './ui/MBadge.vue'
import MTag from './ui/MTag.vue'
import MAvatar from './ui/MAvatar.vue'
import MDivider from './ui/MDivider.vue'
import MInput from './ui/MInput.vue'
import MSwitch from './ui/MSwitch.vue'
import MProgress from './ui/MProgress.vue'
import MAlert from './ui/MAlert.vue'
import { ref } from 'vue'

const themes = ['hoyo', 'pishi'] as const

const themeLabels: Record<string, string> = {
  hoyo: 'ほよ',
  pishi: 'ぴし',
}
const themeDescriptions: Record<string, string> = {
  hoyo: 'ゆるくて若い。ゆらぎのある有機的な形。',
  pishi: 'かちっと整った。すっきりきりっ。',
}
const themeEmoji: Record<string, string> = {
  hoyo: '',
  pishi: '',
}

const switchValues = ref<Record<string, boolean>>({
  hoyo: true, pishi: false,
})

const primaryScale = [
  { step: '50', hex: '#edfff2' }, { step: '100', hex: '#ddffe7' },
  { step: '200', hex: '#b0ffc4' }, { step: '300', hex: '#80efa2' },
  { step: '400', hex: '#55d47a' }, { step: '500', hex: '#38b45c' },
  { step: '600', hex: '#2a9048' }, { step: '700', hex: '#4a9960' },
  { step: '800', hex: '#1a6530' }, { step: '900', hex: '#0e3a1c' },
]
const secondaryScale = [
  { step: '50', hex: '#fff5f9' }, { step: '100', hex: '#ffe8f2' },
  { step: '200', hex: '#ffd4e8' }, { step: '300', hex: '#ffaad0' },
  { step: '400', hex: '#e87aaa' }, { step: '500', hex: '#e06090' },
  { step: '600', hex: '#c04878' }, { step: '700', hex: '#995577' },
  { step: '800', hex: '#6a2848' }, { step: '900', hex: '#401828' },
]
const tertiaryScale = [
  { step: '50', hex: '#f8f5ff' }, { step: '100', hex: '#f0e8ff' },
  { step: '200', hex: '#e0d4ff' }, { step: '300', hex: '#c8aaff' },
  { step: '400', hex: '#aa88ee' }, { step: '500', hex: '#8866cc' },
  { step: '600', hex: '#7050b0' }, { step: '700', hex: '#665599' },
  { step: '800', hex: '#3d2870' }, { step: '900', hex: '#281840' },
]

const colorScales = [
  { name: 'Primary (Mint)', scale: primaryScale },
  { name: 'Secondary (Pink)', scale: secondaryScale },
  { name: 'Tertiary (Lavender)', scale: tertiaryScale },
]
</script>

<template>
  <Story
    title="Introduction"
    group="top"
    icon="carbon:bookmark"
  >
    <!-- Overview -->
    <Variant title="Overview">
      <div class="mru:p-8 mru:flex mru:flex-col mru:gap-8" style="max-width: 960px;">
        <!-- Hero -->
        <MProvider theme="hoyo">
          <div class="mru:flex mru:flex-col mru:gap-3">
            <h1 style="font-size: 2.5rem; font-weight: 700; color: #3d5a44; line-height: 1.2;">
              maru-ui
            </h1>
            <p style="font-size: 1.125rem; color: #6a8873; line-height: 1.8;">
              やわらかくて若い、自分用のデザインシステム。<br>
              Vue 3 + TypeScript + Tailwind CSS v4 + Histoire で構築。<br>
              2つのテーマで「形と質感」を切り替える。
            </p>

            <div class="mru:flex mru:flex-wrap mru:gap-2 mru:mt-2">
              <MBadge variant="primary">Vue 3</MBadge>
              <MBadge variant="secondary">TypeScript</MBadge>
              <MBadge variant="tertiary">Tailwind v4</MBadge>
              <MBadge variant="mint">Histoire</MBadge>
              <MBadge variant="peach">Vite</MBadge>
            </div>
          </div>

          <MDivider color="mint" class="mru:my-6" />
        </MProvider>

        <!-- 2 Themes -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            2 Themes
          </h2>
          <div class="mru:grid mru:grid-cols-2 mru:gap-5">
            <div v-for="theme in themes" :key="theme">
              <MProvider :theme="theme">
                <MCard>
                  <div class="mru:flex mru:flex-col mru:gap-3">
                    <div class="mru:flex mru:items-baseline mru:gap-2">
                      <span style="font-size: 1.25rem; font-weight: var(--m-font-weight-heading);">
                        {{ themeLabels[theme] }}
                      </span>
                      <span class="mru:text-xs" style="color: var(--color-gray-400);">
                        {{ theme }}
                      </span>
                    </div>
                    <p class="mru:text-sm" style="color: var(--color-gray-500); line-height: 1.6;">
                      {{ themeDescriptions[theme] }}
                    </p>

                    <div class="mru:flex mru:flex-wrap mru:gap-2">
                      <MButton size="sm">primary</MButton>
                      <MButton size="sm" variant="secondary">secondary</MButton>
                      <MButton size="sm" variant="outline">outline</MButton>
                    </div>

                    <div class="mru:flex mru:items-center mru:gap-3">
                      <MAvatar size="sm" />
                      <MSwitch v-model="switchValues[theme]" />
                      <MTag color="mint">tag</MTag>
                      <MTag color="pink">tag</MTag>
                    </div>

                    <MProgress :value="65" color="primary" size="sm" />
                  </div>
                </MCard>
              </MProvider>
            </div>
          </div>
        </div>

        <!-- Color Palette -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            Color Palette
          </h2>
          <div class="mru:flex mru:flex-col mru:gap-4">
            <div v-for="cs in colorScales" :key="cs.name">
              <p class="mru:text-sm mru:mb-2" style="color: #6a8873; font-weight: 500;">
                {{ cs.name }}
              </p>
              <div class="mru:flex mru:gap-0">
                <div
                  v-for="swatch in cs.scale"
                  :key="swatch.step"
                  class="mru:flex-1 mru:flex mru:flex-col mru:items-center mru:justify-end"
                  :style="{
                    backgroundColor: swatch.hex,
                    height: '64px',
                    borderRadius: swatch.step === '50' ? '8px 0 0 8px'
                      : swatch.step === '900' ? '0 8px 8px 0' : '0',
                  }"
                >
                  <span
                    class="mru:text-xs"
                    :style="{
                      color: Number(swatch.step) >= 500 ? '#fff' : '#3d5a44',
                      paddingBottom: '4px',
                      fontSize: '0.625rem',
                    }"
                  >
                    {{ swatch.step }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accent + Semantic -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            Accent & Semantic Colors
          </h2>
          <MProvider theme="hoyo">
            <div class="mru:flex mru:flex-col mru:gap-3">
              <div class="mru:flex mru:flex-wrap mru:gap-2">
                <MBadge variant="mint">mint</MBadge>
                <MBadge variant="pink">pink</MBadge>
                <MBadge variant="lavender">lavender</MBadge>
                <MBadge variant="peach">peach</MBadge>
                <MBadge variant="sky">sky</MBadge>
                <MBadge variant="lemon">lemon</MBadge>
              </div>
              <div class="mru:flex mru:flex-wrap mru:gap-2">
                <MBadge variant="success">success</MBadge>
                <MBadge variant="warning">warning</MBadge>
                <MBadge variant="error">error</MBadge>
                <MBadge variant="info">info</MBadge>
              </div>
            </div>
          </MProvider>
        </div>

        <!-- Components -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            Components ({{ 22 }})
          </h2>
          <MProvider theme="hoyo">
            <div class="mru:grid mru:grid-cols-2 mru:gap-3" style="max-width: 640px;">
              <MCard v-for="group in [
                { name: 'Layout', items: ['MContainer', 'MStack', 'MGrid', 'MNavbar'] },
                { name: 'General', items: ['MButton', 'MCard', 'MBadge', 'MAvatar', 'MDivider', 'MTag', 'MBreadcrumb'] },
                { name: 'Form', items: ['MInput', 'MTextarea', 'MSwitch', 'MCheckbox', 'MSelect'] },
                { name: 'Feedback', items: ['MAlert', 'MToast', 'MProgress', 'MSkeleton'] },
                { name: 'Overlay', items: ['MModal', 'MDropdown', 'MTooltip'] },
                { name: 'Navigation', items: ['MTabs'] },
              ]" :key="group.name">
                <p style="font-weight: var(--m-font-weight-heading); font-size: 0.875rem; margin-bottom: 6px; color: #3d5a44;">
                  {{ group.name }}
                </p>
                <div class="mru:flex mru:flex-wrap mru:gap-1">
                  <MTag
                    v-for="item in group.items"
                    :key="item"
                    color="mint"
                  >
                    {{ item }}
                  </MTag>
                </div>
              </MCard>
            </div>
          </MProvider>
        </div>
      </div>
    </Variant>

    <!-- Dark Mode Comparison -->
    <Variant title="Dark Mode">
      <div class="mru:p-8 mru:flex mru:flex-col mru:gap-6" style="max-width: 960px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 8px;">
          Light / Dark Comparison
        </h2>
        <div v-for="theme in themes" :key="theme" class="mru:flex mru:gap-4">
          <!-- Light -->
          <div class="mru:flex-1">
            <MProvider :theme="theme">
              <div class="mru:p-4 mru:bg-gray-50 mru:rounded-lg">
                <p class="mru:text-xs mru:mb-2" style="color: #8baa94;">
                  {{ themeLabels[theme] }} — light
                </p>
                <MCard>
                  <div class="mru:flex mru:items-center mru:gap-3">
                    <MAvatar size="sm" />
                    <div class="mru:flex-1">
                      <p style="font-weight: var(--m-font-weight-heading); font-size: 0.875rem;">
                        Sample Card
                      </p>
                      <p class="mru:text-xs" style="color: var(--color-gray-500);">
                        Light mode
                      </p>
                    </div>
                    <MButton size="sm">OK</MButton>
                  </div>
                </MCard>
                <div class="mru:flex mru:gap-2 mru:mt-3">
                  <MBadge variant="primary">primary</MBadge>
                  <MBadge variant="secondary">secondary</MBadge>
                  <MBadge variant="tertiary">tertiary</MBadge>
                </div>
              </div>
            </MProvider>
          </div>
          <!-- Dark -->
          <div class="mru:flex-1 mru-dark">
            <MProvider :theme="theme">
              <div class="mru:p-4 mru:bg-gray-900 mru:rounded-lg">
                <p class="mru:text-xs mru:mb-2" style="color: #7aaa86;">
                  {{ themeLabels[theme] }} — dark
                </p>
                <MCard>
                  <div class="mru:flex mru:items-center mru:gap-3">
                    <MAvatar size="sm" />
                    <div class="mru:flex-1">
                      <p style="font-weight: var(--m-font-weight-heading); font-size: 0.875rem;">
                        Sample Card
                      </p>
                      <p class="mru:text-xs" style="color: var(--color-gray-500);">
                        Dark mode
                      </p>
                    </div>
                    <MButton size="sm">OK</MButton>
                  </div>
                </MCard>
                <div class="mru:flex mru:gap-2 mru:mt-3">
                  <MBadge variant="primary">primary</MBadge>
                  <MBadge variant="secondary">secondary</MBadge>
                  <MBadge variant="tertiary">tertiary</MBadge>
                </div>
              </div>
            </MProvider>
          </div>
        </div>
      </div>
    </Variant>

    <!-- Color Tokens Detail -->
    <Variant title="Color Tokens">
      <div class="mru:p-8 mru:flex mru:flex-col mru:gap-6" style="max-width: 960px;">
        <div v-for="cs in colorScales" :key="cs.name">
          <h3 style="font-weight: 600; font-size: 1rem; color: #3d5a44; margin-bottom: 12px;">
            {{ cs.name }}
          </h3>
          <div class="mru:grid mru:grid-cols-5 mru:gap-2">
            <div
              v-for="swatch in cs.scale"
              :key="swatch.step"
              class="mru:flex mru:flex-col mru:items-center mru:gap-1"
            >
              <div
                :style="{
                  backgroundColor: swatch.hex,
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  border: Number(swatch.step) <= 100 ? '1px solid #d2f0da' : 'none',
                }"
              />
              <span style="font-size: 0.6875rem; color: #6a8873; font-weight: 500;">
                {{ swatch.step }}
              </span>
              <span style="font-size: 0.625rem; color: #8baa94; font-family: monospace;">
                {{ swatch.hex }}
              </span>
            </div>
          </div>
        </div>

        <!-- Accent swatches -->
        <div>
          <h3 style="font-weight: 600; font-size: 1rem; color: #3d5a44; margin-bottom: 12px;">
            Accent Colors
          </h3>
          <div class="mru:grid mru:grid-cols-6 mru:gap-3">
            <div
              v-for="accent in [
                { name: 'mint', bg: '#b0ffc4', text: '#4a9960' },
                { name: 'pink', bg: '#ffd4e8', text: '#995577' },
                { name: 'lavender', bg: '#e0d4ff', text: '#665599' },
                { name: 'peach', bg: '#ffe4cc', text: '#886644' },
                { name: 'sky', bg: '#ccedff', text: '#446688' },
                { name: 'lemon', bg: '#fff6d5', text: '#887744' },
              ]"
              :key="accent.name"
              class="mru:flex mru:flex-col mru:items-center mru:gap-1"
            >
              <div
                :style="{
                  backgroundColor: accent.bg,
                  width: '100%',
                  height: '48px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }"
              >
                <span :style="{ color: accent.text, fontWeight: 500, fontSize: '0.75rem' }">
                  Aa
                </span>
              </div>
              <span style="font-size: 0.6875rem; color: #6a8873; font-weight: 500;">
                {{ accent.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Semantic swatches -->
        <div>
          <h3 style="font-weight: 600; font-size: 1rem; color: #3d5a44; margin-bottom: 12px;">
            Semantic Colors
          </h3>
          <MProvider theme="hoyo">
            <div class="mru:flex mru:flex-col mru:gap-2" style="max-width: 480px;">
              <MAlert variant="success">Success message</MAlert>
              <MAlert variant="warning">Warning message</MAlert>
              <MAlert variant="error">Error message</MAlert>
              <MAlert variant="info">Info message</MAlert>
            </div>
          </MProvider>
        </div>
      </div>
    </Variant>
  </Story>
</template>
