<script setup lang="ts">
import { ref } from 'vue'
import YRProvider from './YRProvider.vue'
import YRButton from '../ui/YRButton.vue'
import YRCard from '../ui/YRCard.vue'
import YRDivider from '../ui/YRDivider.vue'
import YRBadge from '../ui/YRBadge.vue'
import YRTag from '../ui/YRTag.vue'
import YRInput from '../ui/YRInput.vue'
import YRAvatar from '../ui/YRAvatar.vue'
import YRSwitch from '../ui/YRSwitch.vue'
import YRCheckbox from '../ui/YRCheckbox.vue'
import YRProgress from '../ui/YRProgress.vue'
import YRAlert from '../ui/YRAlert.vue'
import YRTextarea from '../ui/YRTextarea.vue'

const themes = ['hoyo', 'pishi'] as const

const themeLabels: Record<string, string> = {
  hoyo: 'ほよ',
  pishi: 'ぴし',
}
const themeDescriptions: Record<string, string> = {
  hoyo: 'ゆるくて若い。ゆらぎのある有機的な形。',
  pishi: 'かちっと整った。すっきりきりっ。',
}
const themeDetails: Record<string, string[]> = {
  hoyo: ['非対称角丸', 'wobbly-subtle フィルター', 'なみなみ Divider', 'ふわっとシャドウ'],
  pishi: ['均一角丸 14px', 'フィルターなし', '直線 Divider', 'くっきりシャドウ'],
}

const switchValues = ref<Record<string, boolean>>({
  hoyo: true, pishi: false,
})
const checkValues = ref<Record<string, boolean>>({
  hoyo: true, pishi: true,
})
</script>

