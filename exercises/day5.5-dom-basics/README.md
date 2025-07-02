# Day 5.5: DOM 基礎概念の理解

## 🎯 学習目標

このセクションでは、DOM 操作の前に必要な**基礎概念**を理解します。

### 📚 理解すべき概念

- **document** とは何か
- **要素（Element）** とは何か
- **ID** と **クラス** の違い
- **セレクタ** とは何か
- **HTML 構造** との関係

## ⚠️ 重要：学習の順序

```
Day 5.5 (基礎概念) → Day 6 (DOM操作) → Day 7 (イベントハンドリング)
```

**必ずこの順序で学習してください**。基礎概念を理解せずに DOM 操作に進むと、理解が困難になります。

## 📋 学習フロー（推奨：30 分）

### 1. 事前準備（5 分）

- [x] ブラウザの開発者ツールの使い方を確認
- [x] HTML と CSS の基本的な知識を復習

### 2. 理論学習（10 分）

- [x] `teaching-materials/day6-dom-manipulation.md` の **「基礎概念の理解」** の章を読む
- [x] 各概念の定義と特徴を理解する

### 3. 実践体験（15 分）

- [x] `dom-basics-practice.html` をブラウザで開く
- [x] 各セクションのボタンを順番にクリック
- [x] 開発者ツールのコンソールも使ってみる

## 📁 ファイル構成

### `dom-basics-practice.html`

- **対話式の基礎概念学習ツール**
- ブラウザで開いて体験する
- 6 つのセクションに分かれた段階的学習
- リアルタイムで概念を視覚化

## 🔧 実習の進め方

### Step 1: HTML ファイルを開く

```bash
# ブラウザでファイルを開く
open dom-basics-practice.html
# または、ファイルを直接ブラウザにドラッグ&ドロップ
```

### Step 2: 開発者ツールを準備

1. **F12** または **右クリック → 検証** で開発者ツールを開く
2. **Console** タブを選択
3. 実習と並行してコンソールで確認

### Step 3: 段階的に学習

```
セクション1: documentオブジェクト
↓
セクション2: 要素（Element）
↓
セクション3: ID
↓
セクション4: クラス
↓
セクション5: セレクタ
↓
セクション6: 実践練習
```

## 💡 学習のポイント

### 🔍 document オブジェクト

```javascript
// コンソールで試してみよう
console.log(document);
console.log(document.title);
console.log(document.URL);
```

### 🧱 要素の概念

```html
<!-- HTML -->
<div>これは要素です</div>

<!-- JavaScript -->
const element = document.querySelector('div'); console.log(element.tagName); //
"DIV"
```

### 🏷️ ID の理解

```html
<!-- HTML -->
<div id="unique-box">ユニークな要素</div>

<!-- JavaScript -->
const box = document.getElementById('unique-box'); //
IDは一意なので、必ず1つだけ取得される
```

### 🎨 クラスの理解

```html
<!-- HTML -->
<div class="card">カード1</div>
<div class="card">カード2</div>

<!-- JavaScript -->
const cards = document.querySelectorAll('.card'); console.log(cards.length); //
2
```

## ✅ 理解度チェック

### 基本概念（すべて理解できたら OK）

- [ ] `document`が何を表すか説明できる
- [ ] 要素と HTML タグの関係を理解している
- [ ] ID とクラスの違いを説明できる
- [ ] セレクタの基本的な書き方を知っている

### 実践確認（コンソールで試そう）

```javascript
// これらのコードが何をするか理解できますか？
document.getElementById('some-id');
document.querySelector('.some-class');
document.querySelectorAll('div');
element.textContent = 'テキスト変更';
element.classList.add('new-class');
```

## 🚀 次のステップ

### Day 6 への準備ができたら

- [x] 基礎概念を完全に理解した
- [x] 開発者ツールの基本操作ができる
- [x] ID とクラスの違いが明確

**→ Day 6 の DOM 操作演習に進みましょう！**

## 🔗 関連リンク

- **次の学習**: `exercises/day6-exercises/README.md`
- **理論資料**: `teaching-materials/day6-dom-manipulation.md`
- **MDN 参考**: [DOM について](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model)

## 💬 よくある質問

### Q: document と window の違いは？

A: `window`はブラウザウィンドウ全体、`document`は表示されている HTML 文書です。

### Q: ID とクラスはどちらを使うべき？

A:

- **ID**: 一意な要素の識別（1 ページに 1 つだけ）
- **クラス**: 同じスタイルや動作をする複数の要素

### Q: querySelector と getElementById の違いは？

A:

- **getElementById**: ID での取得専用、高速
- **querySelector**: あらゆるセレクタに対応、柔軟

---

**🎉 基礎概念をマスターして、DOM 操作の世界へ進みましょう！**
