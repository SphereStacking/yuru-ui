<script setup lang="ts">
import YRProvider from './provider/YRProvider.vue'
import YRButton from './ui/YRButton.vue'
import YRCard from './ui/YRCard.vue'
import YRBadge from './ui/YRBadge.vue'
import YRTag from './ui/YRTag.vue'
import YRAvatar from './ui/YRAvatar.vue'
import YRDivider from './ui/YRDivider.vue'
import YRInput from './ui/YRInput.vue'
import YRSwitch from './ui/YRSwitch.vue'
import YRProgress from './ui/YRProgress.vue'
import YRAlert from './ui/YRAlert.vue'
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
      <div class="yr:p-8 yr:flex yr:flex-col yr:gap-8" style="max-width: 960px;">
        <!-- Hero -->
        <YRProvider theme="hoyo">
          <div class="yr:flex yr:flex-col yr:gap-3">
            <h1 style="font-size: 2.5rem; font-weight: 700; color: #3d5a44; line-height: 1.2;">
              yuru-ui
            </h1>
            <p style="font-size: 1.125rem; color: #6a8873; line-height: 1.8;">
              やわらかくて若い、自分用のデザインシステム。<br>
              Vue 3 + TypeScript + Tailwind CSS v4 + Histoire で構築。<br>
              2つのテーマで「形と質感」を切り替える。
            </p>

            <div class="yr:flex yr:flex-wrap yr:gap-2 yr:mt-2">
              <YRBadge variant="primary">Vue 3</YRBadge>
              <YRBadge variant="secondary">TypeScript</YRBadge>
              <YRBadge variant="tertiary">Tailwind v4</YRBadge>
              <YRBadge variant="mint">Histoire</YRBadge>
              <YRBadge variant="peach">Vite</YRBadge>
            </div>
          </div>

          <YRDivider color="mint" class="yr:my-6" />
        </YRProvider>

        <!-- 2 Themes -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            2 Themes
          </h2>
          <div class="yr:grid yr:grid-cols-2 yr:gap-5">
            <div v-for="theme in themes" :key="theme">
              <YRProvider :theme="theme">
                <YRCard>
                  <div class="yr:flex yr:flex-col yr:gap-3">
                    <div class="yr:flex yr:items-baseline yr:gap-2">
                      <span style="font-size: 1.25rem; font-weight: var(--yr-font-weight-heading);">
                        {{ themeLabels[theme] }}
                      </span>
                      <span class="yr:text-xs" style="color: var(--color-gray-400);">
                        {{ theme }}
                      </span>
                    </div>
                    <p class="yr:text-sm" style="color: var(--color-gray-500); line-height: 1.6;">
                      {{ themeDescriptions[theme] }}
                    </p>

                    <div class="yr:flex yr:flex-wrap yr:gap-2">
                      <YRButton size="sm">primary</YRButton>
                      <YRButton size="sm" variant="secondary">secondary</YRButton>
                      <YRButton size="sm" variant="outline">outline</YRButton>
                    </div>

                    <div class="yr:flex yr:items-center yr:gap-3">
                      <YRAvatar size="sm" />
                      <YRSwitch v-model="switchValues[theme]" />
                      <YRTag color="mint">tag</YRTag>
                      <YRTag color="pink">tag</YRTag>
                    </div>

                    <YRProgress :value="65" color="primary" size="sm" />
                  </div>
                </YRCard>
              </YRProvider>
            </div>
          </div>
        </div>

        <!-- Color Palette -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            Color Palette
          </h2>
          <div class="yr:flex yr:flex-col yr:gap-4">
            <div v-for="cs in colorScales" :key="cs.name">
              <p class="yr:text-sm yr:mb-2" style="color: #6a8873; font-weight: 500;">
                {{ cs.name }}
              </p>
              <div class="yr:flex yr:gap-0">
                <div
                  v-for="swatch in cs.scale"
                  :key="swatch.step"
                  class="yr:flex-1 yr:flex yr:flex-col yr:items-center yr:justify-end"
                  :style="{
                    backgroundColor: swatch.hex,
                    height: '64px',
                    borderRadius: swatch.step === '50' ? '8px 0 0 8px'
                      : swatch.step === '900' ? '0 8px 8px 0' : '0',
                  }"
                >
                  <span
                    class="yr:text-xs"
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
          <YRProvider theme="hoyo">
            <div class="yr:flex yr:flex-col yr:gap-3">
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRBadge variant="mint">mint</YRBadge>
                <YRBadge variant="pink">pink</YRBadge>
                <YRBadge variant="lavender">lavender</YRBadge>
                <YRBadge variant="peach">peach</YRBadge>
                <YRBadge variant="sky">sky</YRBadge>
                <YRBadge variant="lemon">lemon</YRBadge>
              </div>
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRBadge variant="success">success</YRBadge>
                <YRBadge variant="warning">warning</YRBadge>
                <YRBadge variant="error">error</YRBadge>
                <YRBadge variant="info">info</YRBadge>
              </div>
            </div>
          </YRProvider>
        </div>

        <!-- Components -->
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 16px;">
            Components ({{ 22 }})
          </h2>
          <YRProvider theme="hoyo">
            <div class="yr:grid yr:grid-cols-2 yr:gap-3" style="max-width: 640px;">
              <YRCard v-for="group in [
                { name: 'Layout', items: ['YRContainer', 'YRStack', 'YRGrid', 'YRNavbar'] },
                { name: 'General', items: ['YRButton', 'YRCard', 'YRBadge', 'YRAvatar', 'YRDivider', 'YRTag', 'YRBreadcrumb'] },
                { name: 'Form', items: ['YRInput', 'YRTextarea', 'YRSwitch', 'YRCheckbox', 'YRSelect'] },
                { name: 'Feedback', items: ['YRAlert', 'YRToast', 'YRProgress', 'YRSkeleton'] },
                { name: 'Overlay', items: ['YRModal', 'YRDropdown', 'YRTooltip'] },
                { name: 'Navigation', items: ['YRTabs'] },
              ]" :key="group.name">
                <p style="font-weight: var(--yr-font-weight-heading); font-size: 0.875rem; margin-bottom: 6px; color: #3d5a44;">
                  {{ group.name }}
                </p>
                <div class="yr:flex yr:flex-wrap yr:gap-1">
                  <YRTag
                    v-for="item in group.items"
                    :key="item"
                    color="mint"
                  >
                    {{ item }}
                  </YRTag>
                </div>
              </YRCard>
            </div>
          </YRProvider>
        </div>
      </div>
    </Variant>

    <!-- Dark Mode Comparison -->
    <Variant title="Dark Mode">
      <div class="yr:p-8 yr:flex yr:flex-col yr:gap-6" style="max-width: 960px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; color: #3d5a44; margin-bottom: 8px;">
          Light / Dark Comparison
        </h2>
        <div v-for="theme in themes" :key="theme" class="yr:flex yr:gap-4">
          <!-- Light -->
          <div class="yr:flex-1">
            <YRProvider :theme="theme">
              <div class="yr:p-4 yr:bg-gray-50 yr:rounded-lg">
                <p class="yr:text-xs yr:mb-2" style="color: #8baa94;">
                  {{ themeLabels[theme] }} — light
                </p>
                <YRCard>
                  <div class="yr:flex yr:items-center yr:gap-3">
                    <YRAvatar size="sm" />
                    <div class="yr:flex-1">
                      <p style="font-weight: var(--yr-font-weight-heading); font-size: 0.875rem;">
                        Sample Card
                      </p>
                      <p class="yr:text-xs" style="color: var(--color-gray-500);">
                        Light mode
                      </p>
                    </div>
                    <YRButton size="sm">OK</YRButton>
                  </div>
                </YRCard>
                <div class="yr:flex yr:gap-2 yr:mt-3">
                  <YRBadge variant="primary">primary</YRBadge>
                  <YRBadge variant="secondary">secondary</YRBadge>
                  <YRBadge variant="tertiary">tertiary</YRBadge>
                </div>
              </div>
            </YRProvider>
          </div>
          <!-- Dark -->
          <div class="yr:flex-1 yr-dark">
            <YRProvider :theme="theme">
              <div class="yr:p-4 yr:bg-gray-900 yr:rounded-lg">
                <p class="yr:text-xs yr:mb-2" style="color: #7aaa86;">
                  {{ themeLabels[theme] }} — dark
                </p>
                <YRCard>
                  <div class="yr:flex yr:items-center yr:gap-3">
                    <YRAvatar size="sm" />
                    <div class="yr:flex-1">
                      <p style="font-weight: var(--yr-font-weight-heading); font-size: 0.875rem;">
                        Sample Card
                      </p>
                      <p class="yr:text-xs" style="color: var(--color-gray-500);">
                        Dark mode
                      </p>
                    </div>
                    <YRButton size="sm">OK</YRButton>
                  </div>
                </YRCard>
                <div class="yr:flex yr:gap-2 yr:mt-3">
                  <YRBadge variant="primary">primary</YRBadge>
                  <YRBadge variant="secondary">secondary</YRBadge>
                  <YRBadge variant="tertiary">tertiary</YRBadge>
                </div>
              </div>
            </YRProvider>
          </div>
        </div>
      </div>
    </Variant>

    <!-- Color Tokens Detail -->
    <Variant title="Color Tokens">
      <div class="yr:p-8 yr:flex yr:flex-col yr:gap-6" style="max-width: 960px;">
        <div v-for="cs in colorScales" :key="cs.name">
          <h3 style="font-weight: 600; font-size: 1rem; color: #3d5a44; margin-bottom: 12px;">
            {{ cs.name }}
          </h3>
          <div class="yr:grid yr:grid-cols-5 yr:gap-2">
            <div
              v-for="swatch in cs.scale"
              :key="swatch.step"
              class="yr:flex yr:flex-col yr:items-center yr:gap-1"
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
          <div class="yr:grid yr:grid-cols-6 yr:gap-3">
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
              class="yr:flex yr:flex-col yr:items-center yr:gap-1"
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
          <YRProvider theme="hoyo">
            <div class="yr:flex yr:flex-col yr:gap-2" style="max-width: 480px;">
              <YRAlert variant="success">Success message</YRAlert>
              <YRAlert variant="warning">Warning message</YRAlert>
              <YRAlert variant="error">Error message</YRAlert>
              <YRAlert variant="info">Info message</YRAlert>
            </div>
          </YRProvider>
        </div>
      </div>
    </Variant>
  </Story>
</template>
