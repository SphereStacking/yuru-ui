# CLAUDE.md — maru-ui プロジェクト指示書

## このプロジェクトについて

maru-ui は個人用のデザインシステム。Vue 3 + TypeScript + Tailwind CSS + Histoire で構築する。
「ほよほよ」した、やわらかくて若いデザインが特徴。

**必ず先に `DESIGN.md` を読んでください。** デザイントークン（カラー、角丸、シャドウ、ほよ線の実装方法など）がすべて記載されています。

## 実装の優先順位

1. プロジェクトセットアップ（Vite + Vue 3 + TS + Tailwind v4 + Histoire）
2. Tailwind にデザイントークンを設定
3. `MProvider` コンポーネント（SVGフィルターをグローバル配置）
4. レイアウトコンポーネント: `MContainer`, `MStack`, `MGrid`
5. 各コンポーネントの `.story.vue`
6. 基本UIコンポーネント: `MButton`, `MInput`, `MCard`, `MBadge`, `MAvatar`, `MDivider`

## コーディング規約

- Vue 3 Composition API + `<script setup lang="ts">` を使用
- コンポーネントファイル: `src/components/layout/MContainer.vue` のようにカテゴリ分け
- Story ファイル: コンポーネントと同じディレクトリに `MContainer.story.vue` として配置
- props の型は `defineProps` で TypeScript の interface を使って定義
- CSS は Tailwind のユーティリティクラスを基本に、必要に応じて `<style scoped>` を併用
- コンポーネント名のプレフィックスは `M`（例: MButton, MCard）

## デザインで大事なこと

- **2つのテーマ: `hoyo`（デフォルト）と `pishi`**。`MProvider` の `theme` prop で切り替え
- コンポーネントは **CSS変数を参照するだけ** でテーマを意識しない設計にする
- カラーやスペーシングは共通、「形と質感」だけが切り替わる
- **hoyo**: 非対称角丸、wobbly-subtleフィルター、なみなみDivider、ウェイト軽め
- **pishi**: 均一角丸(14px)、フィルターなし、直線Divider、ウェイトふつう
- Histoire の story では hoyo / pishi 両方の Variant を必ず用意する
- **角丸は CSS変数 `var(--m-radius-card)` 等で指定**。ハードコードしない
- **シャドウも CSS変数 `var(--m-shadow-md)` 等で指定**。ハードコードしない
- **フィルターも CSS変数 `var(--m-filter-card)` で指定**。ハードコードしない

## ディレクトリ構成（想定）

```
maru-ui/
├── CLAUDE.md          ← これ
├── DESIGN.md          ← デザイントークン詳細
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── histoire.config.ts
├── src/
│   ├── index.ts       ← エクスポート
│   ├── tokens/        ← Tailwind 拡張用トークン定義
│   ├── components/
│   │   ├── provider/
│   │   │   └── MProvider.vue        ← SVGフィルター配置
│   │   ├── layout/
│   │   │   ├── MContainer.vue
│   │   │   ├── MContainer.story.vue
│   │   │   ├── MStack.vue
│   │   │   ├── MStack.story.vue
│   │   │   ├── MGrid.vue
│   │   │   └── MGrid.story.vue
│   │   └── ui/
│   │       ├── MButton.vue
│   │       ├── MButton.story.vue
│   │       ├── MCard.vue
│   │       ├── MCard.story.vue
│   │       └── ...
│   └── composables/   ← 共通ロジック（必要に応じて）
├── docs/
│   └── token-explorer.html  ← デザイントークン探索ページ
└── public/
```

## 注意

- これは自分用なので過度な汎用性は不要
- shadcn のような高いカスタマイズ性は必要ない
- シンプルに「さっと使えてブレない」を目指す
- 勉強目的なので Histoire の story は丁寧に作る
