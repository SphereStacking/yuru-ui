# maru-ui Design System

## コンセプト

自分用のデザインシステム。「まる」をモチーフにした、やわらかく使いやすいUI。
キーワード: **ほよほよ、まるい、パステル、ゆるい、若い、かわいい**

学習目的でもあるので、Histoireでのドキュメント整備もしっかりやる。
過度なカスタマイズ性は不要。シンプルに「自分のいつものパターン」を固める。

### 2つのテーマ

maru-ui は2つのテーマパターンを持つ。カラーパレットやスペーシングは共通で、**形と質感**だけが切り替わる。

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

- コンポーネントプレフィックス: `M`（まるの M）
- パッケージ名: `maru-ui`
- 例: `MButton`, `MCard`, `MGrid`, `MStack`, `MContainer`

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

「まる」がテーマなので大きめ。さらに **hoyo** という非対称の角丸を用意して、ほよほよ感を出す。

| Token    | Value                                              |
| -------- | -------------------------------------------------- |
| `sm`     | `8px`                                              |
| `md`     | `14px`                                             |
| `lg`     | `20px`                                             |
| `xl`     | `28px`                                             |
| `full`   | `50px`                                             |
| `hoyo`   | `22px 28px 24px 30px / 28px 22px 30px 24px`        |
| `circle` | `50%`                                              |

**`hoyo` が maru-ui の特徴的なトークン。** ボタンやカードのデフォルトの角丸として使用する。
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

maru-ui の最大の個性。線やボーダーにゆらぎを持たせて、かっちりしすぎない雰囲気を作る。

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

maru-ui のコンポーネントのデフォルトスタイル:
- **角丸**: `hoyo`（非対称border-radius）
- **フィルター**: `wobbly-subtle`（さりげないゆらぎ）
- **Divider**: wavy line

この3つの組み合わせが maru-ui の基本の見た目。

---

### テーマシステム実装

#### アーキテクチャ

**Tailwind CSS v4 ファースト** のアプローチを採用。カラー・スペーシングは `@theme` ブロックで定義し、テーマ固有の形状・質感のみ CSS 変数（`--m-*`）で切り替える。

- **カラー**: `@theme` で定義 → `mru:bg-primary-200`, `mru:text-secondary-500` 等
- **スペーシング**: `@theme` で定義 → `mru:p-md`, `mru:gap-lg` 等
- **形状**: CSS変数 → `@utility` ブリッジ → `mru:rounded-card`, `mru:filter-card` 等
- **ダークモード**: `.mru-dark` クラス + `mru:dark:*` バリアント

**CSS変数は最小限（テーマごと約17個）:**
- `--m-radius-{button,input,card,default,avatar}` — 非対称角丸
- `--m-filter-{card,default,button}` — SVGフィルター参照
- `--m-shadow-{sm,md,lg,xl}` — テーマ別の影の質感
- `--m-font-weight-{heading,body,small}` — テーマ別ウェイト
- `--m-transition-{speed,ease}` — テーマ別トランジション
- `--m-divider-style`, `--m-border-width`, `--m-letter-spacing`, `--m-font-feature`

#### MProvider の使い方

```vue
<!-- ほよテーマ（デフォルト） -->
<MProvider>
  <MButton>ほよ</MButton>
</MProvider>

<!-- ぴしテーマ -->
<MProvider theme="pishi">
  <MButton>ぴし</MButton>
</MProvider>

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
<!-- MCard.vue -->
<template>
  <div class="mru:rounded-card mru:shadow-theme-md mru:filter-card
              mru:border-theme mru:border-solid mru:border-gray-200
              mru:bg-white mru:dark:bg-gray-900 mru:dark:border-gray-700
              mru:p-lg mru:transition-theme">
    <slot />
  </div>
</template>
```

#### @utility ブリッジ一覧

CSS変数をTailwindクラスから使うためのカスタムユーティリティ:

