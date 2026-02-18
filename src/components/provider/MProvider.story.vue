<script setup lang="ts">
import MProvider from './MProvider.vue'
import MButton from '../ui/MButton.vue'
import MCard from '../ui/MCard.vue'
import MDivider from '../ui/MDivider.vue'
import MBadge from '../ui/MBadge.vue'
import MInput from '../ui/MInput.vue'

const themes = ['hoyo', 'pishi', 'toge', 'moko', 'kira', 'nemu'] as const
const themeLabels: Record<string, string> = {
  hoyo: 'ほよ',
  pishi: 'ぴし',
  toge: 'とげ',
  moko: 'もこ',
  kira: 'きら',
  nemu: 'ねむ',
}
const themeDescriptions: Record<string, string> = {
  hoyo: 'ゆるくて若い。ゆらぎのある有機的な形。',
  pishi: 'かちっと整った。すっきりきりっ。',
  toge: 'シャープで力強い。ブルータリスト。',
  moko: 'もこもこ雲みたい。超やわらか。',
  kira: 'キラキラ華やか。グラデーション光沢。',
  nemu: 'まどろみの中。目に優しい夜向け。',
}
</script>

<template>
  <Story title="MProvider" icon="mingcute:palette-line">
    <Variant title="テーマ比較">
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 0;">
        <div
          v-for="theme in themes"
          :key="theme"
          style="padding: 32px 0;"
        >
          <MProvider :theme="theme">
            <div style="max-width: 640px;">
              <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px;">
                <h2 :style="{
                  fontWeight: 'var(--m-font-weight-display)',
                  fontSize: '1.5rem',
                  letterSpacing: 'var(--m-letter-spacing, 0)',
                  color: 'var(--m-color-gray-800)',
                }">
                  {{ themeLabels[theme] }}
                </h2>
                <span style="font-size: 0.875rem; color: var(--m-color-gray-500);">
                  {{ theme }}
                </span>
              </div>

              <p style="color: var(--m-color-gray-500); font-size: 0.875rem; margin-bottom: 20px; font-weight: var(--m-font-weight-body);">
                {{ themeDescriptions[theme] }}
              </p>

              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                <MButton color="mint">mint</MButton>
                <MButton color="pink">pink</MButton>
                <MButton color="lavender">lavender</MButton>
                <MButton variant="outline" color="sky">outline</MButton>
                <MButton variant="ghost" color="peach">ghost</MButton>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
                <MBadge variant="mint">new</MBadge>
                <MBadge variant="pink">popular</MBadge>
                <MBadge variant="lavender">beta</MBadge>
                <MBadge variant="success">ok</MBadge>
              </div>

              <div style="max-width: 300px; margin-bottom: 16px;">
                <MInput placeholder="テキストを入力..." />
              </div>

              <MDivider color="mint" />

              <div style="margin-top: 16px;">
                <MCard>
                  <p :style="{
                    color: 'var(--m-color-gray-600)',
                    lineHeight: '1.8',
                    fontWeight: 'var(--m-font-weight-body)',
                    letterSpacing: 'var(--m-letter-spacing, 0)',
                  }">
                    {{ themeLabels[theme] }}テーマのカードです。影、角丸、ボーダーの違いを見比べてみてください。
                  </p>
                </MCard>
              </div>
            </div>
          </MProvider>
        </div>
      </div>
    </Variant>

    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <MProvider :theme="theme">
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 20px; max-width: 480px;">
          <MCard>
            <h3 :style="{
              fontWeight: 'var(--m-font-weight-heading)',
              marginBottom: '8px',
              letterSpacing: 'var(--m-letter-spacing, 0)',
            }">
              {{ themeLabels[theme] }}テーマ
            </h3>
            <p style="color: var(--m-color-gray-600); line-height: 1.8; font-weight: var(--m-font-weight-body);">
              {{ themeDescriptions[theme] }}
            </p>
          </MCard>

          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <MButton color="mint" size="sm">sm</MButton>
            <MButton color="pink">md</MButton>
            <MButton color="lavender" size="lg">lg</MButton>
          </div>

          <MInput placeholder="入力してみて..." />

          <MDivider />

          <div style="display: flex; gap: 6px;">
            <MBadge variant="mint">new</MBadge>
            <MBadge variant="warning">pending</MBadge>
            <MBadge variant="error">error</MBadge>
          </div>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>
