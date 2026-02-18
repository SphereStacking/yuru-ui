# yuru-ui Design System

## コンセプト

自分用のデザインシステム。「ゆる」をモチーフにした、やわらかく使いやすいUI。
キーワード: **ほよほよ、まるい、パステル、ゆるい、若い、かわいい**

学習目的でもあるので、Histoireでのドキュメント整備もしっかりやる。
過度なカスタマイズ性は不要。シンプルに「自分のいつものパターン」を固める。

### 2つのテーマ

yuru-ui は2つのテーマパターンを持つ。カラーパレットやスペーシングは共通で、**形と質感**だけが切り替わる。

**ほよ（hoyo）** — デフォルトテーマ。ゆるくて若い。
- 非対称な角丸（ぽてっとした有機的な形）
- SVGフィルターによるゆらぎ
- なみなみの区切り線
- ふわっとした大きなシャドウ
- フォントウェイト軽め（300〜500中心）
- 遊び・個人プロジェクト向き

**ぴし（pishi）** — かちっとしたテーマ。すっきりきりっ。
- 均一な角丸（整った形）
- フィルターなし（ゆらぎなし）
- 直線の区切り線
- くっきり小さめのシャドウ
- フォントウェイトふつう（400〜600中心）
- ちゃんとしたい場面向き

## 技術スタック

- **Vue 3** + **TypeScript**
- **Tailwind CSS v4**
- **Histoire**（Vue向けStorybook代替）
- **Vite**

## 命名規則

- コンポーネントプレフィックス: `YR`（ゆるの YR）
- パッケージ名: `yuru-ui`
- 例: `YRButton`, `YRCard`, `YRGrid`, `YRStack`, `YRContainer`

---

## デザイントークン

### カラーパレット

#### Primary（ミントグリーン）

| Token    | Hex       | 用途                     |
| -------- | --------- | ---------------------- |
| `50`     | `#edfff2` | 最も薄い背景            |
| `100`    | `#ddffe7` | hover背景など           |
| `200`    | `#b0ffc4` | ★ ベースカラー（メインの緑） |
| `300`    | `#80efa2` | アクティブ状態           |
| `400`    | `#55d47a` | 濃いめのアクセント       |
| `500`    | `#38b45c` | テキスト on light bg     |
| `600`    | `#2a9048` | 強調テキスト             |
| `700`    | `#4a9960` | ダークモードのprimary    |
| `800`    | `#1a6530` | 濃い背景テキスト         |
| `900`    | `#0e3a1c` | 最も濃い                |

#### Gray（グリーンティント）

純粋なグレーではなく、グリーンの色味を帯びたグレースケール。統一感を出すため。

| Token    | Hex       | 用途                     |
| -------- | --------- | ---------------------- |
| `50`     | `#f6fef8` | ページ背景              |
| `100`    | `#eef7f0` | カード内背景             |
| `200`    | `#d2f0da` | ボーダー                |
| `300`    | `#afd9b8` | 無効状態                |
| `400`    | `#8baa94` | プレースホルダー         |
| `500`    | `#6a8873` | サブテキスト             |
| `600`    | `#4d6855` | セカンダリテキスト       |
| `700`    | `#3d5a44` | メインテキスト           |
| `800`    | `#2a3d30` | 強調テキスト             |
| `900`    | `#0e1810` | ダークモード背景         |

#### Secondary（ピンク）

| Token    | Hex       | 用途                     |
| -------- | --------- | ---------------------- |
| `50`     | `#fff5f9` | 最も薄い背景            |
| `100`    | `#ffe8f2` | hover背景など           |
| `200`    | `#ffd4e8` | ★ ベースカラー（メインのピンク） |
| `300`    | `#ffaad0` | アクティブ状態           |
| `400`    | `#e87aaa` | 濃いめのアクセント       |
| `500`    | `#e06090` | テキスト on light bg     |
| `600`    | `#c04878` | 強調テキスト             |
| `700`    | `#995577` | ダークモードのsecondary  |
| `800`    | `#6a2848` | 濃い背景テキスト         |
| `900`    | `#401828` | 最も濃い                |

#### Tertiary（ラベンダー）

