# CLAUDE.md — yuru-ui プロジェクト指示書

## このプロジェクトについて

yuru-ui は個人用のデザインシステム。Vue 3 + TypeScript + Tailwind CSS v4 + Histoire で構築する。
ゆるっとした、まるい、パステル、かわいいデザインが特徴。

**必ず先に `DESIGN.md` を読んでください。** デザイントークン（カラー、角丸、シャドウ、ほよ線の実装方法など）がすべて記載されています。

## アーキテクチャ

### Tailwind-first 設計

コンポーネントのスタイリングは **Tailwind ユーティリティクラスを最大限使う**。
CSS変数はテーマ固有の形状プロパティ（非対称角丸・SVGフィルター・シャドウ質感等）のみに限定する。

- **カラー**: `@theme` で定義 → `yr:bg-primary-200`, `yr:text-secondary-700` 等
- **スペーシング**: `@theme` で定義 → `yr:p-md`, `yr:gap-lg` 等
- **テーマ形状**: CSS変数 + `@utility` → `yr:rounded-card`, `yr:shadow-theme-md` 等
- **テーマ動作**: `@custom-variant` → `yr:theme-hoyo:hover:-translate-y-0.5` 等

### Tailwind prefix

`yr:` prefix を使用（Tailwind v4 のバリアント方式、コロン区切り）。
例: `yr:bg-primary-200`, `yr:flex`, `yr:p-4`

### カラーシステム

3つのカラースケール（各 50-900）:
- **primary**: ミントグリーン — メインカラー
- **secondary**: ピンク — サブカラー
- **tertiary**: ラベンダー — 第3カラー

その他:
- **gray**: グリーンティントのグレースケール
- **semantic**: success / warning / error / info（bg + text ペア）
- **accent**: peach / sky / lemon（フラット bg + text ペア）

### テーマシステム

2つのテーマ: `hoyo`（デフォルト）と `pishi`
`YRProvider` の `theme` prop で切り替え。`data-theme` 属性で CSS変数が切り替わる。

テーマが変えるのは**形と質感**のみ:
- **hoyo**: 非対称角丸、wobbly-subtle フィルター、なみなみ Divider、ふわっとシャドウ、ウェイト軽め
- **pishi**: 均一角丸、フィルターなし、直線 Divider、くっきりシャドウ、ウェイトふつう

カラー・スペーシングはテーマ間で**共通**。

## コーディング規約

- Vue 3 Composition API + `<script setup lang="ts">` を使用
- コンポーネントファイル: `src/components/layout/YRContainer.vue` のようにカテゴリ分け
- Story ファイル: コンポーネントと同じディレクトリに `YRContainer.story.vue` として配置
- props の型は `defineProps` で TypeScript の interface を使って定義
- コンポーネント名のプレフィックスは `YR`（例: YRButton, YRCard）

### スタイリング規約

- **Tailwind クラスを最優先で使う**。`<style scoped>` は最小限に
- カラー・スペーシング・レイアウトは必ず Tailwind クラスで指定
- テーマ固有の形状は `@utility` で定義されたカスタムクラスを使う:
  - `yr:rounded-button`, `yr:rounded-card`, `yr:rounded-input`, `yr:rounded-default`, `yr:rounded-avatar`
  - `yr:filter-card`, `yr:filter-default`, `yr:filter-button`
  - `yr:shadow-theme-sm/md/lg/xl`
  - `yr:font-heading`, `yr:font-body`, `yr:font-small`
  - `yr:transition-theme`, `yr:border-theme`, `yr:tracking-theme`
- `var(--yr-*)` CSS変数を直接参照するのは `<style>` ブロック内のみ（テーマ別 hover/active 等）
- variant の色分けは computed で Tailwind クラス文字列を返すパターンで統一（colorMap + `:style` は使わない）

### `<style>` ブロックを使っていい場合

- テーマ別の hover/active 動作（`[data-theme="hoyo"] .yr-button:hover` 等）
- Vue `<Transition>` の CSS
- `@keyframes` アニメーション
- SVG data URI を使う YRDivider のテーマ別スタイル
- tooltip の位置計算など Tailwind で表現しにくい複雑な CSS

### Histoire ストーリー規約

- 全ストーリーで **2テーマ**（hoyo / pishi）の Variant を用意する
- ダークモードは Histoire ツールバーの切り替えで確認（手動ループは使わない）
- Tailwind クラスは `yr:` prefix を使う
- 背景は `yr:bg-gray-50 yr:dark:bg-gray-900` で light/dark 両対応にする

## ディレクトリ構成

```
yuru-ui/
├── CLAUDE.md          ← これ
├── DESIGN.md          ← デザイントークン詳細
├── package.json
├── vite.config.ts
├── histoire.config.ts
├── src/
│   ├── app.css        ← @theme, @utility, @custom-variant, テーマCSS変数
│   ├── index.ts       ← エクスポート
│   ├── components/
│   │   ├── provider/
│   │   │   └── YRProvider.vue
│   │   ├── layout/
│   │   │   ├── YRContainer.vue
│   │   │   ├── YRStack.vue
│   │   │   ├── YRGrid.vue
│   │   │   └── YRNavbar.vue
│   │   └── ui/
│   │       ├── YRButton.vue
│   │       ├── YRCard.vue
│   │       └── ...
│   └── composables/
│       ├── useClickOutside.ts
│       └── useToast.ts
└── public/
```

## 注意

- これは自分用なので過度な汎用性は不要
- shadcn のような高いカスタマイズ性は必要ない
- シンプルに「さっと使えてブレない」を目指す
- 勉強目的なので Histoire の story は丁寧に作る
