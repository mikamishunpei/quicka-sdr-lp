> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

## 1. Visual Theme & Atmosphere
- **デザイン方針**: 圧倒的な技術力を感じさせるダーク・プレミアムかつクリーンなインターフェース
- **密度**: 情報密度は中程度（ゆったりと可読性の高いレイアウト）
- **キーワード**: 圧倒的、プレミアム、先進的、自動化、信頼感

## 2. Color Palette & Roles

### Primary（ブランドカラー）
- **Primary** (`#0a0d0c`): メイン背景用（スーパーダークグリーン/黒）
- **Primary Green** (`#1a2b26`): やや明るいブランディンググリーン（セクション区切り等）
- **Primary Gold** (`#c5a059`): アクセント兼コンバージョン用（CTA、アイコン、強調）
- **Earth / Sage** (`#d2b48c`, `#b4c4b5`): セカンダリアクセント（自然なトーン）

### Neutral（ニュートラル・テキスト用）
- **Text Primary** (`#ffffff`): 本文テキスト
- **Text Secondary** (`rgba(255, 255, 255, 0.7)` / `#b3b3b3`): 補足テキスト、ラベル
- **Text Muted** (`rgba(255, 255, 255, 0.4)` / `#666666`): 最小テキスト、背景に溶け込む要素
- **Border** (`rgba(255, 255, 255, 0.1)`): 区切り線、カードの枠など

## 3. Typography Rules

### 3.1 和文フォント
- **ゴシック体**: `"Noto Sans JP"`

### 3.2 欧文フォント
- **サンセリフ**: `"Inter"`

### 3.3 font-family 指定
```css
/* Tailwindでは以下の設定に統合 */
font-family: "Inter", "Noto Sans JP", sans-serif;
```

### 3.4 行間・字間
- **本文の行間 (line-height)**: 基本 `1.7` (`leading-relaxed`)〜`2.0`（読みやすさ重視）
- **見出しの行間**: `1.3` (`leading-tight`) 〜 `1.5` (`leading-snug`)
- **本文の字間 (letter-spacing)**: `0.04em` (`tracking-wide` 程度)、または `0.05em`

### 3.5 禁則処理・改行ルール
```css
/* body に対するグローバル設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.6 OpenType 機能
```css
/* 日本語のプロポーショナル字詰めと英字カーニング */
font-feature-settings: "palt" 1, "kern" 1;
```

## 4. Component Stylings

### Typography Classes (Tailwind)
- 見出し（H1/H2等）: `font-bold tracking-tight leading-tight`
- 本文: `font-normal tracking-wide leading-relaxed`
- アクセントやサブタイトル: `text-xs font-bold uppercase tracking-widest text-[#c5a059]` (Primary Gold)

### Buttons
**Primary Gold (CTA)**
- Background: `bg-brand-gold`
- Text: `text-brand-dark`
- Settings: `px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition transform`

**Primary White (Secondary CTA)**
- Background: `bg-white`
- Text: `text-black`
- Settings: `px-8 py-3.5 rounded-full font-bold hover:bg-white/90 transition`

### Cards (Glassmorphism & Dark mode)
- Background: `bg-white/5` または `bg-black/20`
- Border: `border border-white/10`
- Backdrop Blur: `backdrop-blur-md` などのすりガラス効果
- Shadow: `shadow-2xl`

## 5. Do's and Don'ts

### Do（推奨）
- 要素の境界は極力薄いボーダー（`border-white/10`）で区切る。
- 余白（Padding/Margin）は思い切って広くとる（セクション間は `py-24` などを積極採用）。
- 日本語本文では `leading-relaxed` または `leading-loose` を使い、読みやすさを確保する。
- プレミアム感を出すため、ハイライトには `brand-gold` を適切に使用。

### Don't（禁止）
- コンポーネント全体を見づらくするような過剰なシャドウ（強い不透明黒）は使わない。
- 欧米風の `leading-normal` (1.5) などを長い日本語の文章ブロックで使わない（行間が詰まりすぎるため）。
- コントラストが不足する明るい背景での白文字など、視認性の低い記述をしない。