| Token    | Hex       | 用途                     |
| -------- | --------- | ---------------------- |
| `50`     | `#f8f5ff` | 最も薄い背景            |
| `100`    | `#f0e8ff` | hover背景など           |
| `200`    | `#e0d4ff` | ★ ベースカラー（メインのラベンダー） |
| `300`    | `#c8aaff` | アクティブ状態           |
| `400`    | `#aa88ee` | 濃いめのアクセント       |
| `500`    | `#8866cc` | テキスト on light bg     |
| `600`    | `#7050b0` | 強調テキスト             |
| `700`    | `#665599` | ダークモードのtertiary   |
| `800`    | `#3d2870` | 濃い背景テキスト         |
| `900`    | `#281840` | 最も濃い                |

#### アクセント（ほよほよパステル）

primary/secondary/tertiaryに加えて、パステルのアクセントカラーを用意。バリエーション出しやバッジ等に使う。

| Token      | Hex       | テキスト色 |
| ---------- | --------- | -------- |
| `mint`     | `#b0ffc4` | `#4a9960` |
| `pink`     | `#ffd4e8` | `#995577` |
| `lavender` | `#e0d4ff` | `#665599` |
| `peach`    | `#ffe4cc` | `#886644` |
| `sky`      | `#ccedff` | `#446688` |
| `lemon`    | `#fff6d5` | `#887744` |

> mint/pink/lavender はそれぞれ primary-200/secondary-200/tertiary-200 のエイリアス。

#### セマンティックカラー

やさしいトーンで。「警告！」ではなく「きをつけて」くらいの温度感。

| Token     | Background | Text      |
| --------- | ---------- | --------- |
| `success` | `#ddffd5`  | `#4a8040` |
| `warning` | `#fff6d5`  | `#8a7030` |
| `error`   | `#ffd5d5`  | `#8a4040` |
| `info`    | `#d5ecff`  | `#406080` |

#### ダークモード

| 要素           | Light         | Dark          |
| -------------- | ------------- | ------------- |
| ページ背景      | `#f6fef8`     | `#0e1810`     |
| カード背景      | `#ffffff`     | `#162018`     |
| ボーダー        | `#d2f0da`     | `#2a4030`     |
| メインテキスト   | `#3d5a44`     | `#d5f0dc`     |
| サブテキスト     | `#8baa94`     | `#7aaa86`     |
| Primary Button | bg `#b0ffc4` / text `#4a9960` | bg `#2a7a4a` / text `#b0ffc4` |
| Pink Button    | bg `#ffd4e8` / text `#995577` | bg `#4a2838` / text `#ffb8d4` |

---

### タイポグラフィ

#### フォント

```
font-family: 'M PLUS Rounded 1c', sans-serif;
```

Google Fonts からインポート。ウェイトは 300, 400, 500, 700 を使用。
ほよほよ感を出すため、**基本は 400〜500 を中心に使い、Bold(700) は控えめに**。

#### スケール

| Token     | Size      | Weight | Line Height | 用途           |
| --------- | --------- | ------ | ----------- | -------------- |
| `display` | `2.25rem` | 700    | 1.3         | ヒーロー       |
| `h1`      | `1.75rem` | 500    | 1.4         | ページタイトル |
| `h2`      | `1.375rem`| 500    | 1.4         | セクション     |
| `h3`      | `1.125rem`| 500    | 1.5         | サブセクション |
| `body`    | `1rem`    | 400    | 1.8         | 本文           |
| `small`   | `0.875rem`| 300    | 1.7         | 補足           |
| `xs`      | `0.75rem` | 400    | 1.5         | バッジ、ラベル |

---

### スペーシング

| Token | Value  |
| ----- | ------ |
| `2xs` | `4px`  |
| `xs`  | `8px`  |
| `sm`  | `12px` |
| `md`  | `16px` |
| `lg`  | `24px` |
| `xl`  | `32px` |
| `2xl` | `48px` |
| `3xl` | `64px` |
| `4xl` | `96px` |

---

### 角丸（Border Radius）

「ゆる」がテーマなので大きめ。さらに **hoyo** という非対称の角丸を用意して、ほよほよ感を出す。

