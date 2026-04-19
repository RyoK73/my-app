---
date: 2026-04-19
tags: [dark-mode, tailwind, css-variables, next-themes, theming]
---

# ダークモード・ライトモードの色管理

## 背景・問題意識

`theme-provider.tsx` で `next-themes` を使っているが、ダーク/ライト切り替え時に色をどこで管理するのかが不明瞭だった。

## 出た案・選択肢

- **Tailwind `dark:` ユーティリティ一本**: 使う場所に `dark:bg-gray-900` のように直接書く。シンプルだが色が散在する。
- **CSS変数 + Tailwind トークン**: `:root` / `.dark` で変数定義 → `tailwind.config` でトークン登録 → コンポーネントはセマンティックなクラス名で使う。色の実体が一箇所にまとまる。

## 決定・方向性

プロジェクトはすでに理想的な構成になっていた：

- `globals.css` の `:root` にライトモードの色を CSS変数で定義
- `.dark` ブロックでダークモード用の値に上書き
- `@theme inline` で CSS変数を Tailwind トークンとして登録（例: `--color-background` → `bg-background`）
- `next-themes` が `html` 要素に `.dark` クラスを付け外しすることで変数が切り替わる

**色を変えたいなら `:root` と `.dark` の中を編集するだけ。コンポーネント側は `bg-background`, `text-foreground` 等のセマンティッククラスで書けばOK。**

## 積み残し・次のアクション

- 実際にカスタムカラーを追加する場合、`:root` / `.dark` に変数を追加して `@theme inline` にも登録する手順を確認する