<template>
  <Story title="Theme/YRProvider" icon="mingcute:palette-line">
    <!-- All themes comparison -->
    <Variant title="テーマ比較">
      <div class="yr:p-6 yr:flex yr:flex-col yr:gap-0" style="max-width: 800px;">
        <div
          v-for="theme in themes"
          :key="theme"
          class="yr:py-6"
          :style="theme !== 'hoyo' ? 'border-top: 1px solid #d2f0da' : ''"
        >
          <YRProvider :theme="theme">
            <div class="yr:flex yr:flex-col yr:gap-4">
              <!-- Header -->
              <div class="yr:flex yr:items-baseline yr:gap-3">
                <span :style="{
                  fontWeight: 'var(--yr-font-weight-heading)',
                  fontSize: '1.5rem',
                  letterSpacing: 'var(--yr-letter-spacing, 0)',
                }">
                  {{ themeLabels[theme] }}
                </span>
                <span class="yr:text-sm" style="color: var(--color-gray-400);">
                  {{ theme }}
                </span>
                <span class="yr:text-sm" style="color: var(--color-gray-500); font-style: italic;">
                  — {{ themeDescriptions[theme] }}
                </span>
              </div>

              <!-- Feature tags -->
              <div class="yr:flex yr:flex-wrap yr:gap-1">
                <YRTag
                  v-for="detail in themeDetails[theme]"
                  :key="detail"
                  color="lavender"
                >
                  {{ detail }}
                </YRTag>
              </div>

              <!-- Buttons -->
              <div class="yr:flex yr:flex-wrap yr:gap-2">
                <YRButton>primary</YRButton>
                <YRButton variant="secondary">secondary</YRButton>
                <YRButton variant="tertiary">tertiary</YRButton>
                <YRButton variant="outline">outline</YRButton>
                <YRButton variant="ghost">ghost</YRButton>
              </div>

              <!-- Badges -->
              <div class="yr:flex yr:flex-wrap yr:gap-1">
                <YRBadge variant="primary">primary</YRBadge>
                <YRBadge variant="secondary">secondary</YRBadge>
                <YRBadge variant="tertiary">tertiary</YRBadge>
                <YRBadge variant="mint">mint</YRBadge>
                <YRBadge variant="pink">pink</YRBadge>
                <YRBadge variant="sky">sky</YRBadge>
                <YRBadge variant="success">ok</YRBadge>
              </div>

              <!-- Form elements + Card -->
              <div class="yr:flex yr:gap-4 yr:items-start">
                <div class="yr:flex yr:flex-col yr:gap-3 yr:flex-1" style="max-width: 300px;">
                  <YRInput placeholder="テキストを入力..." />
                  <div class="yr:flex yr:items-center yr:gap-4">
                    <YRSwitch v-model="switchValues[theme]" />
                    <YRCheckbox v-model="checkValues[theme]">チェック</YRCheckbox>
                  </div>
                  <YRProgress :value="65" color="primary" size="sm" />
                </div>
                <div class="yr:flex-1">
                  <YRCard>
                    <div class="yr:flex yr:items-center yr:gap-3">
                      <YRAvatar />
                      <div>
                        <p :style="{
                          fontWeight: 'var(--yr-font-weight-heading)',
                          fontSize: '0.875rem',
                        }">
                          サンプルカード
                        </p>
                        <p class="yr:text-xs" style="color: var(--color-gray-500);">
                          影と角丸とフィルターの違い
                        </p>
                      </div>
                    </div>
                  </YRCard>
                </div>
              </div>

              <YRDivider color="mint" />
            </div>
          </YRProvider>
        </div>
      </div>
    </Variant>

    <!-- Individual theme variants -->
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <YRProvider :theme="theme">
        <div
          class="yr:p-6 yr:flex yr:flex-col yr:gap-5 yr:bg-gray-50 yr:dark:bg-gray-900"
          style="max-width: 560px;"
        >

            <!-- Theme header -->
            <div>
              <h3 :style="{
                fontWeight: 'var(--yr-font-weight-heading)',
                fontSize: '1.25rem',
                letterSpacing: 'var(--yr-letter-spacing, 0)',
                marginBottom: '4px',
              }">
                {{ themeLabels[theme] }}テーマ
              </h3>
              <p class="yr:text-sm" style="color: var(--color-gray-500);">
                {{ themeDescriptions[theme] }}
              </p>
            </div>

            <!-- Feature tags -->
            <div class="yr:flex yr:flex-wrap yr:gap-1">
              <YRTag
                v-for="detail in themeDetails[theme]"
                :key="detail"
                color="mint"
              >
                {{ detail }}
              </YRTag>
            </div>

            <!-- Card with avatar -->
            <YRCard>
              <div class="yr:flex yr:items-start yr:gap-3">
                <YRAvatar />
                <div class="yr:flex-1">
                  <p :style="{
                    fontWeight: 'var(--yr-font-weight-heading)',
                    marginBottom: '4px',
                  }">
                    プロフィールカード
                  </p>
                  <p class="yr:text-sm" style="color: var(--color-gray-500); line-height: 1.7;">
                    カードの影、角丸、ボーダー、フィルターがテーマごとに違います。
                  </p>
                  <div class="yr:flex yr:gap-1 yr:mt-2">
                    <YRBadge variant="mint">Vue</YRBadge>
                    <YRBadge variant="pink">Design</YRBadge>
                    <YRBadge variant="lavender">UI</YRBadge>
                  </div>
                </div>
              </div>
            </YRCard>

            <!-- Buttons -->
            <div>
              <p class="story-heading">Buttons</p>
              <div class="yr:flex yr:flex-wrap yr:gap-2 yr:mt-1">
                <YRButton size="sm">sm</YRButton>
                <YRButton>md</YRButton>
                <YRButton size="lg">lg</YRButton>
              </div>
              <div class="yr:flex yr:flex-wrap yr:gap-2 yr:mt-2">
                <YRButton variant="secondary">secondary</YRButton>
                <YRButton variant="tertiary">tertiary</YRButton>
                <YRButton variant="outline">outline</YRButton>
                <YRButton variant="ghost">ghost</YRButton>
              </div>
            </div>

            <!-- Form -->
            <div>
              <p class="story-heading">Form</p>
              <div class="yr:flex yr:flex-col yr:gap-3 yr:mt-1">
                <YRInput placeholder="テキスト入力..." />
                <YRTextarea placeholder="テキストエリア..." :rows="2" />
                <div class="yr:flex yr:items-center yr:gap-4">
                  <YRSwitch v-model="switchValues[theme]" />
                  <YRCheckbox v-model="checkValues[theme]">オプション</YRCheckbox>
                </div>
              </div>
            </div>

            <!-- Progress -->
            <div>
              <p class="story-heading">Progress</p>
              <div class="yr:flex yr:flex-col yr:gap-2 yr:mt-1">
                <YRProgress :value="75" color="primary" />
                <YRProgress :value="50" color="secondary" />
                <YRProgress :value="30" color="tertiary" />
              </div>
            </div>

            <YRDivider />

            <!-- Alert -->
            <YRAlert variant="info">
              これは {{ themeLabels[theme] }} テーマのプレビューです。
            </YRAlert>
        </div>
      </YRProvider>
    </Variant>
  </Story>
</template>
