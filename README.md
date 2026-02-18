# yuru-ui

個人用デザインシステム。ゆるっとした、まるい、パステル、かわいい UI コンポーネントライブラリ。

Vue 3 + TypeScript + Tailwind CSS v4 + Histoire で構築。

## 特徴

- **2つのテーマ** — `hoyo`（ゆるくて有機的）と `pishi`（すっきりきりっ）を切り替え可能
- **パステルカラー** — ミントグリーン / ピンク / ラベンダーの3色ベース
- **ほよほよ表現** — 非対称角丸、SVG ゆらぎフィルター、なみなみ区切り線
- **Tailwind-first** — スタイリングは Tailwind ユーティリティクラスを最大限活用
- **Histoire** — 全コンポーネントにストーリー付き

## セットアップ

```bash
npm install
```

## 開発

```bash
# Histoire（コンポーネントカタログ）
npm run story:dev

# Vite dev server
npm run dev
```

## ビルド

```bash
npm run build
npm run story:build
```

## 使い方

```vue
<script setup>
import { YRProvider, YRButton, YRCard } from 'yuru-ui'
</script>

<template>
  <YRProvider theme="hoyo">
    <YRCard>
      <YRButton>ほよ</YRButton>
    </YRCard>
  </YRProvider>
</template>
```

`YRProvider` で囲むとテーマが適用される。`theme` prop で `hoyo`（デフォルト）/ `pishi` を切り替え。

## テーマ

|  | hoyo（デフォルト） | pishi |
|---|---|---|
| 角丸 | 非対称（ぽてっと有機的） | 均一（すっきり） |
| フィルター | wobbly-subtle ゆらぎ | なし |
| Divider | なみなみ線 | 直線 |
| シャドウ | ふわっと大きめ | くっきり小さめ |
| 雰囲気 | ゆるい・遊び向き | きりっと・ちゃんとしたい場面向き |

## コンポーネント

### Provider
`YRProvider` — テーマ切替 + SVG フィルター配置

### Layout
`YRContainer` `YRStack` `YRGrid` `YRNavbar`

### Form
`YRInput` `YRTextarea` `YRCheckbox` `YRSwitch` `YRSelect`

### General
`YRButton` `YRCard` `YRBadge` `YRTag` `YRAvatar` `YRDivider` `YRBreadcrumb`

### Feedback
`YRAlert` `YRToast` `YRProgress` `YRSkeleton`

### Overlay
`YRModal` `YRDropdown` `YRTooltip`

### Navigation
`YRTabs`

## 技術スタック

- **Vue 3** + TypeScript
- **Tailwind CSS v4**（`yr:` prefix）
- **Histoire**（コンポーネントカタログ）
- **Vite**

## ドキュメント

- `DESIGN.md` — デザイントークン詳細（カラー、角丸、シャドウ、ほよ線の実装等）
- `docs/token-explorer.html` — デザイントークン探索ページ

## ライセンス

個人用プロジェクト