| Token    | Value                                              |
| -------- | -------------------------------------------------- |
| `sm`     | `8px`                                              |
| `md`     | `14px`                                             |
| `lg`     | `20px`                                             |
| `xl`     | `28px`                                             |
| `full`   | `50px`                                             |
| `hoyo`   | `22px 28px 24px 30px / 28px 22px 30px 24px`        |
| `circle` | `50%`                                              |

**`hoyo` が yuru-ui の特徴的なトークン。** ボタンやカードのデフォルトの角丸として使用する。
左右非対称にすることで、完璧な丸ではなく「ぽてっ」とした有機的な形になる。

**ぴし（pishi）テーマでは `hoyo` の代わりに `lg`（20px）がデフォルトになる。**

---

### シャドウ

グリーン系の色味を帯びたやわらかいシャドウ。ふわっとした浮遊感。

| Token | Value                                       | 雰囲気     |
| ----- | ------------------------------------------- | ---------- |
| `sm`  | `0 2px 8px rgba(142, 220, 170, 0.08)`      | ほんのり   |
| `md`  | `0 4px 20px rgba(142, 220, 170, 0.10)`     | ふわっと   |
| `lg`  | `0 8px 32px rgba(142, 220, 170, 0.14)`     | ゆったり   |
| `xl`  | `0 16px 48px rgba(142, 220, 170, 0.18)`    | ほよ〜ん   |

---

### ほよ線（Wobbly Lines）

yuru-ui の最大の個性。線やボーダーにゆらぎを持たせて、かっちりしすぎない雰囲気を作る。

#### 実装方法

**1. SVGフィルター（メイン手法）**

コンポーネントやカード全体にゆらぎを与える。3段階用意する。

```html
<svg style="position:absolute;width:0;height:0">
  <defs>
    <!-- つよめ：特殊な演出用 -->
    <filter id="wobbly">
      <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" seed="2" result="turbulence"/>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <!-- ひかえめ：カードやボタンに -->
    <filter id="wobbly-light">
      <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" seed="5" result="turbulence"/>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <!-- さりげない：UI全体のデフォルト -->
    <filter id="wobbly-subtle">
      <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="8" result="turbulence"/>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
```

使い方: `filter: url(#wobbly-subtle);` をCSSで指定。

**2. なみなみ区切り線（Wavy Divider）**

Dividerコンポーネント用。SVGパスをbackground-imageで繰り返す。

```css
.wavy-line {
  height: 8px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 8'%3E%3Cpath d='M0 4c5 0 5-3 10-3s5 6 10 6 5-6 10-6 5 3 10 3' fill='none' stroke='%23b0ffc4' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") repeat-x;
  background-size: 40px 8px;
}
```

色はpropsで変更可能にする（mint, pink, lavender など）。

**3. 手描き風ボーダー（CSS重ね線）**

::before と ::after で少しずらしたborderを重ねる。SVGフィルター不要。

```css
.sketchy {
  position: relative;
}
.sketchy::before {
  content: '';
  position: absolute;
  inset: -2px;
  border: 2.5px solid var(--primary);
  border-radius: 20px 24px 18px 22px;
  transform: rotate(0.3deg);
}
.sketchy::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 1.5px solid rgba(74, 153, 96, 0.2);
  border-radius: 22px 18px 24px 20px;
  transform: rotate(-0.5deg);
}
```

**4. ほよアンダーライン**

テキストの下にSVGパスで手描き風の下線を引く。

```css
.hoyo-underline {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12'%3E%3Cpath d='M2 8c30-6 60 4 90-2s70 4 106-2' fill='none' stroke='%23b0ffc4' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 200px 12px;
  padding-bottom: 6px;
}
```

#### デフォルトの組み合わせ

yuru-ui のコンポーネントのデフォルトスタイル:
- **角丸**: `hoyo`（非対称border-radius）
- **フィルター**: `wobbly-subtle`（さりげないゆらぎ）
- **Divider**: wavy line

この3つの組み合わせが yuru-ui の基本の見た目。

---

### テーマシステム実装

#### アーキテクチャ

**Tailwind CSS v4 ファースト** のアプローチを採用。カラー・スペーシングは `@theme` ブロックで定義し、テーマ固有の形状・質感のみ CSS 変数（`--yr-*`）で切り替える。

