# maru-ui Design System

## コンセプト

自分用のデザインシステム。「まる」をモチーフにした、やわらかく使いやすいUI。
キーワード: **ほよほよ、まるい、パステル、ゆるい、若い、かわいい**

学習目的でもあるので、Histoireでのドキュメント整備もしっかりやる。
過度なカスタマイズ性は不要。シンプルに「自分のいつものパターン」を固める。

### 2つのテーマ: ほよ（hoyo）と ぴし（pishi）

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

#### 追加テーマ（実装済み）

`data-theme` の値を文字列で自由に受けられる設計で、以下の4テーマを追加実装した。

- **とげ（toge）** — 角丸ゼロ、シャープなシャドウ、直線的。太めフォントウェイト（800/700）
- **もこ（moko）** — ほよよりさらにもこもこ。角丸めちゃ大きい（32〜42px）、wobbly-mokoフィルター、雲みたいな
- **きら（kira）** — グラデーション多め（`--m-gradient-primary`, `--m-gradient-accent`）、グロウ感の二重シャドウ、リッチ
- **ねむ（nemu）** — 低コントラスト、淡い色、シャドウ極薄（opacity 0.03〜0.06）。目に優しい夜向け

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

#### アクセント（ほよほよパステル）

primaryのグリーン以外に、パステルのアクセントカラーを用意。バリエーション出しやバッジ等に使う。

| Token      | Hex       | テキスト色 |
| ---------- | --------- | -------- |
| `mint`     | `#b0ffc4` | `#4a9960` |
| `pink`     | `#ffd4e8` | `#995577` |
| `lavender` | `#e0d4ff` | `#665599` |
| `peach`    | `#ffe4cc` | `#886644` |
| `sky`      | `#ccedff` | `#446688` |
| `lemon`    | `#fff6d5` | `#887744` |

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

`MProvider` コンポーネントで `data-theme` 属性を切り替える。コンポーネント側はCSS変数を参照するだけでテーマを意識しない。

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

#### テーマCSS変数

```css
/* ===== 共通（カラー、スペーシングはテーマ共通） ===== */
:root {
  --m-color-primary-200: #b0ffc4;
  --m-color-gray-200: #d2f0da;
  /* ... 他のカラー・スペーシングは共通 ... */
}

/* ===== ほよ（hoyo） — デフォルト ===== */
[data-theme="hoyo"] {
  /* 角丸 */
  --m-radius-default: 22px 28px 24px 30px / 28px 22px 30px 24px;
  --m-radius-button: 22px 26px 24px 28px / 26px 22px 28px 24px;
  --m-radius-input: 20px 24px 22px 26px / 24px 20px 26px 22px;
  --m-radius-card: 24px 28px 26px 30px / 28px 24px 30px 26px;

  /* フィルター */
  --m-filter-default: url(#wobbly-subtle);
  --m-filter-card: url(#wobbly-subtle);
  --m-filter-button: none;  /* ボタンはフィルターなし（小さい要素は崩れやすい） */

  /* シャドウ */
  --m-shadow-sm: 0 2px 8px rgba(142, 220, 170, 0.08);
  --m-shadow-md: 0 4px 20px rgba(142, 220, 170, 0.10);
  --m-shadow-lg: 0 8px 32px rgba(142, 220, 170, 0.14);
  --m-shadow-xl: 0 16px 48px rgba(142, 220, 170, 0.18);

  /* タイポグラフィ */
  --m-font-weight-display: 700;
  --m-font-weight-heading: 500;
  --m-font-weight-body: 400;
  --m-font-weight-small: 300;

  /* Divider */
  --m-divider-style: wavy;  /* MDivider コンポーネントが参照 */

  /* ボーダー */
  --m-border-width: 1.5px;
}

/* ===== ぴし（pishi） ===== */
[data-theme="pishi"] {
  /* 角丸 — 均一で整った形 */
  --m-radius-default: 14px;
  --m-radius-button: 12px;
  --m-radius-input: 12px;
  --m-radius-card: 16px;

  /* フィルター — なし */
  --m-filter-default: none;
  --m-filter-card: none;
  --m-filter-button: none;

  /* シャドウ — くっきり小さめ */
  --m-shadow-sm: 0 1px 3px rgba(142, 220, 170, 0.06);
  --m-shadow-md: 0 2px 8px rgba(142, 220, 170, 0.08);
  --m-shadow-lg: 0 4px 16px rgba(142, 220, 170, 0.10);
  --m-shadow-xl: 0 8px 24px rgba(142, 220, 170, 0.14);

  /* タイポグラフィ — やや重め */
  --m-font-weight-display: 700;
  --m-font-weight-heading: 600;
  --m-font-weight-body: 400;
  --m-font-weight-small: 400;

  /* Divider */
  --m-divider-style: straight;

  /* ボーダー */
  --m-border-width: 1px;
}
```