| ユーティリティ | CSS | 説明 |
|-------------|-----|------|
| `mru:rounded-button` | `border-radius: var(--m-radius-button)` | ボタン角丸 |
| `mru:rounded-input` | `border-radius: var(--m-radius-input)` | インプット角丸 |
| `mru:rounded-card` | `border-radius: var(--m-radius-card)` | カード角丸 |
| `mru:rounded-default` | `border-radius: var(--m-radius-default)` | デフォルト角丸 |
| `mru:rounded-avatar` | `border-radius: var(--m-radius-avatar)` | アバター角丸 |
| `mru:filter-card` | `filter: var(--m-filter-card)` | カードフィルター |
| `mru:filter-default` | `filter: var(--m-filter-default)` | デフォルトフィルター |
| `mru:filter-button` | `filter: var(--m-filter-button)` | ボタンフィルター |
| `mru:shadow-theme-sm/md/lg/xl` | `box-shadow: var(--m-shadow-*)` | テーマ別シャドウ |
| `mru:font-heading` | `font-weight: var(--m-font-weight-heading)` | 見出しウェイト |
| `mru:font-body` | `font-weight: var(--m-font-weight-body)` | 本文ウェイト |
| `mru:font-small` | `font-weight: var(--m-font-weight-small)` | 小文字ウェイト |
| `mru:transition-theme` | `transition-duration/timing-function` | テーマ別トランジション |
| `mru:border-theme` | `border-width: var(--m-border-width)` | テーマ別ボーダー幅 |
| `mru:tracking-theme` | `letter-spacing: var(--m-letter-spacing)` | テーマ別字間 |
| `mru:font-feature-theme` | `font-feature-settings: var(--m-font-feature)` | テーマ別OpenType |

#### MProvider の実装

```vue
<script setup lang="ts">
import { provide, computed } from 'vue'

const props = defineProps<{
  theme?: 'hoyo' | 'pishi'
}>()

const currentTheme = computed(() => props.theme ?? 'hoyo')
provide('m-theme', currentTheme)
</script>

<template>
  <div
    :data-theme="currentTheme"
    class="mru:relative mru:font-sans mru:font-feature-theme
           mru:tracking-theme mru:leading-relaxed"
  >
    <svg class="mru:absolute mru:w-0 mru:h-0" aria-hidden="true">
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
  <Story title="General/MButton">
    <Variant v-for="theme in themes" :key="theme" :title="theme">
      <div v-for="mode in modes" :key="mode" :class="mode === 'dark' ? 'mru-dark' : ''">
        <MProvider :theme="theme">
          <div class="mru:p-6" :class="mode === 'dark' ? 'mru:bg-gray-900' : 'mru:bg-gray-50'">
            <MButton>{{ theme }}</MButton>
          </div>
        </MProvider>
      </div>
    </Variant>
  </Story>
</template>
```

---

## コンポーネント一覧（実装済み）

### Provider
- `MProvider` — テーマ切替 + SVGフィルター配置

### Layout
- `MContainer` — 最大幅制御、センタリング
- `MStack` — 縦/横に積む、gap制御
- `MGrid` — シンプルなグリッド
- `MNavbar` — ナビゲーションバー（brand / default / actions スロット）

### Form
- `MInput` — テキスト入力。フォーカスリング付き
- `MTextarea` — テキストエリア
- `MCheckbox` — チェックボックス
- `MSwitch` — トグルスイッチ
- `MSelect` — カスタムセレクト（useClickOutside使用）

### General
- `MButton` — primary/secondary/tertiary/outline/ghost。テーマ別hover/active
- `MCard` — コンテナ。テーマ別hover
- `MBadge` — ステータス表示。primary/secondary/tertiary + semantic + accent
- `MTag` — タグ。primary/secondary/tertiary + accent。removable対応
- `MAvatar` — アバター（sm/md/lg）
- `MDivider` — テーマ別の区切り線（wavy/straight）
- `MBreadcrumb` — パンくずリスト。テーマ別セパレーター

### Feedback
- `MAlert` — アラート（success/warning/error/info）。closable対応
- `MToast` — 通知（useToast composable付き）
- `MProgress` — プログレスバー。primary/secondary/tertiary + accent
- `MSkeleton` — スケルトンローダー（text/circle/rect）

### Overlay
- `MModal` — モーダルダイアログ（persistent対応、Teleport使用）
- `MDropdown` — ドロップダウンメニュー
- `MTooltip` — ツールチップ（top/bottom/left/right）

### Navigation
- `MTabs` — タブ。テーマ別インジケーター（wavy/solid）

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