- **カラー**: `@theme` で定義 → `yr:bg-primary-200`, `yr:text-secondary-500` 等
- **スペーシング**: `@theme` で定義 → `yr:p-md`, `yr:gap-lg` 等
- **形状**: CSS変数 → `@utility` ブリッジ → `yr:rounded-card`, `yr:filter-card` 等
- **ダークモード**: `.yr-dark` クラス + `yr:dark:*` バリアント

**CSS変数は最小限（テーマごと約17個）:**
- `--yr-radius-{button,input,card,default,avatar}` — 非対称角丸
- `--yr-filter-{card,default,button}` — SVGフィルター参照
- `--yr-shadow-{sm,md,lg,xl}` — テーマ別の影の質感
- `--yr-font-weight-{heading,body,small}` — テーマ別ウェイト
- `--yr-transition-{speed,ease}` — テーマ別トランジション
- `--yr-divider-style`, `--yr-border-width`, `--yr-letter-spacing`, `--yr-font-feature`

#### YRProvider の使い方

```vue
<!-- ほよテーマ（デフォルト） -->
<YRProvider>
  <YRButton>ほよ</YRButton>
</YRProvider>

<!-- ぴしテーマ -->
<YRProvider theme="pishi">
  <YRButton>ぴし</YRButton>
</YRProvider>

```

#### テーマ差分まとめ

| トークン | ほよ (hoyo) | ぴし (pishi) |
|---------|------------|-------------|
| 角丸 | 非対称（有機的） | 均一 12-16px |
| フィルター | wobbly-subtle | なし |
| Divider | なみなみ線 | 直線 |
| シャドウ | ぼんやり大きめ | くっきり小さめ |
| heading weight | 500 | 600 |
| small weight | 300 | 400 |
| ボーダー幅 | 1.5px | 1px |
| transition | 0.2s bouncy | 0.12s ease-out |
| letter-spacing | 0.03em | 0 |
| 雰囲気 | ぽてっ、ゆるい | すっきり、きりっ |

#### コンポーネントでの使い方

コンポーネントは Tailwind ユーティリティクラスを基本に、テーマ固有の値は `@utility` ブリッジを使用。

```vue
<!-- YRCard.vue -->
<template>
  <div class="yr:rounded-card yr:shadow-theme-md yr:filter-card
              yr:border-theme yr:border-solid yr:border-gray-200
              yr:bg-white yr:dark:bg-gray-900 yr:dark:border-gray-700
              yr:p-lg yr:transition-theme">
    <slot />
  </div>
</template>
```

#### @utility ブリッジ一覧

CSS変数をTailwindクラスから使うためのカスタムユーティリティ:

| ユーティリティ | CSS | 説明 |
|-------------|-----|------|
| `yr:rounded-button` | `border-radius: var(--yr-radius-button)` | ボタン角丸 |
| `yr:rounded-input` | `border-radius: var(--yr-radius-input)` | インプット角丸 |
| `yr:rounded-card` | `border-radius: var(--yr-radius-card)` | カード角丸 |
| `yr:rounded-default` | `border-radius: var(--yr-radius-default)` | デフォルト角丸 |
| `yr:rounded-avatar` | `border-radius: var(--yr-radius-avatar)` | アバター角丸 |
| `yr:filter-card` | `filter: var(--yr-filter-card)` | カードフィルター |
| `yr:filter-default` | `filter: var(--yr-filter-default)` | デフォルトフィルター |
| `yr:filter-button` | `filter: var(--yr-filter-button)` | ボタンフィルター |
| `yr:shadow-theme-sm/md/lg/xl` | `box-shadow: var(--yr-shadow-*)` | テーマ別シャドウ |
| `yr:font-heading` | `font-weight: var(--yr-font-weight-heading)` | 見出しウェイト |
| `yr:font-body` | `font-weight: var(--yr-font-weight-body)` | 本文ウェイト |
| `yr:font-small` | `font-weight: var(--yr-font-weight-small)` | 小文字ウェイト |
| `yr:transition-theme` | `transition-duration/timing-function` | テーマ別トランジション |
| `yr:border-theme` | `border-width: var(--yr-border-width)` | テーマ別ボーダー幅 |
| `yr:tracking-theme` | `letter-spacing: var(--yr-letter-spacing)` | テーマ別字間 |
| `yr:font-feature-theme` | `font-feature-settings: var(--yr-font-feature)` | テーマ別OpenType |

