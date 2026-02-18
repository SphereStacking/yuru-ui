<script setup lang="ts">
import { ref } from 'vue'
import MProvider from './MProvider.vue'
import MButton from '../ui/MButton.vue'
import MCard from '../ui/MCard.vue'
import MDivider from '../ui/MDivider.vue'
import MBadge from '../ui/MBadge.vue'
import MTag from '../ui/MTag.vue'
import MInput from '../ui/MInput.vue'
import MAvatar from '../ui/MAvatar.vue'
import MSwitch from '../ui/MSwitch.vue'
import MCheckbox from '../ui/MCheckbox.vue'
import MProgress from '../ui/MProgress.vue'
import MAlert from '../ui/MAlert.vue'
import MTextarea from '../ui/MTextarea.vue'

const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const

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
  <Story title="Theme/MProvider" icon="mingcute:palette-line">
    <!-- All themes comparison -->
    <Variant title="テーマ比較">
      <div class="mru:p-6 mru:flex mru:flex-col mru:gap-0" style="max-width: 800px;">
        <div
          v-for="theme in themes"
          :key="theme"
          class="mru:py-6"
          :style="theme !== 'hoyo' ? 'border-top: 1px solid #d2f0da' : ''"
        >
          <MProvider :theme="theme">
            <div class="mru:flex mru:flex-col mru:gap-4">
              <!-- Header -->
              <div class="mru:flex mru:items-baseline mru:gap-3">
                <span :style="{
                  fontWeight: 'var(--m-font-weight-heading)',
                  fontSize: '1.5rem',
                  letterSpacing: 'var(--m-letter-spacing, 0)',
                }">
                  {{ themeLabels[theme] }}
                </span>
                <span class="mru:text-sm" style="color: var(--color-gray-400);">
                  {{ theme }}
                </span>
                <span class="mru:text-sm" style="color: var(--color-gray-500); font-style: italic;">
                  — {{ themeDescriptions[theme] }}
                </span>
              </div>

              <!-- Feature tags -->
              <div class="mru:flex mru:flex-wrap mru:gap-1">
                <MTag
                  v-for="detail in themeDetails[theme]"
                  :key="detail"
                  color="lavender"
                >
                  {{ detail }}
                </MTag>
              </div>

              <!-- Buttons -->
              <div class="mru:flex mru:flex-wrap mru:gap-2">
                <MButton>primary</MButton>
                <MButton variant="secondary">secondary</MButton>
                <MButton variant="tertiary">tertiary</MButton>
                <MButton variant="outline">outline</MButton>
                <MButton variant="ghost">ghost</MButton>
              </div>

              <!-- Badges -->
              <div class="mru:flex mru:flex-wrap mru:gap-1">
                <MBadge variant="primary">primary</MBadge>
                <MBadge variant="secondary">secondary</MBadge>
                <MBadge variant="tertiary">tertiary</MBadge>
                <MBadge variant="mint">mint</MBadge>
                <MBadge variant="pink">pink</MBadge>
                <MBadge variant="sky">sky</MBadge>
                <MBadge variant="success">ok</MBadge>
              </div>

              <!-- Form elements + Card -->
              <div class="mru:flex mru:gap-4 mru:items-start">
                <div class="mru:flex mru:flex-col mru:gap-3 mru:flex-1" style="max-width: 300px;">
                  <MInput placeholder="テキストを入力..." />
                  <div class="mru:flex mru:items-center mru:gap-4">
                    <MSwitch v-model="switchValues[theme]" />
                    <MCheckbox v-model="checkValues[theme]">チェック</MCheckbox>
                  </div>
                  <MProgress :value="65" color="primary" size="sm" />
                </div>
                <div class="mru:flex-1">
                  <MCard>
                    <div class="mru:flex mru:items-center mru:gap-3">
                      <MAvatar />
                      <div>
                        <p :style="{
                          fontWeight: 'var(--m-font-weight-heading)',
                          fontSize: '0.875rem',
                        }">
                          サンプルカード
                        </p>
                        <p class="mru:text-xs" style="color: var(--color-gray-500);">
                          影と角丸とフィルターの違い
                        </p>
                      </div>
                    </div>
                  </MCard>
                </div>
              </div>

              <MDivider color="mint" />
            </div>
          </MProvider>
        </div>
      </div>
    </Variant>

    <!-- Individual theme variants with light/dark -->
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div
            class="mru:p-6 mru:flex mru:flex-col mru:gap-5"
            :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'"
            style="max-width: 560px;"
          >
            <p class="story-heading">{{ mode }}</p>

            <!-- Theme header -->
            <div>
              <h3 :style="{
                fontWeight: 'var(--m-font-weight-heading)',
                fontSize: '1.25rem',
                letterSpacing: 'var(--m-letter-spacing, 0)',
                marginBottom: '4px',
              }">
                {{ themeLabels[theme] }}テーマ
              </h3>
              <p class="mru:text-sm" style="color: var(--color-gray-500);">
                {{ themeDescriptions[theme] }}
              </p>
            </div>

            <!-- Feature tags -->
            <div class="mru:flex mru:flex-wrap mru:gap-1">
              <MTag
                v-for="detail in themeDetails[theme]"
                :key="detail"
                color="mint"
              >
                {{ detail }}
              </MTag>
            </div>

            <!-- Card with avatar -->
            <MCard>
              <div class="mru:flex mru:items-start mru:gap-3">
                <MAvatar />
                <div class="mru:flex-1">
                  <p :style="{
                    fontWeight: 'var(--m-font-weight-heading)',
                    marginBottom: '4px',
                  }">
                    プロフィールカード
                  </p>
                  <p class="mru:text-sm" style="color: var(--color-gray-500); line-height: 1.7;">
                    カードの影、角丸、ボーダー、フィルターがテーマごとに違います。
                  </p>
                  <div class="mru:flex mru:gap-1 mru:mt-2">
                    <MBadge variant="mint">Vue</MBadge>
                    <MBadge variant="pink">Design</MBadge>
                    <MBadge variant="lavender">UI</MBadge>
                  </div>
                </div>
              </div>
            </MCard>

            <!-- Buttons -->
            <div>
              <p class="story-heading">Buttons</p>
              <div class="mru:flex mru:flex-wrap mru:gap-2 mru:mt-1">
                <MButton size="sm">sm</MButton>
                <MButton>md</MButton>
                <MButton size="lg">lg</MButton>
              </div>
              <div class="mru:flex mru:flex-wrap mru:gap-2 mru:mt-2">
                <MButton variant="secondary">secondary</MButton>
                <MButton variant="tertiary">tertiary</MButton>
                <MButton variant="outline">outline</MButton>
                <MButton variant="ghost">ghost</MButton>
              </div>
            </div>

            <!-- Form -->
            <div>
              <p class="story-heading">Form</p>
              <div class="mru:flex mru:flex-col mru:gap-3 mru:mt-1">
                <MInput placeholder="テキスト入力..." />
                <MTextarea placeholder="テキストエリア..." :rows="2" />
                <div class="mru:flex mru:items-center mru:gap-4">
                  <MSwitch v-model="switchValues[theme]" />
                  <MCheckbox v-model="checkValues[theme]">オプション</MCheckbox>
                </div>
              </div>
            </div>

            <!-- Progress -->
            <div>
              <p class="story-heading">Progress</p>
              <div class="mru:flex mru:flex-col mru:gap-2 mru:mt-1">
                <MProgress :value="75" color="primary" />
                <MProgress :value="50" color="secondary" />
                <MProgress :value="30" color="tertiary" />
              </div>
            </div>

            <MDivider />

            <!-- Alert -->
            <MAlert variant="info">
              これは {{ themeLabels[theme] }} テーマのプレビューです。
            </MAlert>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