#### テーマ差分まとめ

| トークン             | ほよ (hoyo)                          | ぴし (pishi)              |
| -------------------- | ------------------------------------ | ------------------------- |
| 角丸（デフォルト）     | 非対称 `22px 28px 24px 30px / ...`   | 均一 `14px`               |
| SVGフィルター         | `wobbly-subtle`                      | なし                      |
| Divider              | なみなみ線                            | 直線                      |
| シャドウ              | ぼんやり大きめ                        | くっきり小さめ            |
| font-weight（heading）| 500                                  | 600                       |
| font-weight（small）  | 300                                  | 400                       |
| ボーダー幅            | 1.5px                                | 1px                       |
| 全体の雰囲気          | ぽてっ、ゆるい                        | すっきり、きりっ          |

#### コンポーネントでの使い方

コンポーネントはCSS変数を参照するだけ。テーマの分岐ロジックは不要。

```vue
<!-- MCard.vue -->
<template>
  <div class="m-card">
    <slot />
  </div>
</template>

<style scoped>
.m-card {
  border-radius: var(--m-radius-card);
  box-shadow: var(--m-shadow-md);
  filter: var(--m-filter-card);
  border: var(--m-border-width) solid var(--m-color-gray-200);
}
</style>
```

#### MProvider の実装

```vue
<!-- MProvider.vue -->
<script setup lang="ts">
defineProps<{
  theme?: 'hoyo' | 'pishi'
}>()
</script>

<template>
  <div :data-theme="theme ?? 'hoyo'" class="m-provider">
    <!-- SVGフィルター（hoyoテーマで使用） -->
    <svg style="position:absolute;width:0;height:0" aria-hidden="true">
      <defs>
        <filter id="wobbly">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" seed="2" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly-light">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" seed="5" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="wobbly-subtle">
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="8" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
    <slot />
  </div>
</template>

<style>
.m-provider {
  position: relative;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
```

#### Histoire での表示

各storyで `hoyo` / `pishi` 両方のプレビューを並べて表示できるようにする。

```vue
<!-- MButton.story.vue -->
<script setup lang="ts">
</script>

<template>
  <Story title="MButton">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <MButton>ほよボタン</MButton>
      </MProvider>
    </Variant>
    <Variant title="pishi">
      <MProvider theme="pishi">
        <MButton>ぴしボタン</MButton>
      </MProvider>
    </Variant>
  </Story>
</template>
```

---

## コンポーネント計画

### Phase 1: 基盤づくり
- プロジェクトセットアップ（Vite + Vue 3 + TS + Tailwind + Histoire）
- デザイントークンを `tailwind.config` に反映
- SVGフィルターをグローバルに配置するプロバイダーコンポーネント（`MProvider`）
- レイアウトコンポーネント + story
  - `MContainer` — 最大幅制御、センタリング
  - `MStack` — 縦/横に積む、gap制御
  - `MGrid` — シンプルなグリッド

### Phase 2: 基本UIコンポーネント
- `MButton` — primary / accent colors / outline / ghost。角丸は hoyo
- `MInput` — テキスト入力。フォーカス時にほよっとしたリング
- `MCard` — 基本的なコンテナ。hoyo角丸 + wobbly-subtle
- `MBadge` — ステータス表示。セマンティック + アクセントカラー
- `MAvatar` — 丸いアバター
- `MDivider` — なみなみ区切り線。色バリエーション

### Phase 3: 複合コンポーネント
- `MModal`
- `MToast` — ほよっとした通知
- `MDropdown`
- `MNavbar`

### Phase 4: 仕上げ
- Histoireでトークン一覧ページ（カラーパレット、スペーシング表など）
- 使い方ガイド・サンプルページ
- npm パッケージ化 or Git submodule で自分のプロジェクトに導入

---

## コンポーネント設計方針

- **propsは少なめ**。シンプルなAPI
- **Tailwindのクラスで微調整可能**にしておく
- 過度な抽象化はしない
- 各コンポーネントに `.story.vue` を必ず用意する
- ほよ線のゆらぎ強度は `wobbly` prop で `none | subtle | light | strong` を選べるように

---

## 参考リソース

- デザイントークン探索ページ: このプロジェクトと同じリポジトリに `docs/token-explorer.html` として配置
- フォント: https://fonts.google.com/specimen/M+PLUS+Rounded+1c