#### YRProvider の実装

```vue
<script setup lang="ts">
import { provide, computed } from 'vue'

const props = defineProps<{
  theme?: 'hoyo' | 'pishi'
}>()

const currentTheme = computed(() => props.theme ?? 'hoyo')
provide('yr-theme', currentTheme)
</script>

<template>
  <div
    :data-theme="currentTheme"
    class="yr:relative yr:font-sans yr:font-feature-theme
           yr:tracking-theme yr:leading-relaxed"
  >
    <svg class="yr:absolute yr:w-0 yr:h-0" aria-hidden="true">
      <defs>
        <filter id="wobbly-subtle">...</filter>
        <filter id="wobbly">...</filter>
      </defs>
    </svg>
    <slot />
  </div>
</template>
```

#### Histoire での表示

各 story で 2 テーマ × light/dark のプレビューを表示する。

```vue
<script setup lang="ts">
const themes = ['hoyo', 'pishi'] as const
const modes = ['light', 'dark'] as const
</script>

<template>
  <Story title="General/YRButton">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'yr-dark' : ''">
        <YRProvider :theme="theme">
          <div class="yr:p-6" :class="mode === 'dark' ? 'yr:bg-gray-900' : 'yr:bg-gray-50'">
            <YRButton>{{ theme }}</YRButton>
          </div>
        </YRProvider>
      </div>
    </Variant>
  </Story>
</template>
```

---

## コンポーネント一覧（実装済み）

### Provider
- `YRProvider` — テーマ切替 + SVGフィルター配置

### Layout
- `YRContainer` — 最大幅制御、センタリング
- `YRStack` — 縦/横に積む、gap制御
- `YRGrid` — シンプルなグリッド
- `YRNavbar` — ナビゲーションバー（brand / default / actions スロット）

### Form
- `YRInput` — テキスト入力。フォーカスリング付き
- `YRTextarea` — テキストエリア
- `YRCheckbox` — チェックボックス
- `YRSwitch` — トグルスイッチ
- `YRSelect` — カスタムセレクト（useClickOutside使用）

### General
- `YRButton` — primary/secondary/tertiary/outline/ghost。テーマ別hover/active
- `YRCard` — コンテナ。テーマ別hover
- `YRBadge` — ステータス表示。primary/secondary/tertiary + semantic + accent
- `YRTag` — タグ。primary/secondary/tertiary + accent。removable対応
- `YRAvatar` — アバター（sm/md/lg）
- `YRDivider` — テーマ別の区切り線（wavy/straight）
- `YRBreadcrumb` — パンくずリスト。テーマ別セパレーター

### Feedback
- `YRAlert` — アラート（success/warning/error/info）。closable対応
- `YRToast` — 通知（useToast composable付き）
- `YRProgress` — プログレスバー。primary/secondary/tertiary + accent
- `YRSkeleton` — スケルトンローダー（text/circle/rect）

### Overlay
- `YRModal` — モーダルダイアログ（persistent対応、Teleport使用）
- `YRDropdown` — ドロップダウンメニュー
- `YRTooltip` — ツールチップ（top/bottom/left/right）

### Navigation
- `YRTabs` — タブ。テーマ別インジケーター（wavy/solid）

---

## コンポーネント設計方針

- **propsは少なめ**。シンプルなAPI
- **Tailwind クラスベース**。`<style scoped>` は最小限（テーマ別hover、@keyframes、Vue Transition CSS等）
- `@utility` ブリッジでテーマ固有の値を Tailwind クラスとして使用
- 過度な抽象化はしない
- 各コンポーネントに `.story.vue` を必ず用意する（6テーマ × light/dark）
- カラーバリアントは computed でTailwindクラス文字列を返すパターンに統一（colorMap + :style は廃止）

---

## 参考リソース

- デザイントークン探索ページ: このプロジェクトと同じリポジトリに `docs/token-explorer.html` として配置
- フォント: https://fonts.google.com/specimen/M+PLUS+Rounded+1c
